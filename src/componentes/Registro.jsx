import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Registro() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistro = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, correo, password);
      alert('¡Usuario registrado con éxito!');
      setCorreo('');
      setPassword('');
    } catch (error) {
      alert('Error al registrar: ' + error.message);
    }
  };

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Registro</h2>
      <form onSubmit={handleRegistro}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <br /><br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}


