import React from 'react';
import { Layout, Card, Icon, Avatar } from 'antd';
import logo from 'images/logo.png';
import './Home.scss';

const Home = () => {
  const { Header } = Layout;

  return(
    <div className="home">
      <Header className="header">
        <img className="header__logo" src={logo} alt="로고"/>
        <Icon className="header__user" type="user" />
      </Header>
      <div className="content">
        <div className="content__post">
          <div className="content__header">
            <img className="content__profile" src="https://react-instagram.s3.ap-northeast-2.amazonaws.com/profile.jpg" alt=""/>
            <div className="content__intro">
              <p style={{ fontWeight: 'bold' }}>baeharam</p>
              <p>Coding is life</p>
            </div>
          </div>
          <img className="content__photo" src="https://images.unsplash.com/photo-1579956774928-90599249f90f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=744&q=80" alt=""/>
          <div className="content__footer">
            <Icon type="heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;