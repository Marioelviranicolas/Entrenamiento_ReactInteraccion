import { useState } from "react";

export const Entrenamiento3 = () => {
  // Estados para cada campo
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [password, setpassword] = useState("");

  
  const envioForm = (e) => {
    e.preventDefault(); 

    // Validación sencilla del correo
    if (!correo.includes("@")) {
      alert("El correo debe contener un '@'");
      return;
    }

    // Creamos un objeto con los datos
    const datos = {
      nombre,
      correo,
      password
    };

    console.log("Datos del formulario:", datos);

    // Limpiar campos 
    setNombre("");
    setCorreo("");
    setpassword("");
  };

  return (
    <form onSubmit={envioForm}>
      <div>
        <label>Nombre:</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Correo:</label>
        <input
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Enviar</button>
    </form>
  );
};
