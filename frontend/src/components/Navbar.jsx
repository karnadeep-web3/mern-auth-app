import React from "react";

function Navbar() {

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="bg-blue-600 text-white p-4 flex justify-between">

      <h1 className="font-bold text-lg">
        MERN Auth App
      </h1>

      <button
        onClick={handleLogout}
        className="bg-white text-blue-600 px-4 py-1 rounded"
      >
        Logout
      </button>

    </div>
  );
}

export default Navbar;