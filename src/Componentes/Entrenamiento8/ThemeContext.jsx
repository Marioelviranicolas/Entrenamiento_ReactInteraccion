import { createContext, useState } from "react";

// Contexto para el color del botón "Ocultar entrenamiento"
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [botonColor, setBotonColor] = useState("gray"); // color inicial

  const toggleBotonColor = () => {
    setBotonColor(prev => (prev === "gray" ? "darkred" : "gray"));
  };

  return (
    <ThemeContext.Provider value={{ botonColor, toggleBotonColor }}>
      {children}
    </ThemeContext.Provider>
  );
};