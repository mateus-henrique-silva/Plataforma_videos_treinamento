import React from "react";
import "./formLogin.css";

const formLogin = () => {
  return (
    <div>
      <div className="box-login">
        
        <form className="formLogin">
        <h1>Acesso</h1>
          <input type="text" placeholder="E-mail" />
          <input type="text" placeholder="Senha" />
          <center> <input type="submit"/></center> 
        </form>
      </div>
    </div>
  );
};

export default formLogin;
