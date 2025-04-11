import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Nosotros from "./componentes/Nosotros";
import Servicios from "./componentes/Servicios";
import Contacto from "./componentes/Contacto";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registro />} />
      </Routes>
    </>
  );
}

export default App;
