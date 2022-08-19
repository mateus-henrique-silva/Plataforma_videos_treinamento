import React from "react";
import "./Porcentagem.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Porcentagem = () => {
  const percentage = 66;
  return (
    <div className="boxPorcentagemMain">
      <h1>Meu aprendizado</h1>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar value={66} text={"TESTE"} />
      </div>
    </div>
  );
};

export default Porcentagem;
