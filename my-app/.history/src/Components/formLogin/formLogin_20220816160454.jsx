import React, { useState } from "react";
import "./formLogin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Api from '../../Services/Api/Api'


const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="boxFather">
        
    </div>
  );
};

export default FormLogin;
