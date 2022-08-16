import React from "react";
import "./Login.css";
import FormLogin from '../../Components/formLogin/formLogin'
import ImageLogo from '../../Assets/Icons/logo.png'

const Login = () => {
  return (
    <>
      <div className="backgound-one">
        <div className="logoPrincipal">
        <img src={ImageLogo}/>
        <p>Plataforma de treinamentos da Líder Brasil Distribuidora.</p>
        </div>
          <FormLogin/>
      </div>
    </>
  );
};

export default Login;
