import React from "react";
import { useCountdown } from "./useCountdown";

export const Entrenamiento9 = () => {
  const { timeLeft, resetearTemp } = useCountdown(10); // 10 segundos

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Tiempo restante: {timeLeft} s</h2>
      <button onClick={resetearTemp}>Reiniciar</button>
    </div>
  );
};
