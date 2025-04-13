import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleAvatarClick = () => {
    navigate("/datos-del-usuario");
  };
  return (
    <header style={{ background: "#2d7a2d", padding: "1rem 0" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "2rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/servicios" className="nav-link">Servicios</Link>
        <Link to="/nosotros" className="nav-link">Nosotros</Link>
        <Link to="/contacto" className="nav-link">Contacto</Link>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/register" className="nav-link">Registro</Link>
        {}
        <img
          src="/usuario.png"
          alt="Avatar"
          style={{
            width: "40px",
            height: "auto",
            cursor: "pointer",
            marginLeft: "10px",
            marginRight: "-10px",
          }}
          onClick={handleAvatarClick}
          />
      </nav>
    </header>
  );
}

