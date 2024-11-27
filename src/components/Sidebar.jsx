import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Toggles the sidebar's collapsed state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isCollapsed ? '→' : '←'} {/* Button toggles between arrows based on collapsed state */}
      </button>
      <ul>
        <li>
          <Link to="/users">Users</Link> {/* Link to Users page */}
        </li>
        <li>
          <Link to="/roles">Roles</Link> {/* Link to Roles page */}
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
