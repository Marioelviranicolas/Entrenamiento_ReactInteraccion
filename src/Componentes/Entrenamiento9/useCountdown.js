import { useState, useEffect, useRef } from "react";

export const useCountdown = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const timerRef = useRef(null);

  // iniciar el temporizador
  const startTemp = () => {
    // Evitar múltiples intervalos
    if (timerRef.current) return;

    timerRef.current = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  //  reiniciar el temporizador
  const resetearTemp = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
    setTimeLeft(initialTime);
    startTemp();
  };

  // Inicia el timer automáticamente al montar
  useEffect(() => {
    startTemp();
    return () => clearInterval(timerRef.current);
  }, []);

  return { timeLeft, resetearTemp};
};
