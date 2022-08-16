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
          <Link to="/" >Esqueci minha senha</Link>
          <center>
            {" "}
            <input type="submit" />
            
          </center>
          <Link to="/" >Criar conta</Link>
        </form>
      </div>
    </div>
  );
};

export default formLogin;
