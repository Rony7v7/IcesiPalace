import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useNavigate } from "react-router-dom";


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
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input type="text" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
        {error && <div style={{ color: "red" }}>{error}</div>}
      </form>
    </div>
  );
}

export default Login;
