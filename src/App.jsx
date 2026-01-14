
import { useState, useContext } from "react";
import { Entrenamiento1 } from "./Componentes/Entrenamiento1/Entrenamiento1";
import { Entrenamiento2 } from "./Componentes/Entrenamiento2/Entrenamiento2";
import { Entrenamiento3 } from "./Componentes/Entrenamiento3/Entrenamiento3";
import { Entrenamiento4 } from "./Componentes/Entrenamiento4/Padre";
import { Entrenamiento5 } from "./Componentes/Entrenamiento5/Entrenamiento5";
import { Entrenamiento6 } from "./Componentes/Entrenamiento6/Entrenamiento6";
import { Entrenamiento7 } from "./Componentes/Entrenamiento7/Entrenamiento7";
import { ThemeContext } from "./Componentes/Entrenamiento8/ThemeContext";

import './App.css';

import { Entrenamiento9 } from "./Componentes/Entrenamiento9/Entrenamiento9";




export default function App() {
  const [entrenamiento, setEntrenamiento] = useState(0);
  const { botonColor, toggleBotonColor } = useContext(ThemeContext);




  return (
    <div className="app-container">
      {/* Título */}
      <h1>
        Entrenamientos
      </h1>
      
      {/* Botones de navegación */}
      <div className="button-group">

        <h2>Tema 5</h2>
        <button
          onClick={() => setEntrenamiento(1)}
        >
          Entrenamiento 1
        </button>
        
        <button
          onClick={() => setEntrenamiento(2)}
          >
          Entrenamiento 2
        </button>

        <button
          onClick={() => setEntrenamiento(3)}
          >
          Entrenamiento 3
        </button>

        <button
          onClick={() => setEntrenamiento(4)}
          >
          Entrenamiento 4
        </button>

        <button
          onClick={() => setEntrenamiento(5)}
          >
          Entrenamiento 5
        </button>

        <button
        onClick={() => setEntrenamiento(0)}
        
      >
        Ocultar entrenamiento
        </button>

      </div>

      {/* Botones de navegación */}
      <div className="button-group">

        <h2>Tema 6</h2>
        <button
          onClick={() => setEntrenamiento(6)}
        >
          Entrenamiento 1
        </button>

        <button
          onClick={() => setEntrenamiento(7)}
        >
          Entrenamiento 2
        </button>

        <button
          onClick={() => setEntrenamiento(9)}
        >
          Entrenamiento 4
        </button>

        <button
        onClick={() => setEntrenamiento(0)}
        className="ocultar-btn"
        style={{ backgroundColor: botonColor }}
        
      >
        Entrenamiento 3 / Ocultar entrenamiento
        </button>

         {/* Botón que cambia el color del anterior */}
         <button onClick={toggleBotonColor}>Cambiar color al botón ocultar</button>

        </div>

      {/* Renderizado condicional */}
      <div className="entrenamiento-container">
        {entrenamiento === 1 && <Entrenamiento1 />}
        {entrenamiento === 2 && <Entrenamiento2 />} 
        {entrenamiento === 3 && <Entrenamiento3 />}
        {entrenamiento === 4 && <Entrenamiento4 />}
        {entrenamiento === 5 && <Entrenamiento5 />}
        {entrenamiento === 6 && <Entrenamiento6 />}
        {entrenamiento === 7 && <Entrenamiento7 />}
        {entrenamiento === 8 && <ThemeContext />}
        {entrenamiento === 9 && <Entrenamiento9 />}
      </div>
    </div>
  );
}