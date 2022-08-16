import React from "react";
import "./Login.css";
import FormLogin from "../../Components/formLogin/formLogin";
import ImageLogo from "../../Assets/Icons/logo.png";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const Login = () => {
  return (
    
    <>
      <div className="backgound-one">
        <div className="back-center">
          <div className="logoPrincipal">
            <center>
              {" "}
              <img src={ImageLogo} />
            </center>
            <p>
              <b>Plataforma de treinamentos</b> da Líder Brasil Distribuidora.
            </p>
          </div>
        </div>
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
