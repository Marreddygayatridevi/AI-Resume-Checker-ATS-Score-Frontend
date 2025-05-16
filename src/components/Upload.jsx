import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../api';

export default function Upload() {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [file, setFile] = useState(null);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    api.get('admin/list-jobroles')
      .then(res => setRoles(res.data.roles))
      .catch(() => toast.error("Failed to load job roles"));
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('email', email);
    formData.append('role', role);
    formData.append('file', file);

    try {
      const res = await api.post('/user/upload/', formData);
      toast.success(res.data.message);
    } catch (err) {
      const msg = err.response?.data?.detail || 'Upload failed';
      toast.error(msg);
    }
  };

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleUpload}>
        <h2>Upload Resume</h2>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Registered Email" required />
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="">Select Role</option>
          {roles.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
        <input type="file" accept="application/pdf" onChange={(e) => setFile(e.target.files[0])} required />
        <button type="submit">Upload Resume</button>
      </form>
    </>
  );
}
