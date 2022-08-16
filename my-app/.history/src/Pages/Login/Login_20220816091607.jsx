import React from "react";
import "./Login.css";
import FormLogin from '../../Components/formLogin/formLogin'
import ImageLogo from '../../Assets/Icons/logo.png'

const Login = () => {
  return (
    <>
      <div className="backgound-one">
        <div>
        <img src={ImageLogo}/>
          <FormLogin/>
      </div>
    </>
  );
};

export default Login;
