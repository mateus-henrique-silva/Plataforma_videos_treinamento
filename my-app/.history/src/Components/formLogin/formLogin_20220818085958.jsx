import React, { useState } from "react";
import "./formCreate.css";
import "./formLogin.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const FormLogin = () => {
  // const urlDirect = `http://localhost/${}`
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [code, setCode] = useState("");
  const [passRepete, setPassRepete] = useState("");
  const setUrl = window.location.href;
  function redirectToHome() {
    if (email == "teste" && pass == "1234") {
      // let stateObj = { id: "100" };

      
    //  return console.log(setUrl)
     window.location.href =`${setUrl}teste`;
    } else {
      alert("erro");
    }
  }
  const fadeRecovery= ()=>{
    const elementFade = document.getElementById("formFade");
    const elementCreate = document.getElementById("formCr");
    elementFade.classList.toggle("fadeIn");
    elementCreate.classList.toggle("formCr");S
  }
  const fadeEffect = () => {
    const elementFade = document.getElementById("formFade");
    const elementCreate = document.getElementById("formCr");
    elementFade.classList.toggle("fadeIn");
    elementCreate.classList.toggle("formCr");

    // return console.log(elementFade);
  };
  return (
    <div className="boxFather">
      <div className="box-login">
        <form id="formFade" className="formLogin">
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
          <a onClick={fadeRecovery} >Esqueci minha senha</a>
          <input type="button" value="Login" onClick={redirectToHome} />
          <p
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              margin: "5px",
            }}
            onClick={fadeEffect}
          >
            Criar conta
          </p>{" "}
          <div className="boxCenterCheck">
            <input type="checkbox" />
            <label style={{ marginLeft: "8px" }}>Lembre de mim</label>
          </div>
        </form>

        <form id="formCr" className="formCreate">
          <h1>Cadastro</h1>
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
          <input
            type="password"
            placeholder="Repetir Senha"
            required
            value={passRepete}
            onChange={(e) => {
              setPassRepete(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Código do cliente"
            required
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <input type="button" value="Cadastrar" onClick={redirectToHome} />
          <p
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              margin: "10px",
            }}
            onClick={fadeEffect}
          >
            Voltar a tela de login
          </p>{" "}
        </form>

        <form id="formRecovery" className="formCreate">
          <h1>Recuperação</h1>
          <input
            type="text"
            required
            placeholder="E-mail"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
       <h1>OU</h1>
    
          <input
            type="password"
            placeholder="Código do cliente"
            required
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          />
          <input type="button" value="Cadastrar" onClick={redirectToHome} />
          <p
            style={{
              textDecoration: "underline",
              cursor: "pointer",
              margin: "10px",
            }}
            onClick={fadeEffect}
          >
            Voltar a tela de login
          </p>{" "}
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
