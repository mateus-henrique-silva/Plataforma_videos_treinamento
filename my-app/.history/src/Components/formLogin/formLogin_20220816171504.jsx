import React, { useState } from "react";
import "./formLogin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Api from "../../Services/Api/Api";

const FormLogin = () => {
   
    // const urlDirect = `http://localhost/${}`
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [check, setCheck] = useState("");
  function  redirectToHome(){
    if(email=="teste" && pass=="1234"){
        window.location.href("http://localhost:3001/teste")
    }
    else{
        alert("erro")
    }

    }
  return (
    <div className="boxFather">
      <div className="box-login">
        <form className="formLogin">
          <h1>Acesso</h1>
          <input
            type="text"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Senha"
            required
            value={pass}
            
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <Link to="/">Esqueci minha senha</Link>
          <input type="button" Value="Login" />
          <p style={{ textDecoration: "underline", cursor: "pointer" }}>
            Criar conta
          </p>{" "}
          <div className="boxCenterCheck">
            <input type="checkbox"  />
            <label style={{ marginLeft: "8px" }}>Lembre de mim</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
