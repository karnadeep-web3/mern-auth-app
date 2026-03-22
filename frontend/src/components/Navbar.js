import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#222" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "10px" }}>
        Login
      </Link>
      <Link to="/signup" style={{ color: "#fff" }}>
        Signup
      </Link>
    </nav>
  );
}

export default Navbar;