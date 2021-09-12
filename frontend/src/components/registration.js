import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import logo from "./../../src/large_pharmacyleaf.png";
import "./registration.css";
const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const signUpButton = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/signup`, {
        firstName,
        lastName,
        email,
        password,
      })
      .then((result) => {
        history.push("/login");
      })
      .catch((err) => {});
  };
  return (
    <div className="background1">
      <div className="signup">
        <form onSubmit={signUpButton}>
          <img src={logo} />
          <input
            type="text"
            placeholder=" First Name "
            required
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder=" Last Name "
            required
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />

          <input
            type="email"
            placeholder=" Email "
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder=" Password "
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button>Sign Up</button>

          <div className="singUp">
            <p style={{ marginTop: "20px", fontStyle: "bold" }}>
              You already have an account ?
              <span>
                <Link className="render" to="/login">
                  {" "}
                  log in
                </Link>
              </span>
            </p>{" "}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
