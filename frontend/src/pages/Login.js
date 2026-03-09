
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://mern-auth-backend.onrender.com",
        {
          email: email,
          password: password
        }
      );

      // Save JWT token
      localStorage.setItem(
        "token",
        res.data.token
      );

      // Save user info
      localStorage.setItem(
        "user",
        JSON.stringify(res.data.user)
      );

      alert("Login successful");

      navigate("/dashboard");

    } catch (error) {

      console.log(error);

      alert(
        error.response?.data?.message ||
        "Login failed"
      );

    }

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-4">

          <div className="card p-4">

            <h3 className="text-center mb-3">
              Login
            </h3>

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />

              <input
                className="form-control mb-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required
              />

              <button
                type="submit"
                className="btn btn-success w-100"
              >
                Login
              </button>

            </form>

            <p className="text-center mt-3">

              Don't have an account?

              <Link to="/register">
                {" "}Register
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Login;

