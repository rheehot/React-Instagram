import React from 'react';
import './SidebarTemplate.scss';
import Profile from '../Profile/Profile';
import Recommend from '../Recommend/Recommend';

const SidebarTemplate = () => {
  return (
    <div className="sidebar-template">
      <Profile />
      <Recommend />
    </div>
  );
};

export default SidebarTemplate;