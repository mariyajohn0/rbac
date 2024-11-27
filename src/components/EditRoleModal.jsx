import React, { useState } from 'react';

const EditRoleModal = ({ isOpen, role, onClose, onSubmit }) => {
  const [roleName, setRoleName] = useState(role.name);

  if (!isOpen) return null;

  // Function to handle form submission
  const handleSubmit = () => {
    onSubmit({ ...role, name: roleName });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Role</h2>
        <input
          type="text"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
        />
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default EditRoleModal;
