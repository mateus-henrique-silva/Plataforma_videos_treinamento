import React from 'react'
import "./Porcentagem.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Porcentagem = () => {
  const percentage = 66;
  return (
    <div className="boxPorcentagemMain">


<CircularProgressbar value={percentage} text={`${percentage}%`} />;
    </div>
  )
}

export default Porcentagem