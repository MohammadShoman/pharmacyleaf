import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "./../../src/large_pharmacyleaf.png";

import "./login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const checkLogin = () => {
    axios
      .post(`http://localhost:5000/login`, { email: email, password: password })
      .then((result) => {
        if (result.data.token) {
          history.push("/");
          window.location.reload(false);
        }
        localStorage.setItem("token", result.data.token);
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="background">
        <div className="login">
          <img src={logo} />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            placeholder="Enter E-mail Here"
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Password Here"
          />
          <button onClick={checkLogin}>Login</button>
          <div className="singUp">
            <p style={{ marginTop: "20px", fontStyle: "bold" }}>
              do not have have an account ?
              <span>
                <Link className="render" to="/signup">
                  {" "}
                  signUp
                </Link>
              </span>
            </p>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
