import React from 'react';
import '../styles/UserCard.css';

// A functional component to display user details and actions.
 
const UserCard = ({ user, onEdit, onDelete, onToggleStatus }) => (
  <div className="user-card">
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Role: {user.role}</p>
    <p>Status: {user.status}</p>
    <button onClick={onToggleStatus}>
      {user.status === 'Active' ? 'Deactivate' : 'Activate'} {/* Toggles user status */}
    </button>
    <button onClick={onEdit}>Edit</button> {/* Triggers edit action */}
    <button onClick={onDelete}>Delete</button> {/* Triggers delete action */}
  </div>
);

export default UserCard;
