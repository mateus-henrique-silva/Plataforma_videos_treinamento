import React from "react";
import "./ListaCursos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ListaCursos = () => {
  const arrayItens = [
    {
      key: 0,
      content: "Titulo 1",
      image:
        "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      key: 1,
      content: "Titulo 2",
      image:
        "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      key: 2,
      content: "Titulo 3",
      image:
        "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      key: 3,
      content: "Titulo 4",
      image:
        "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
    {
      key: 4,
      content: "Titulo 5",
      image:
        "https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg",
    },
  ];
  arrayItens.map((e) => {
    return console.log(e.image);
  });
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
            <div key="{key}" className="card">
              <img src={itens.image} />
              <h3>{itens.content}</h3>
              
            </div>
          );
        })}


      </Carousel>
    </div>
  );
};

export default ListaCursos;
