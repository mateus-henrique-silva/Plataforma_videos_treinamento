import React from "react";
import "./Login.css";
import FormLogin from "../../Components/formLogin/formLogin";
import ImageLogo from "../../Assets/Icons/logo.png";

const Login = () => {
  return (
    <>
      <div className="backgound-one">
        <div></div>
        <div className="logoPrincipal">
         <center> <img src={ImageLogo} /></center>
          <p><b>Plataforma de treinamentos</b> da Líder Brasil Distribuidora.</p>
        </div>
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
