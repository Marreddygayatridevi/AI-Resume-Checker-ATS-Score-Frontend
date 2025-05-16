import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../api';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/user/register/', {
        name,
        email,
      });
      toast.success('User registration completed!');
      setName('');
      setEmail('');
    } catch (err) {
      const errors = err?.response?.data;
      if (Array.isArray(errors)) {
        const messages = errors.map((e) => `${e.loc?.join('.')} - ${e.msg}`).join('\n');
        toast.error(messages);
      } else if (typeof errors === 'object') {
        toast.error(errors.detail || JSON.stringify(errors));
      } else {
        toast.error('Registration failed.');
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleRegister}>
        <h2>User Registration</h2>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <button type="submit">Register</button>
      </form>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
