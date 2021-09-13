import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./../../../src/large_pharmacyleaf.png";
const NavBar = () => {
  const token = localStorage.getItem("token");
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} />
        <div className="all-links">
          {!token ? (
            <>
              <Link
                className="links"
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                className="links"
                to="/login"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                login{" "}
              </Link>
              <Link
                className="links"
                to="/signup"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                signUp{" "}
              </Link>
            </>
          ) : (
            <>
              <Link
                className="links"
                to="/"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                Home{" "}
              </Link>
              <Link
                className="links"
                to="/deleteProduct"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                delete-Product{" "}
              </Link>
              <Link
                className="links"
                to="/addProduct"
                style={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                add-Product{" "}
              </Link>
              <Link
                className="links"
                to="/"
                style={{ textDecoration: "none", color: "black" }}
                onClick={() => {
                  localStorage.clear();
                }}
              >
                {" "}
                logOut{" "}
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
