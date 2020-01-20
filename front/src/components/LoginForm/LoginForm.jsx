import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = () => {
  return (
    <Form className="login">
      <Form.Item className="login__item">
        <Input
          prefix={<Icon type="user" />}
          placeholder="아이디"
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" />}
          type="password"
          placeholder="비밀번호"
        />
      </Form.Item>
      <Form.Item>
        <Button 
          className="login__button login__button--primary" 
          htmlType="submit" 
          type="primary">
          로그인
        </Button>
      </Form.Item>
      <Form.Item>
        <Link to='/signup'>
          <Button 
            className="login__button login__button--secondary" 
            type="secondary">
            회원가입
          </Button> 
        </Link>         
      </Form.Item>
    </Form>
  )
};

export default LoginForm;