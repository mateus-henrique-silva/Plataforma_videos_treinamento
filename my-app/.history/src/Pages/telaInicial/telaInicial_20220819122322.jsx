import React from "react";
import Header from "../../Components/Header/Header";
import Porcentagem from "../../Components/Porcentagem/Porcentagem";
import ListaCursos from "../../Components/ListaCursos/ListaCursos";
import "./boxPorcentagemMain"

const telaInicial = () => {
  return (
    <div>
      <Header />
      <div className="box-main">
        <Porcentagem />
        <ListaCursos />
      </div>
    </div>
  );
};

export default telaInicial;
