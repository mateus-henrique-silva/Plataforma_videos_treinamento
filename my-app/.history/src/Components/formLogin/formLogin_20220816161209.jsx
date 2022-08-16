import React, { useState } from "react";
import "./formLogin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Api from "../../Services/Api/Api";
import One from "./One/One";

const FormLogin = () => {
  return (
    <div className="boxFather">
      <Router>
        <Routes>
     <One />
          
        </Routes>
      </Router>
    </div>
  );
};

export default FormLogin;
