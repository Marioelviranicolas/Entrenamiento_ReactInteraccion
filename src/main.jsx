import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "./Componentes/Entrenamiento8/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);




