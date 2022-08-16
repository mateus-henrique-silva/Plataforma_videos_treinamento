import logo from "./logo.svg";
import React from "react";
import "./App.css";
import Login from "./Pages/Login/Login"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<Login />} path="/" />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
