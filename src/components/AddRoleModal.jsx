import React, { useState } from 'react';

const AddRoleModal = ({ isOpen, onClose, onSubmit }) => {
  const [roleName, setRoleName] = useState(''); 

  // Handle form submission
  const handleSubmit = () => {
    onSubmit(roleName); 
    setRoleName(''); 
    onClose(); 
  };

  // Render the modal if it's open
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Role</h2>
        <input
          type="text"
          placeholder="Role Name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)} 
        />
        <button onClick={handleSubmit}>Add Role</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default AddRoleModal;
