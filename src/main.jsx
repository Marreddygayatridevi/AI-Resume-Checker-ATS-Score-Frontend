import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import AdminPanel from './components/AdminPanel';
import AdminLogin from './components/AdminLogin'; // Add this import
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/panel" element={<AdminPanel />} />
        <Route path="/adminlogin" element={<AdminLogin />} /> 
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
