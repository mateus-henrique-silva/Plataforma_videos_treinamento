import React, { useState } from "react";
import "./formLogin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  return (
    <div className="boxFather">
      <div className="box-login">
        <form className="formLogin">
          <h1>Acesso</h1>
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Link to="/">Esqueci minha senha</Link>
          <center><input type="submit" /></center>
          <p>Criar conta</p>
          <input type="checkbox" />
          <label
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
