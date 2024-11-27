# Roles and Users Management System

This project is a simple **Roles and Users Management System** built using React. It allows users to manage roles (such as Admin, User) with associated permissions and custom attributes, as well as manage users (create, edit, delete, and toggle their status). This system saves data in the browser's `localStorage` to persist the data between page reloads.

## Features

- **Roles Management:**
  - Add, Edit, and Delete Roles.
  - Assign Permissions to Roles.
  - Custom Attributes for Roles.
  
- **Users Management:**
  - Add, Edit, and Delete Users.
  - Toggle User Status (Active/Inactive).
  - View User Roles and Permissions.

- **Responsive Design:**
  - The application is designed to be responsive for both tablet and mobile views.

## File Structure
/src
  /components
    UserList.js        - Displays a list of users.
    AddUserModal.js    - Modal for adding a new user.
    EditUserModal.js   - Modal for editing an existing user.
    RoleForm.js        - Form for adding or editing roles.
  /pages
    UsersPage.js       - Users management page.
    RolesPage.js       - Roles management page.
  /styles
    Users.css          - Styling for UsersPage and related components.
    Roles.css          - Styling for RolesPage and related components.
  App.js               - Main application component.
  index.js             - Entry point of the application.
  
## Technologies Used
React: A JavaScript library for building user interfaces.
localStorage: To persist users and roles data.
CSS: For styling the components and pages.
