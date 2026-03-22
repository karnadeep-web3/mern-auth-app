import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const API = process.env.REACT_APP_API_URL;

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
 const res = await axios.post(`${API}/login`, {
  email,
  password,
}, {
  withCredentials: true
});

localStorage.setItem("token", res.data.accessToken);
      navigate("/dashboard");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome Back 👋</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
          style={styles.input}
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={styles.button} onClick={handleLogin} disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={styles.footer}>
          Don't have an account?{" "}
          <Link to="/signup" style={styles.link}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
  },
  card: {
    background: "#ffffff",
    padding: "35px",
    borderRadius: "16px",
    width: "340px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
    textAlign: "center",
  },
  title: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "8px",
    border: "none",
    background: "#0f172a",
    color: "#fff",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
  footer: {
    marginTop: "15px",
  },
  link: {
    color: "#0f172a",
    fontWeight: "bold",
  },
};

export default Login;