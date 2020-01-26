import React from 'react';
import { Icon } from 'antd';
import logo from 'images/logo.png';
import Post from 'components/Post/Post';
import './Home.scss';
import SidebarTemplate from 'components/Sidebar/SidebarTemplate/SidebarTemplate';

const Home = () => {

  return(
    <div className="home">
      <div className="header">
        <div className="l-wrapper">
          <div className="header__container">
            <img className="header__logo" src={logo} alt="??"/>
            <Icon className="header__user" type="user" />
          </div>
        </div>
      </div>
      <div className="content">
        <div className="l-wrapper">
          <div className="content__container">
            <Post />
            <SidebarTemplate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;