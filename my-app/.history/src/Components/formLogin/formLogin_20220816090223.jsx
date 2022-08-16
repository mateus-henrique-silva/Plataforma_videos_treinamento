import React, {useState} from "react";
import "./formLogin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const formLogin = () => {
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
  return (
    <div>
      <div className="box-login">
        <form className="formLogin">
          <h1>Acesso</h1>
          <input type="text" placeholder="E-mail" value={email} onc />
          <input type="password" placeholder="Senha" />
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
