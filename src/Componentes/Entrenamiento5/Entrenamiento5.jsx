import { useState } from "react";

export const Entrenamiento5 = () => {
  const productos = [
    { id: 1, nombre: "Platanos", precio: 2 },
    { id: 2, nombre: "Peras", precio: 3 },
    { id: 3, nombre: "Manzanas", precio: 4 },
    { id: 4, nombre: "Granadas", precio: 6 },
  ];

  const [textoFiltro, setTextoFiltro] = useState("");
  const [precioMax, setPrecioMax] = useState("");

 
  const productosFiltrados = productos.filter((p) => {
    const coincideTexto = p.nombre.toLowerCase().includes(textoFiltro.toLowerCase());
    const coincidePrecio = precioMax === "" || p.precio <= Number(precioMax);

    return coincideTexto && coincidePrecio;
  });

  return (
    <div>
      <h2>Lista de Productos</h2>

      
      <input
        type="text"
        placeholder="Buscar producto..."
        value={textoFiltro}
        onChange={(e) => setTextoFiltro(e.target.value)}
      />

      {/* Filtro por precio máximo */}
      <input
        type="number"
        placeholder="Precio máximo"
        value={precioMax}
        onChange={(e) => setPrecioMax(e.target.value)}
        style={{ marginLeft: "10px" }}
      />

      <ul>
        {productosFiltrados.length === 0 ? (
          <li>No hay productos que coincidan</li>
        ) : (
          productosFiltrados.map((p) => (
            <li key={p.id}>
              {p.nombre} — {p.precio}€
            </li>
          ))
        )}
      </ul>
    </div>
  );
};
