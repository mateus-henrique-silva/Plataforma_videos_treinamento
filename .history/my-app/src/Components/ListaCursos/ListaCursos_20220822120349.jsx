import React from "react";
import "./ListaCursos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import imageCarousel from "../../Assets/ImageBackground/curso-1.png"

const ListaCursos = () => {
  const arrayItens = [
    { content: "Titulo 1", image:imageCarousel},
    { content: "Titulo 2" },
    { content: "Titulo 3" },
    { content: "Titulo 4" },
    { content: "Titulo 5" },
  ];
 arrayItens.map((e)=>{
  return console.log(e.image)
 })
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="ListaCursosMain">
      <h2>Continue de onde parou</h2>
      <Carousel responsive={responsive}>
        {arrayItens.map((itens) => {
          return (
            <div className="card" style={{ textAlign: "center" }}>
              <h3>{itens.content}</h3>
              {/* <img src={imageCarousel}/> */}
            </div>
          );
        })}

        {/* <div className="card" style={{textAlign: 'center'}}>Item 2</div>
        <div className="card" style={{textAlign: 'center'}}>Item 3</div>
        <div className="card" style={{textAlign: 'center'}}>Item 4</div> */}
      </Carousel>
    </div>
  );
};

export default ListaCursos;
