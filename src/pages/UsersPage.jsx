import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import AddUserModal from '../components/AddUserModal';
import EditUserModal from '../components/EditUserModal';
import '../styles/Users.css';

// A page component for managing users, allowing operations like adding, editing, deleting, and toggling user status.

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Load users from localStorage when the component mounts.
   
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  // Save users to localStorage whenever the users state changes.
   
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Opens the modal for adding a new user.
   
  const handleAddUser = () => setIsAddModalOpen(true);

  // Opens the modal for editing a selected user.
   
  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  // Closes the add user modal.
   
  const handleCloseAddModal = () => setIsAddModalOpen(false);

  // Closes the edit user modal and clears the selected user.
   
  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedUser(null);
  };

  // Handles submission of a new user by adding it to the users state.
  
  const handleAddUserSubmit = (userData) => {
    const newUser = { ...userData, id: Date.now(), status: 'Active' };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    handleCloseAddModal();
  };

  // Handles submission of an edited user by updating its data in the users state.
   
  const handleEditUserSubmit = (updatedUser) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? { ...user, ...updatedUser } : user
      )
    );
    handleCloseEditModal();
  };

  // Deletes a user by removing it from the users state.
   
  const handleDeleteUser = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  // Toggles the status of a user between 'Active' and 'Inactive'.
  
  const toggleUserStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? { ...user, status: user.status === 'Active' ? 'Inactive' : 'Active' }
          : user
      )
    );
  };

  return (
    <div>
      <h1>Users Management</h1>
      <button onClick={handleAddUser}>Add User</button>

      <UserList
        users={users}
        onEditUser={handleEditUser}
        onDeleteUser={handleDeleteUser}
        onToggleStatus={toggleUserStatus}
      />

      <AddUserModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSubmit={handleAddUserSubmit}
      />

      {isEditModalOpen && (
        <EditUserModal
          user={selectedUser}
          onClose={handleCloseEditModal}
          onSubmit={handleEditUserSubmit}
        />
      )}
    </div>
  );
};

export default UsersPage;
