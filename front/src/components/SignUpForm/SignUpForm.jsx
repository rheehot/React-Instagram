import React from 'react';
import { Form, Input, Icon, Button } from 'antd';
import './SignUpForm.scss';

const SignUpForm = () => {
  return (
    <Form className="signup">
      <Form.Item>
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
        <Input
          prefix={<Icon type="robot" />}
          placeholder="닉네임"
        />
      </Form.Item>
      <Form.Item>
        <Button 
          type="primary">
          회원가입
        </Button> 
      </Form.Item>
    </Form>
  )
};

export default SignUpForm;