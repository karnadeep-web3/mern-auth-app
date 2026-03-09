import React from "react";
import { Link } from "react-router-dom";

function DashboardLayout({ children }) {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (

    <div style={{ display: "flex", height: "100vh" }}>

      {/* Sidebar */}

      <div
        style={{
          width: "220px",
          background: "#111827",
          color: "white",
          padding: "20px"
        }}
      >

        <h2>AuthApp</h2>

        <div style={{ marginTop: "30px" }}>

          <p>
            <Link to="/dashboard" style={{ color: "white" }}>
              Dashboard
            </Link>
          </p>

          <p>
            <Link to="/profile" style={{ color: "white" }}>
              Profile
            </Link>
          </p>

          <p>
            <button
              onClick={handleLogout}
              style={{
                marginTop: "20px",
                padding: "8px",
                background: "#ef4444",
                border: "none",
                color: "white"
              }}
            >
              Logout
            </button>
          </p>

        </div>

      </div>

      {/* Main content */}

      <div
        style={{
          flex: 1,
          padding: "40px",
          background: "#f3f4f6"
        }}
      >
        {children}
      </div>

    </div>
  );
}

export default DashboardLayout;