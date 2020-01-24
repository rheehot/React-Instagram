// @flow

import React, { useEffect, useCallback } from 'react';
import { Form, Input, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { loginRequest } from 'redux/modules/login';
import { onSubmitTypes, stateTypes, fieldTypes } from './LoginTypes';
import ErrorModal from '../utils/ErrorModal';
import fields from './LoginField';
import './LoginForm.scss';

const LoginForm = () => {

  const { register, errors, handleSubmit, setValue, reset } = useForm();
  const dispatch = useDispatch();
  const { loginLoading, loginError } : stateTypes 
    = useSelector(state => state.login);

  const onLoginButton = ({ id, password} : onSubmitTypes) => {
    dispatch(loginRequest({ id, password }));
  };

  const showErrorModal = useCallback(() => {
    ErrorModal({
      content: '회원가입에 실패했습니다.',
      onOk: () => {
        reset({
          id: '',
          password: '',
        })
      }
    });
  }, [reset]);

  useEffect(() => {
    if (loginError) {
      showErrorModal();
    }
  }, [loginError, showErrorModal]);

  return (
    <Form onSubmit={handleSubmit(onLoginButton)} className="login">
      {fields.map(({ id, name, type, placeholder, icon } : fieldTypes) => (
        <Form.Item
          help={!!errors[name] ? `${placeholder}를 입력하세요` : null}
          validateStatus={errors[name] ? 'error' : 'success'}
          hasFeedback
          key={id}
        >
          <Input
            name={name}
            type={type}
            placeholder={placeholder}
            disabled={loginLoading}
            prefix={<Icon type={icon} />}
            onChange={(e) => { setValue(name, e.target.value, true) }}
            ref={(e) => {
              e && register(e.input, { required: true });
            }}
          />
        </Form.Item>
      ))}
      <Form.Item>
        <Button 
          className="login__button login__button--primary" 
          htmlType="submit" 
          loading={loginLoading}
          type="primary">
          로그인
        </Button>
      </Form.Item>
      <Form.Item>
        <Link to='/signup'>
          <Button 
            className="login__button login__button--secondary" 
            disabled={loginLoading}
            type="secondary">
            회원가입
          </Button> 
        </Link>         
      </Form.Item>
    </Form>
  )
};

export default LoginForm;