export default function DatosDelUsuario() {
    const datosUsuario = {
      nombre: "Pedro Pascal García",
      empresa: "RMA Ambiental",
      lugaresRecolecta: ["Zapopan", "Guadalajara", "Colotlan", "Atizapan"],
      fechaIncorporacion: "13 de abril de 2025",
      Telefono: "3386152150",
    };
  
    const handleButtonClick = () => {
      alert("Actualización solicitada");
    };
  
    return (
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "2rem" }}>
        <h2 style={{ textAlign: "center" }}>Datos del Usuario</h2>
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Nombre
          </label>
          <p style={{ padding: "0.5rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
            {datosUsuario.nombre}
          </p>
        </div>
  
        {datosUsuario.empresa && (
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Empresa
            </label>
            <p style={{ padding: "0.5rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
              {datosUsuario.empresa}
            </p>
          </div>
        )}
        {datosUsuario.empresa && (
          <div style={{ marginBottom: "1.5rem" }}>
            <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
              Teléfono de contacto
            </label>
            <p style={{ padding: "0.5rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
              {datosUsuario.Telefono}
            </p>
          </div>
        )}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Lugares de Recolecta Registrados
          </label>
          <ul style={{ paddingLeft: "1rem" }}>
            {datosUsuario.lugaresRecolecta.map((lugar, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "0.5rem",
                  padding: "0.5rem",
                  backgroundColor: "#f5f5f5",
                  borderRadius: "4px",
                }}
              >
                {lugar}
              </li>
            ))}
          </ul>
        </div>
  
        <div>
          <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "bold" }}>
            Fecha de Incorporación
          </label>
          <p style={{ padding: "0.5rem", backgroundColor: "#f5f5f5", borderRadius: "4px" }}>
            {datosUsuario.fechaIncorporacion}
          </p>
        </div>
        <div>
          <button
            onClick={handleButtonClick}
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#2e7d32",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Actualizar mis datos
          </button>
        </div>
      </div>
    );
  }