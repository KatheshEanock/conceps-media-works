import { Link } from "react-router-dom";
import "../styles/Sidebar.css";
import { menuItems } from "../lib/mockData";

export default function Sidebar({ isOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h2 className="sidebar-logo">CONCEPS</h2>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div key={index} className="nav-section">
            {item.isCategory ? (
              <>
                <div className="nav-category">{item.label}</div>
                <ul className="nav-list">
                  {item.children.map((child, childIndex) => (
                    <li key={childIndex}>
                      <Link to={child.path} className="nav-link">
                        <span className="nav-icon">{child.icon}</span>
                        <span className="nav-label">{child.label}</span>
                        {child.badge && (
                          <span className="nav-badge">{child.badge}</span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link to={item.path} className="nav-link main-link">
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
