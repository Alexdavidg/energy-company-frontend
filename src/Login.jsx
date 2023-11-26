import { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/sso-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
        credentials: 'include', // Incluye las credenciales al hacer la solicitud
      });

      if (response.ok) {
        const data = await response.json();
        
        // Asumiendo que el SSO devuelve un token de sesión
        // Maneja el token según sea necesario en tu aplicación
        const sessionToken = data.sessionToken;
        // ... lógica para manejar el token de sesión ...

        setMessage('Inicio de sesión exitoso');
      } else {
        const data = await response.json();
        setMessage(data.detail || 'Error al iniciar sesión');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('Error al iniciar sesión');
    }
  };

  return (
    <div className="registro-container">
      <h1 className="title">Inicio de Sesión</h1>

      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username" className="label">Nombre de Usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          required
        />

        <label htmlFor="password" className="label">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />

        <button type="submit" className="button">Iniciar Sesión</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Login;