import React from "react";
import "./Login.css";
import FormLogin from "../../Components/formLogin/formLogin";
import ImageLogo from "../../Assets/Icons/logo.png";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const Login = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyB04uH3MQH3ry6MKYb1-soxN30DnZjTitU",
    authDomain: "plataforma-de-treinamento.firebaseapp.com",
    projectId: "plataforma-de-treinamento",
    storageBucket: "plataforma-de-treinamento.appspot.com",
    messagingSenderId: "269132823632",
    appId: "1:269132823632:web:d35e287fe5603f20c62555",
    measurementId: "G-1LPG6080DT"
  };
  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
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
