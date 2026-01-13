import { useState } from "react";

export const Entrenamiento1 = () => {
    const [edad, setEdad] = useState(25);

    const incrementarEdad = () => {
    setEdad(edad + 1);
};

return (
<div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
      <div className="flex flex-col items-center">
        <img
          src=""
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-200 shadow-lg mb-6"
        />
        
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Mario Elvira
        </h2>
        
        <div className="bg-purple-50 rounded-lg px-6 py-3 mb-6">
          <p className="text-lg text-gray-700">
            <span className="font-semibold">Edad:</span> {edad} años
          </p>
        </div>
        
        <button
          onClick={incrementarEdad}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105"
            >
          SUMAR AÑOS A MARIO
        </button>
      </div>
    </div>


    );

};