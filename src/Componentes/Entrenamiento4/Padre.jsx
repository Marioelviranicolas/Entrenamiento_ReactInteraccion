import { useState } from "react";
import { Hijo } from "./Hijo";

export const Entrenamiento4 = () => {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <h2>Contador: {contador}</h2>

      <Hijo onIncrementar={incrementar} />
    </div>
  );
};
