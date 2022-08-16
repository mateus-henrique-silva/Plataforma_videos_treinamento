import React from "react";
import "./formLogin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const formLogin = () => {
  return (
    <div>
      <div className="box-login">
        <form className="formLogin">
          <h1>Acesso</h1>
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Senha" />
          <Lin href="#" ></a>
          <center>
            {" "}
            <input type="submit" />
          </center>
        </form>
      </div>
    </div>
  );
};

export default formLogin;
