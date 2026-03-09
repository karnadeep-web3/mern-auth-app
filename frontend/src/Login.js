import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        {
          email: email,
          password: password
        }
      );

      console.log(response.data);

      localStorage.setItem("token", response.data.token);

      navigate("/dashboard");

    } catch (error) {

      console.error(error);
      alert("Login failed");

    }
  };

  return (
    <div
      style={{
        height: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <form onSubmit={handleSubmit}>

        <h1>Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            display: "block",
            margin: "10px",
            padding: "8px"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            display: "block",
            margin: "10px",
            padding: "8px"
          }}
        />

        <button type="submit">Login</button>

      </form>
    </div>
  );
}

export default Login;