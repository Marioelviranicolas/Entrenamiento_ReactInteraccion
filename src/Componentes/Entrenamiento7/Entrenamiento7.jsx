import { useState } from "react";

export const Entrenamiento7 = () => {
  const [tareas, setTareas] = useState([]);
  const [texto, setTexto] = useState("");
  const [filtro, setFiltro] = useState("todas");

  const agregarTarea = (e) => {
    e.preventDefault();
    if (texto.trim() === "") return;

    setTareas([
      ...tareas,
      { id: Date.now(), texto, completada: false }
    ]);

    setTexto("");
  };

  const completarTarea = (id) => {
    setTareas(prev => prev.filter(t => t.id !== id));
  };

  const tareasFiltradas = tareas.filter(t => {
    if (filtro === "pendientes") return !t.completada;
    return true;
  });

  return (
    <div>
      <h2>Tareas</h2>

      <form onSubmit={agregarTarea}>
        <input 
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button>Añadir</button>
      </form>

      <button onClick={() => setFiltro("todas")}>Todas</button>
      <button onClick={() => setFiltro("pendientes")}>Pendientes</button>

      <ul>
        {tareasFiltradas.map(t => (
          <li 
            key={t.id}
            onClick={() => completarTarea(t.id)}
           
          >
            {t.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
