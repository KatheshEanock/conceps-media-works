import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import OTPVerification from "./pages/OTPVerification";
import Dashboard from "./pages/Dashboard";
import RegistrationForm from "./pages/RegistrationForm";
import UserList from "./pages/UserList";
import ProductSearch from "./pages/ProductSearch";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Mani",
      email: "mani123@gmail.com",
      department: "Product Management",
      role: "Product development & lifecycle",
      phone: "9874563211",
      location: "Coimbatore, Tamil Nadu",
      address: "Sree Mahalakshmi Garden Layout",
      working: "Yes",
      experience: "1 year",
    },
    {
      id: 2,
      name: "Velu",
      email: "velu123@gmail.com",
      department: "Marketing Team",
      role: "Campaigns & market analysis",
      phone: "9874563211",
      location: "Coimbatore, Tamil Nadu",
      address: "Sree Mahalakshmi Garden Layout",
      working: "No",
      experience: "2 Years",
    },
    {
      id: 3,
      name: "Kavi",
      email: "kavi123@gmail.com",
      department: "HR Department",
      role: "Talent acquisition, employee welfare",
      phone: "9874563211",
      location: "Coimbatore, Tamil Nadu",
      address: "Sree Mahalakshmi Garden Layout",
      working: "Yes",
      experience: "5 Years",
    },
    {
      id: 4,
      name: "Ram",
      email: "ram123@gmail.com",
      department: "Sales Division",
      role: "Customer relations, sales strategy",
      phone: "9874563211",
      location: "Coimbatore, Tamil Nadu",
      address: "Sree Mahalakshmi Garden Layout",
      working: "No",
      experience: "3 Years",
    },
    {
      id: 5,
      name: "Priya",
      email: "priya123@gmail.com",
      department: "Product Management",
      role: "Product development & lifecycle",
      phone: "9874563211",
      location: "Coimbatore, Tamil Nadu",
      address: "Sree Mahalakshmi Garden Layout",
      working: "Yes",
      experience: "4 Years",
    },
  ]);

  const addUser = (newUser) => {
    setUsers((prev) => [...prev, { id: prev.length + 1, ...newUser }]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otp" element={<OTPVerification />} />

          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/registration"
              element={<RegistrationForm addUser={addUser} />}
            />
            <Route path="/users" element={<UserList users={users} />} />
            <Route path="/products" element={<ProductSearch />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>

          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}
