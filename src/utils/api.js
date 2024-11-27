export const fetchUsers = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockUsers);
      }, 1000);
    });
  };
  
  export const fetchRoles = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockRoles);
      }, 1000);
    });
  };
  
  export const addUser = (user) => {
    console.log('User added:', user);
  };
  
  export const addRole = (role) => {
    console.log('Role added:', role);
  };
  
  export const updateUser = (user) => {
    console.log('User updated:', user);
  };
  
  export const updateRole = (role) => {
    console.log('Role updated:', role);
  };
  