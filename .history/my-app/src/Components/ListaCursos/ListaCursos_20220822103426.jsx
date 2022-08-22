import React from "react";
import "./ListaCursos.css";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const ListaCursos = () => {
  return (
    <div className="ListaCursosMain">
      <h2>Continue de onde parou</h2>
      <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;
    </div>
  );
};

export default ListaCursos;
