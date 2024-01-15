import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from "react-router-dom";
import '../styles/Login/login.css';



function Login() {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    AuthService.login(email, password)
      .then((response) => {
        if (response.status === true) {
          navigate("/");
        }
      }
      )
      .catch((err) => {
        setError("Invalid credentials")
      });
  };

  return (
    <div className="Login">
      <section>
        <h1>Log in</h1>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="Email"
          />
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="Password"
          />
          <input 
            type="submit" 
            value="Submit" 
          />
          {error && <div style={{ color: "red" }}>{error}</div>}
        </form>
      </section>
    </div>
  );
}

export default Login;
