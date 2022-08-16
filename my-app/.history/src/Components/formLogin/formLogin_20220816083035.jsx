import React from "react";
import "./formLogin.css";

const formLogin = () => {
  return (
    <div>
      <div className="box-login">
        <form className="formLogin">
          <input type="text" placeholder="E-mail" />
          <input type="text" />
        </form>
      </div>
    </div>
  );
};

export default formLogin;
