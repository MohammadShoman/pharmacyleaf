import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import Login from "./components/login";
import SignUp from "./components/registration";
import Home from "./components/Home/home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <Home />} />

      <Route exact path="/login" render={() => <Login />} />
      <Route exact path="/signup" render={() => <SignUp />} />
    </div>
  );
}

export default App;
