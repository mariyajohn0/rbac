import React, { useState } from 'react';
import RoleForm from '../components/RoleForm';
import '../styles/Roles.css';

// A page component for managing roles, including adding, editing, and deleting roles.
const RolesPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'], customAttributes: 'Full access' },
    { id: 2, name: 'User', permissions: ['Read'], customAttributes: 'Limited access' },
  ]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handles adding a new role by opening the modal with no selected role.
  
  const handleAddRole = () => {
    setSelectedRole(null);
    setIsModalOpen(true);
  };

  // Handles editing an existing role by opening the modal with the selected role's data.
   
  const handleEditRole = (role) => {
    setSelectedRole(role);
    setIsModalOpen(true);
  };

  // Handles deleting a role by filtering it out of the roles list.
   
  const handleDeleteRole = (roleId) => {
    setRoles(roles.filter((role) => role.id !== roleId));
  };

  // Handles saving a role, either adding a new one or updating an existing one.
   
  const handleSaveRole = (newRoleData) => {
    if (selectedRole) {
      // Editing an existing role
      setRoles(
        roles.map((role) =>
          role.id === selectedRole.id ? { ...role, ...newRoleData } : role
        )
      );
    } else {
      // Adding a new role
      const newRole = { id: Date.now(), ...newRoleData };
      setRoles([...roles, newRole]);
    }
  };

  // Closes the modal.
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <div className="roles-page">
      <h1>Roles Management</h1>
      <button onClick={handleAddRole}>Add Role</button>
      <div className="role-list">
        {roles.map((role) => (
          <div className="role-box" key={role.id}>
            <h3>{role.name}</h3>
            <div className="permissions">
              {role.permissions.map((permission, index) => (
                <span key={index}>{permission}</span>
              ))}
            </div>
            <div>{role.customAttributes}</div>
            <button onClick={() => handleEditRole(role)}>Edit</button>
            <button className="delete" onClick={() => handleDeleteRole(role.id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
      {isModalOpen && (
        <RoleForm role={selectedRole} onSubmit={handleSaveRole} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default RolesPage;
