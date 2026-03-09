
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        "https://mern-auth-backend.onrender.com",
        {
          name,
          email,
          password
        }
      );

      alert("Registration successful");
      navigate("/login");

    } catch (error) {

      console.log(error);
      alert("Registration failed");

    }

  };

  return (

    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-4">

          <div className="card p-4">

            <h3 className="text-center mb-3">Register</h3>

            <form onSubmit={handleSubmit}>

              <input
                className="form-control mb-3"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
              />

              <input
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
              />

              <input
                className="form-control mb-3"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
              />

              <button className="btn btn-primary w-100">
                Register
              </button>

            </form>

            <p className="text-center mt-3">

              Already have an account?  
              <Link to="/login"> Login</Link>

            </p>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Register;
