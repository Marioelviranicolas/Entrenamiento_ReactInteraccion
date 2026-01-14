import { useState } from "react";

export const Entrenamiento6 = () => {
  const MIN = 0;
  const MAX = 10;

  const [contador, setContador] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const incrementar = () => {
    if (contador < MAX) {
      const nuevo = contador + 1;
      setContador(nuevo);

      if (nuevo === MAX) {
        setMensaje("has llegado al maximo");
      } else {
        setMensaje("");
      }
    }
  };

  const decrementar = () => {
    if (contador > MIN) {
      const nuevo = contador - 1;
      setContador(nuevo);

      if (nuevo === MIN) {
        setMensaje("has llegado al minimo");
      } else {
        setMensaje("");
      }
    }
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>

      <button onClick={decrementar} disabled={contador === MIN}>
        -
      </button>

      <button onClick={incrementar} disabled={contador === MAX}>
        +
      </button>

      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};
