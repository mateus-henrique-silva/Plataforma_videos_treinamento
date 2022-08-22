import React from "react";
import "./ListaCursos.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const ListaCursos = () => {
  const arrayItens = [
    {key:0, content: "Titulo 1", image:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fst2.depositphotos.com%2F6544740%2F9337%2Fi%2F600%2Fdepositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg&imgrefurl=https%3A%2F%2Fbr.depositphotos.com%2Fstock-photos%2Fp%25C3%25B4r-do-sol.html&tbnid=MVPifzW9pIRDFM&vet=12ahUKEwiJjJGZhNv5AhXpN7kGHbt5DfEQMygBegUIARCLAQ..i&docid=lPtar6DAj3Pg5M&w=600&h=400&q=imagens&ved=2ahUKEwiJjJGZhNv5AhXpN7kGHbt5DfEQMygBegUIARCLAQ"},
    {key:1, content: "Titulo 2" },
    {key:2, content: "Titulo 3" },
    {key:3, content: "Titulo 4" },
    {key:4, content: "Titulo 5" },
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
            <div key="{key}" className="card" style={{ textAlign: "center" }}>
              <h3>{itens.content}</h3>
              <img src={itens.image}/>
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
