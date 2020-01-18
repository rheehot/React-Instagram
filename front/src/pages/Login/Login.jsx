import React from 'react';
import { Icon } from 'antd';
import LoginForm from '../../components/LoginForm/LoginForm';
import './Login.scss';
import logo from '../../images/logo.png';

const Login = () => {
  return (
    <div className="container">
      <Icon className="logo-icon" type="instagram"/>
      <img className="logo-image" src={logo} alt="로고"/>
      <LoginForm />
    </div>
  );
};

export default Login;