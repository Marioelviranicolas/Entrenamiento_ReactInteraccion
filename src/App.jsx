import { useState } from "react";
import { Entrenamiento1 } from "./Componentes/Entrenamiento1/Entrenamiento1";
import { Entrenamiento2 } from "./Componentes/Entrenamiento2/Entrenamiento2";
import { Entrenamiento3 } from "./Componentes/Entrenamiento3/Entrenamiento3";
import { Entrenamiento4 } from "./Componentes/Entrenamiento4/Padre";
import { Entrenamiento5 } from "./Componentes/Entrenamiento5/Entrenamiento5"; // ← AÑADE ESTO

export default function App() {
  const [entrenamiento, setEntrenamiento] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-8">
      {/* Título */}
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        Entrenamientos
      </h1>
      
      {/* Botones de navegación */}
      <div className="flex gap-3 justify-center mb-8">
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
      </div>

      {/* Renderizado condicional */}
      <div className="flex justify-center">
        {entrenamiento === 1 && <Entrenamiento1 />}
        {entrenamiento === 2 && <Entrenamiento2 />}  {/* ← AÑADE ESTO */}
        {entrenamiento === 3 && <Entrenamiento3 />}
        {entrenamiento === 4 && <Entrenamiento4 />}
        {entrenamiento === 5 && <Entrenamiento5 />}
      </div>
    </div>
  );
}