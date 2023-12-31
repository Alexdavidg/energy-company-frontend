import { useState, useEffect } from 'react';

const RegistroUsuario = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    correo: '',
    contraseña: '',
    tipoUsuario: 'cliente',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSSOLogin = async () => {
    try {
      // Realiza la autenticación SSO aquí y obtén el token de acceso
      const ssoToken = await performSSOAuthentication();

      // Puedes almacenar el token de acceso en el estado o en una cookie según tus necesidades
      // setAccessToken(ssoToken);
    } catch (error) {
      console.error('Error en la autenticación SSO:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Llama a la función de autenticación SSO antes de enviar los datos al backend
      await handleSSOLogin();

      // Ahora puedes incluir el token de acceso en las solicitudes al backend
      const response = await fetch('http://localhost:8000/registrarusuario', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Agrega el token de acceso a la autorización si es necesario
          // 'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Usuario registrado exitosamente:', result);
      } else {
        console.error('Error al registrar usuario:', response.status);
      }
    } catch (error) {
      console.error('Error al enviar datos al backend:', error);
    }
  };

  useEffect(() => {
    // Puedes realizar acciones adicionales después de montar el componente
    // Por ejemplo, verificar si ya hay una sesión de SSO activa
    handleSSOLogin();
  }, []);

  return (
    <div className="registro-container">
      <h2>Registrar Nuevo Usuario</h2>
      <form onSubmit={handleSubmit} className="registro-usuario-form">
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={userData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contraseña">Contraseña:</label>
          <input
            type="password"
            id="contraseña"
            name="contraseña"
            value={userData.contraseña}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="tipoUsuario">Tipo de Usuario:</label>
          <select
            id="tipoUsuario"
            name="tipoUsuario"
            value={userData.tipoUsuario}
            onChange={handleChange}
          >
            <option value="cliente">Cliente</option>
            <option value="empleado">Empleado</option>
          </select>
        </div>
        <button type="submit" className="submit-button">
          Registrar Usuario
        </button>
      </form>
    </div>
  );
};

export default RegistroUsuario;