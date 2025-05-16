import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

export default function AdminLogin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('password', password);
    try {
      await api.post('/admin/login/', formData);
      navigate('/admin/panel');
    } catch (err) {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
