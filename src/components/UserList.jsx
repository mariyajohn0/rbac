import React from 'react';
import UserCard from './UserCard';

// A functional component to display a list of user cards.

const UserList = ({ users, onEditUser, onDeleteUser, onToggleStatus }) => (
  <div className="user-list">
    {users.map((user) => (
      <UserCard
        key={user.id} // Unique identifier for each user
        user={user}
        onEdit={() => onEditUser(user)} // Triggers the edit action for a specific user
        onDelete={() => onDeleteUser(user.id)} // Triggers the delete action for a specific user
        onToggleStatus={() => onToggleStatus(user.id)} // Toggles the status of a specific user
      />
    ))}
  </div>
);

export default UserList;
