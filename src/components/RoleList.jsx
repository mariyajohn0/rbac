import React from 'react';

const RoleList = ({ roles, onEdit, onDelete }) => (
  <div className="role-list">
    <ul>
      {roles.map((role) => (
        <li key={role.id}>
          <div className="role-details">
            <span>{role.name}</span>
            <div>
              <strong>Permissions:</strong>
              <ul>
                {role.permissions.map((perm, index) => (
                  <li key={index}>{perm}</li>
                ))}
              </ul>
            </div>
            {role.customAttributes && (
              <div>
                <strong>Attributes:</strong> {role.customAttributes}
              </div>
            )}
          </div>
          <div className="button-container">
            <button onClick={() => onEdit(role)}>Edit</button> 
            <button onClick={() => onDelete(role.id)}>Delete</button> 
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default RoleList;
