import React, { useState } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { useDispatch } from 'react-redux';
import { signUpRequest } from '../../redux/modules/signup';
import './SignUpForm.scss';

const SignUpForm = () => {

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [nickname, setNickname] = useState('');
  const dispatch = useDispatch();

  const onChangeId = (e) => setId(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeNickname = (e) => setNickname(e.target.value);

  const onSignUp = (e) => {
    e.preventDefault();
    dispatch(signUpRequest({id, password, nickname}));
  };

  return (
    <Form onSubmit={onSignUp} className="signup">
      <Form.Item>
        <Input
          onChange={onChangeId}
          prefix={<Icon type="user" />}
          placeholder="아이디"
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={onChangePassword}
          prefix={<Icon type="lock" />}
          type="password"
          placeholder="비밀번호"
        />
      </Form.Item>
      <Form.Item>
        <Input
          onChange={onChangeNickname}
          prefix={<Icon type="robot" />}
          placeholder="닉네임"
        />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          type="primary">
          회원가입
        </Button> 
      </Form.Item>
    </Form>
  )
};

export default SignUpForm;