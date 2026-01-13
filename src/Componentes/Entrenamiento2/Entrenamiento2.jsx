import { useState } from "react"; // Traemos useState de React para manejar el estado
import './Entrenamiento2.css'; // Importamos los estilos del componente

// Creamos un componente llamado Entrenamiento2
export const Entrenamiento2 = () => {
  // Estado para guardar la lista de tareas (inicialmente vacío)
  const [tareas, setTareas] = useState([]);

  // Estado para guardar lo que escribes en el input
  const [textoTarea, setTextoTarea] = useState('');

  // Función para agregar una nueva tarea
  const agregarTarea = () => {
    if (textoTarea.trim() !== '') { // Solo agrega si no está vacío
      const nuevaTarea = {
       
        texto: textoTarea, // Guardamos el texto que escribiste
        completada: false // Al principio la tarea no está completada
      };
      setTareas([...tareas, nuevaTarea]); // Agregamos la nueva tarea al estado
      setTextoTarea(''); // Limpiamos el input
    }
  };

  // Función para marcar una tarea como completada o no completada
  const marcarCompletada = (id) => {
    setTareas(tareas.map(tarea => 
      tarea.id === id 
        ? { ...tarea, completada: !tarea.completada } // Cambiamos su estado
        : tarea // Las demás tareas quedan igual
    ));
  };

  // Función para eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id)); // Quitamos la tarea del estado
  };

  return (
    <div className="tareas-container">
      <h2 className="tareas-titulo">Lista de Tareas</h2>
      
      {/* Input y botón para agregar tareas */}
      <div className="tareas-input-group">
        <input
          type="text"
          value={textoTarea} // Lo que escribes aparece aquí
          onChange={(e) => setTextoTarea(e.target.value)} // Guardamos lo que escribes
          placeholder="Escribe una nueva tarea..."
          className="tareas-input"
        />
        <button onClick={agregarTarea} className="tareas-btn-agregar">
          Agregar Tarea
        </button>
      </div>

      {/* Lista de tareas */}
      <div className="tareas-lista">
          {tareas.map(tarea => (
            <div 
              key={tarea.id} 
              className={`tarea-item ${tarea.completada ? 'completada' : ''}`} // Cambia de estilo si está completada
            >
              <span className="tarea-texto">{tarea.texto}</span>
              <div className="tarea-botones">
                <button 
                  onClick={() => marcarCompletada(tarea.id)}
                  className="tarea-btn-completar"
                >
                  {tarea.completada ? 'sin completar' : 'completada'} 
                </button>
                <button 
                  onClick={() => eliminarTarea(tarea.id)}
                  className="tarea-btn-eliminar"
                >
                    borrar
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
