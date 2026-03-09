import React from "react";

function Navbar() {
  const token = localStorage.getItem("token");

  return (
    <div>
      <h2>My App</h2>
      {token ? <p>Logged In</p> : <p>Not Logged In</p>}
    </div>
  );
}

export default Navbar;