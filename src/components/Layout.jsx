import { useState } from "react";
import Sidebar from "./Sidebar";
import { IoIosMenu } from "react-icons/io";
import "../styles/Layout.css";
import { Outlet } from "react-router-dom";

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="layout">
      <Sidebar isOpen={sidebarOpen} />
      <div className="layout-main">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle sidebar"
        >
          <IoIosMenu />
        </button>
        <main className="layout-content">{children}</main>
      </div>
      <Outlet />
    </div>
  );
}
