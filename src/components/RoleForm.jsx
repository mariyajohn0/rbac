import React, { useState, useEffect } from 'react';

const permissionsList = ['Read', 'Write', 'Delete', 'Edit', 'Manage'];

const RoleForm = ({ role = null, onSubmit, onClose }) => {
  const [roleData, setRoleData] = useState({
    name: '',
    permissions: [],
    customAttributes: '',
  });

  // Update form state when the role prop changes
  useEffect(() => {
    if (role) {
      setRoleData({
        name: role.name,
        permissions: role.permissions || [],
        customAttributes: role.customAttributes || '',
      });
    }
  }, [role]);

  // Handle changes to input fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoleData({
      ...roleData,
      [name]: value,
    });
  };

  // Handle changes to permissions
  const handlePermissionChange = (permission) => {
    const updatedPermissions = roleData.permissions.includes(permission)
      ? roleData.permissions.filter((perm) => perm !== permission)
      : [...roleData.permissions, permission];
    setRoleData({ ...roleData, permissions: updatedPermissions });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(roleData); // Submit the role data
    onClose(); // Close the modal after submission
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{role ? 'Edit Role' : 'Add Role'}</h2>
        <input
          type="text"
          name="name"
          placeholder="Role Name"
          value={roleData.name}
          onChange={handleChange}
        />
        <div>
          <h3>Permissions</h3>
          <div className="permissions-list">
            {permissionsList.map((permission) => (
              <div key={permission} className="permission-item">
                <input
                  type="checkbox"
                  checked={roleData.permissions.includes(permission)}
                  onChange={() => handlePermissionChange(permission)}
                />
                <label>{permission}</label>
              </div>
            ))}
          </div>
        </div>
        <textarea
          name="customAttributes"
          placeholder="Custom Attributes (Optional)"
          value={roleData.customAttributes}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>{role ? 'Update Role' : 'Add Role'}</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default RoleForm;
