import React, { useState } from 'react';
import Register from './components/Register';
import Upload from './components/Upload';
import AdminLogin from './components/AdminLogin';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('user');

  return (
    <div className="main-container">
      <h1>AI Resume Screening System</h1>

      <div className="tab-buttons">
        <button
          className={activeTab === 'user' ? 'active' : ''}
          onClick={() => setActiveTab('user')}
        >
          User
        </button>
        <button
          className={activeTab === 'admin' ? 'active' : ''}
          onClick={() => setActiveTab('admin')}
        >
          Admin
        </button>
      </div>

      <div className="content">
        {activeTab === 'user' ? (
          <>
            <Register />
            <Upload />
          </>
        ) : (
          <AdminLogin />
        )}
      </div>
    </div>
  );
}
