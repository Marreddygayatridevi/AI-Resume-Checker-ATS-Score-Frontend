import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function AdminPanel() {
  const [roles, setRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState('');
  const [topMatches, setTopMatches] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [loadingMatches, setLoadingMatches] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [error, setError] = useState(null);
  const [showMatches, setShowMatches] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/admin/list-jobroles')
      .then((res) => setRoles(res.data.roles))
      .catch(() => setError('Failed to load job roles'));
  }, []);

  const runFaissMatch = () => {
    if (!selectedRole) {
      setError('Please select a job role first');
      return;
    }
    setError(null);
    setLoadingMatches(true);
    setShowMatches(true); 

    api.get(`/admin/faiss-process?role=${selectedRole}`)
      .then((res) => {
        setTopMatches(res.data.top_7_resumes || []);
        setLoadingMatches(false);
      })
      .catch(() => {
        setError('Failed to run matching');
        setLoadingMatches(false);
      });
  };

  const fetchAllUsers = () => {
    if (!selectedRole) {
      setError('Please select a job role first');
      return;
    }
    setError(null);
    setLoadingUsers(true);
    setShowUsers(true); 

    api.get(`/admin/users?role=${selectedRole}`)
      .then((res) => {
        setAllUsers(res.data || []);
        setLoadingUsers(false);
      })
      .catch(() => {
        setError('Failed to fetch users');
        setLoadingUsers(false);
      });
  };

  const viewPdf = (userId) => {
    window.open(`${api.defaults.baseURL}/admin/resume/pdf/${userId}`, '_blank');
  };

  const handleSignOut = () => {
    navigate('/');
  };

  return (
    <div className="admin-panel">
      <div className="admin-header">
        <h1>Resume ATS Matching</h1>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>

      <label htmlFor="role-select" className="role-select-label">
        Select Job Role:
      </label>
      <select
        id="role-select"
        className="role-select"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
      >
        <option value="">-- Select Role --</option>
        {roles.map((role) => (
          <option key={role} value={role}>{role}</option>
        ))}
      </select>

      <div className="button-group">
        <button onClick={runFaissMatch}>Run ATS Matching</button>
        <button onClick={fetchAllUsers}>Fetch All Users by Role</button>
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="results-container">
        {showMatches && (
          <div className="results-section">
            <h2>Top 7 ATS Matches</h2>
            {loadingMatches ? (
              <p>Loading matches...</p>
            ) : topMatches.length > 0 ? (
              <ol>
                {topMatches.map((match) => (
                  <li key={match.user_id}>
                    <strong>{match.name}</strong> — Score: {match.ats_score} — Email: {match.email}
                    <button onClick={() => viewPdf(match.user_id)}>View Resume PDF</button>
                  </li>
                ))}
              </ol>
            ) : (
              <p>No matches to show.</p>
            )}
          </div>
        )}

        {showUsers && (
          <div className="results-section">
            <h2>All Users</h2>
            {loadingUsers ? (
              <p>Loading users...</p>
            ) : allUsers.length > 0 ? (
              <ul>
                {allUsers.map((user) => (
                  <li key={user.id}>
                    <strong>{user.name}</strong> — {user.email}
                    <button onClick={() => viewPdf(user.id)}>View Resume PDF</button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No users to show.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default AdminPanel;

