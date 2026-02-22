import { useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { earnings, earningsChartData, stats, teams } from "../lib/mockData";
import { useContext } from "react";
import { ThemeContext } from "../components/theme-provider";
import "../styles/Dashboard.css";
import Input from "../components/input/Input";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Dashboard() {
  const navigate = useNavigate();
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-left">
          <h1>Dashboard</h1>
          <p>Central Hub for Personal Customization</p>
        </div>
        <div className="header-right">
          {/* <label className="theme-switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider"></span>
          </label> */}
          <p className="icon-btn">
            <CiSearch />
          </p>
          <p className="icon-btn">
            <IoMailUnreadOutline />
          </p>
          <p className="icon-btn">
            <CgProfile />
          </p>
        </div>
      </header>

      <main className="dashboard-main">
        {/* Stats Cards */}
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">
                <img src={stat.icon} alt={stat.title} className="image-card" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-title">{stat.title}</div>
            </div>
          ))}
        </div>

        {/* Highlights and Earnings */}
        <div className="content-grid">
          <div className="card highlights-card">
            <div className="card-header">
              <h3>Highlights</h3>
              <p className="menu-btn">⋮</p>
            </div>
            <div className="highlights-content">
              <div className="highlight-item">
                <span className="label">All time sales</span>
                <span className="amount">$295.7k</span>
                <span className="change">+12%</span>
              </div>
              <div className="highlight-bars">
                <div className="bar metronic" style={{ width: "40%" }}></div>
                <div className="bar bundle" style={{ width: "30%" }}></div>
                <div
                  className="bar metronic-nest"
                  style={{ width: "30%" }}
                ></div>
              </div>
              <div className="legend">
                <span>
                  <em style={{ background: "#FFD700" }}></em> Metronic
                </span>
                <span>
                  <em style={{ background: "#FF6B6B" }}></em> Bundle
                </span>
                <span>
                  <em style={{ background: "#4ECDC4" }}></em> MetronicNest
                </span>
              </div>
              <div className="earnings-list">
                {earnings.map((item, idx) => (
                  <div key={idx} className="earning-item">
                    <span>{item.platform}</span>
                    <span className="value">{item.value}</span>
                    <span
                      className={`change ${item.change.startsWith("+") ? "positive" : "negative"}`}
                    >
                      {item.change}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="card earnings-card">
            <div className="card-header">
              <h3>Earnings</h3>
              <select className="period-select">
                <option>Referrals only</option>
                <option>12 months</option>
              </select>
            </div>
            <div className="earnings-chart">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={earningsChartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
                  <XAxis dataKey="month" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      borderRadius: "8px",
                      border: "none",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                    }}
                    formatter={(value) => [
                      `$${value.toLocaleString()}`,
                      "Sales",
                    ]}
                  />
                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#0052CC"
                    strokeWidth={3}
                    dot={{ r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="earnings-stats">
              <div className="stat-row">
                <span>June, 2024 Sales</span>
                <span className="amount">$34,233.00</span>
                <span className="change positive">+5%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Teams Section */}
        <div className="card teams-card">
          <div className="card-header">
            <h3>Teams</h3>
            <Input type="text" placeholder="Search Teams" />
          </div>
          <div className="teams-list">
            <div className="table-scroll">
              <table className="teams-table">
                <thead>
                  <tr>
                    <th>Team</th>
                    <th>Rating</th>
                    <th>Last Modified</th>
                    <th>Members</th>
                  </tr>
                </thead>
                <tbody>
                  {teams.map((team, idx) => (
                    <tr key={idx}>
                      <td>
                        <div className="team-info">
                          <strong>{team.name}</strong>
                          <p>{team.description}</p>
                        </div>
                      </td>
                      <td>
                        <div className="rating">
                          {[...Array(team.rating)].map((_, i) => (
                            <span key={i}>⭐</span>
                          ))}
                        </div>
                      </td>
                      <td>Oct 15, 2024</td>
                      <td>👥 👥 👥</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
