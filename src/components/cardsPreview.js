import  React from "react";
import img1 from "./img/11.jpg";
import img2 from "./img/22.jpg";
import img3 from "./img/33.jpg";
import img4 from "./img/44.jpg";
import img5 from "./img/55.jpg";
import img6 from "./img/66.jpg";
import img7 from "./img/77.jpg";
import img8 from "./img/88.jpg";
import { HashLink as Link1 } from "react-router-hash-link";

export const card1 = {
  id: "Card1",
  src: img1,
  title: "¿QUÉ ES LA HISTORIA DEL CONSUMO?",
  text: "Los habitos del consumo como una ventana al interior de la sociedad",
};

export const card2 = {
  id: "Card2",
  src: img2,
  title: "CAMBIO DE SIGLO: APARECE EL CONSUMO MASIVO",
  text:
    "Entre 1880 y 1914, la Argentina experimentó el período de desarrollo más rápido de su historia.",
};

export const card3 = {
  id: "Card3",
  src: img3,
  title: "AÑOS 20: EL GRAN SALTO DEL CONSUMO",
  text:
    "La década del 20, el crecimiento de la clase media y la revolución de la publicidad",
};

export const card4 = {
  id: "Card4",
  src: img4,
  title: "AÑOS 30: PALIANDO LA CRISIS",
  text:
    "La crisis de 1929 y la Gran Depresión que le siguió afectaron a la Argentina como al resto del mundo capitalista",
};
export const card5 = {
  id: "Card5",

  src: img5,
  title: "PERONISMO: LOS OBREROS CONSUMIDORES.",
  text:
    "Una vez finalizada la 2GM se afianzó en los países capitalistas la tendencia hacia una mayor intervención estatal en la vida económica y social",
};
export const card6 = {
  id: "Card6",

  src: img6,
  title: "AÑOS 60/70: MECANIZACIÓN DEL HOGAR Y LA HORA DE LA JUVENTUD",
  text:
    "Se inicia una transformación social que algunos economistas han denominado de “desarrollo intermedio”",
};
export const card7 = {
  id: "Card7",
  src: img7,
  title: "ACTIVIDADES PARA EL AULA.",
  text: "Actividades para docentes y estudiantes",
};
export const card8 = {
  id: "Card8",
  src: img8,
  title: "ACERCA DE ESTE PROYECTO",
  text: "",
};



export const Card = (props) => {
  return (
    <React.Fragment>
      <div className="card" id={props.id} >
        <img src={props.src} className="card-img-top img-fluid" alt="card-img" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          </div>
          <div className="card-footer font-weight-bold">
            <Link1 to={props.link} className="text-primary">Ver más</Link1>
          </div>
      </div>
    </React.Fragment>
  );
};
