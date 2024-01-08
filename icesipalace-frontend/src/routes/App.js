import '../styles/App.css';
import React, { useState } from 'react';
import Login from '../components/Login';

function App() {

  // Estado principal de la aplicación
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    setLoggedIn(true);
  };

  // Función para manejar el cierre de sesión
  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        {isLoggedIn ? (
          <button onClick={handleLogout}>Cerrar sesión</button>
        ) : (
          <Login handleLogin={handleLogin} />
        )}
      </header>
    </div>
  );
}

export default App;
