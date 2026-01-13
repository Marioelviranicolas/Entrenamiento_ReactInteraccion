import { useState } from "react";
import './CardEnt1.css';  // Importa el CSS

export const CardEnt1 = ({ nombre, apellidos, edadInicial, imagen }) => {
  const [edad, setEdad] = useState(edadInicial);

  const incrementarEdad = () => {
    setEdad(edad + 1);
  };

  return (
    <div className="card">
      <img src={imagen} alt={`${nombre} ${apellidos}`} className="card-img" />
      
      <h2 className="card-title">{nombre} {apellidos}</h2>
      
      <p className="card-edad">Edad: {edad} años</p>
      
      <button onClick={incrementarEdad} className="card-button">
        Cumplir años
      </button>
    </div>
  );
};