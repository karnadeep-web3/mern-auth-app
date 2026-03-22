import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/");
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>Dashboard 🚀</h2>
        <p>You are logged in</p>

        <button onClick={logout} style={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#1f4037" },
  card: { background: "#fff", padding: "30px", borderRadius: "10px" },
  button: { marginTop: "20px", padding: "10px", background: "red", color: "#fff", border: "none" }
};

export default Dashboard;