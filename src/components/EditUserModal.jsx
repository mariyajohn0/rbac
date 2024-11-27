import React, { useState, useEffect } from 'react';

const EditUserModal = ({ user, onClose, onSubmit }) => {
  const [userData, setUserData] = useState({ ...user });

  // Update local state when the `user` prop changes
  useEffect(() => {
    setUserData({ ...user });
  }, [user]);

  // Function to handle form submission
  const handleSubmit = () => {
    if (!userData.name || !userData.email || !userData.role) {
      alert('Please fill in all fields.');
      return;
    }
    onSubmit(userData); // Submit the updated user data
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit User</h2>
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
        <select
          value={userData.role}
          onChange={(e) => setUserData({ ...userData, role: e.target.value })}
        >
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
        <button onClick={handleSubmit}>Save Changes</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditUserModal;
