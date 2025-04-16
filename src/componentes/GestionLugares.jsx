import { useState } from "react";

export default function GestionLugares() {
  const [lugares, setLugares] = useState(["Clínica Zapopan", "Hospital Guadalajara"]);

  const agregarLugar = () => {
    const nuevo = prompt("Escribe el nombre del nuevo lugar:");
    if (nuevo) setLugares([...lugares, nuevo]);
  };

  const eliminarLugar = (index) => {
    const copia = [...lugares];
    copia.splice(index, 1);
    setLugares(copia);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
      <h2>Gestión de lugares de recolección</h2>
      <ul>
        {lugares.map((lugar, i) => (
          <li key={i} style={{ marginBottom: "0.5rem" }}>
            {lugar}
            <button
              onClick={() => eliminarLugar(i)}
              style={{ marginLeft: "1rem", color: "white", backgroundColor: "#d32f2f", border: "none", padding: "0.3rem 0.6rem" }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <button onClick={agregarLugar}
        style={{ marginTop: "1rem", backgroundColor: "#2e7d32", color: "white", border: "none", padding: "0.6rem" }}>
        Agregar nuevo lugar
      </button>
    </div>
  );
}