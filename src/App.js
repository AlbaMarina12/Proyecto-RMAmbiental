import { Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import Nosotros from "./componentes/Nosotros";
import Servicios from "./componentes/Servicios";
import Contacto from "./componentes/Contacto";
import Login from "./componentes/Login";
import Registro from "./componentes/Registro";
import DatosDelUsuario from "./componentes/DatosDelUsuario";

// Nuevos componentes para tareas 2.5 a 2.8
import NuevoLugar from "./componentes/NuevoLugar";
import GestionLugares from "./componentes/GestionLugares";
import SolicitudServicio from "./componentes/SolicitudServicio";

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
        <Route path="/datos-del-usuario" element={<DatosDelUsuario />} />

        {/* Rutas añadidas para tareas 2.5 a 2.8 */}
        <Route path="/nuevo-lugar" element={<NuevoLugar />} />
        <Route path="/gestionar-lugares" element={<GestionLugares />} />
        <Route path="/solicitud-servicio" element={<SolicitudServicio />} />
      </Routes>
    </>
  );
}

export default App;
