```javascript
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(
        "http://localhost:8000/api/auth/register",
        {
          name: name,
          email: email,
          password: password
        }
      );

      alert("User registered successfully");

      navigate("/login");

    } catch (error) {

      console.log(error.response?.data || error.message);

      alert(
        error.response?.data?.message || "Registration failed"
      );
    }
  };

  return (
    <div style={{ padding: "40px" }}>

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
        />

        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Register
        </button>

      </form>

      <p style={{marginTop:"10px"}}>
        Already have an account? <Link to="/login">Login</Link>
      </p>

    </div>
  );
}

export default Register;
```
