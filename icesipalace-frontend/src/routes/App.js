import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Importa las páginas
import Login from '../components/Login';
import Register from '../components/Register';
import HomePage from '../components/HomePage/HomePage';

// Partials
import Header from '../components/Header';
import Footer from '../components/Footer';

// Styles
import '../styles/App.css';

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
      <div>
        <Header />
          <div className='main-page'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login handleLogin={handleLogin} />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        <Footer />
      </div>
  );
}

export default App;
