import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/registration";
import Home from "./components/Home/home";
import AddProduct from "./components/admin-page/add-product";
import DeleteProduct from "./components/admin-page/delete-product";
import NavBar from "./components/navbar/navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path="/" render={() => <Home />} />

      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <SignUp />} />
      <Route exact path="/addProduct" render={() => <AddProduct />} />
      <Route exact path="/deleteProduct" render={() => <DeleteProduct />} />
    </div>
  );
}

export default App;
