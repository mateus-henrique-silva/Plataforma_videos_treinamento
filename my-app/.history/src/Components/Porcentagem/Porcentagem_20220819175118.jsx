import React from "react";
import "./Porcentagem.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Porcentagem = () => {
  const percentage = 66;
  return (
    <div className="boxPorcentagemMain">
      <h1>Meu aprendizado</h1>
      
        <CircularProgressbar value={66} color text={"66%"} />
      
    </div>
  );
};

export default Porcentagem;
