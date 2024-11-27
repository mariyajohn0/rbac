import React, { useState } from 'react';

const AddUserModal = ({ isOpen, onClose, onSubmit }) => {
  const [userData, setUserData] = useState({ name: '', email: '', role: '', status: 'Active' });
  const [emailError, setEmailError] = useState('');

  if (!isOpen) return null;

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    if (!userData.name || !userData.email || !userData.role) {
      alert('Please fill in all fields.');
      return;
    }

    if (!isValidEmail(userData.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');
    onSubmit(userData);
    setUserData({ name: '', email: '', role: '', status: 'Active' });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add User</h2>
        <input
          type="text"
          placeholder="Name"
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        {emailError && <p className="error">{emailError}</p>}
        <select
          value={userData.role}
          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
        <select
          value={userData.status}
          onChange={(e) => setUserData({ ...userData, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button onClick={handleSubmit}>Add User</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddUserModal;
