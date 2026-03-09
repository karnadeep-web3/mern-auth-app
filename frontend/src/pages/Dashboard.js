
import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const navigate = useNavigate();

  let user = null;

  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    console.log("Invalid user data in localStorage");
  }

  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");

  };

  return (

    <div className="container mt-5">

      <h2>Dashboard</h2>

      <div className="card p-4 mt-3">

        <h4>
          Welcome {user?.name || "User"}
        </h4>

        <p>
          Email: {user?.email || "Not available"}
        </p>

        <button
          className="btn btn-danger"
          onClick={logout}
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Dashboard;

