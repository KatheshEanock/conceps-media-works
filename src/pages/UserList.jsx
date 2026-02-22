import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

import "../styles/UserList.css";
import Button from "../components/button/Button";
import Input from "../components/input/Input";

export default function UserList({ users }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm),
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  return (
    <div className="userlist-container">
      <header className="list-header">
        <div className="header-content">
          <h1>List</h1>
          <p>Central Hub for Personal Customization</p>
        </div>
        <Button
          className="btn-primary"
          onClick={() => navigate("/registration")}
        >
          Click To Register
        </Button>
      </header>

      <main className="list-content">
        <div className="search-section">
          <h2>List</h2>
          <Input
            type="text"
            placeholder="Search Teams"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
          />
        </div>

        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Department</th>
                <th>Number</th>
                <th>Location</th>
                <th>Address</th>
                <th>Currently working</th>
                <th>Experience</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers.map((user, index) => (
                <tr key={user.id}>
                  <td>
                    {String(indexOfFirstItem + index + 1).padStart(2, "0")}
                  </td>
                  <td>
                    <div className="user-cell">
                      <div className="user-name">{user.name}</div>
                      <div className="user-email">{user.email}</div>
                    </div>
                  </td>
                  <td>
                    <div className="department-cell">
                      <div className="dept-name">{user.department}</div>
                      <div className="dept-role">{user.role}</div>
                    </div>
                  </td>
                  <td>{user.phone}</td>
                  <td>{user.location}</td>
                  <td>{user.address}</td>
                  <td
                    className={
                      user.working === "Yes" ? "working-yes" : "working-no"
                    }
                  >
                    {user.working}
                  </td>
                  <td>{user.experience}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-section">
          <div className="pagination-left">
            <span>Show</span>
            <select
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
            </select>
            <span>per page</span>
          </div>

          <div className="pagination-info">
            {indexOfFirstItem + 1}-
            {Math.min(indexOfLastItem, filteredUsers.length)} of{" "}
            {filteredUsers.length}
          </div>

          <div className="pagination-controls">
            <Button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
            >
              <FaAngleLeft />
            </Button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                className={`page-btn ${currentPage === page ? "active" : ""}`}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <Button
              className="page-btn"
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
            >
              <FaAngleRight />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
