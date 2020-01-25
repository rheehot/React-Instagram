// @flow

import React, { useEffect, useCallback } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest, signUpInit } from 'redux/modules/signup';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import ErrorModal from '../utils/ErrorModal';
import { onSubmitTypes, stateTypes, fieldTypes } from './SignUpField';
import fields from './SignUpField';
import './SignUpForm.scss';

const SignUpForm = () => {

  const { register, handleSubmit, errors, setValue, reset} = useForm();
  const { signUpLoading, signUpError, signUpSuccess } : stateTypes 
    = useSelector(state => state.signup);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = ({id, password, nickname} : onSubmitTypes) => {
    dispatch(signUpRequest({ id, password, nickname }));
  };

  const showErrorModal = useCallback(() => {
    ErrorModal({
      content: '회원가입에 실패했습니다.',
      onOk: () => {
        reset({
          id: '',
          password: '',
          nickname: ''
        })
      }
    });
  }, [reset]);

  useEffect(() => {
    if (signUpError) {
      showErrorModal();
    }
  }, [signUpError, showErrorModal]);

  useEffect(() => {
    if (signUpSuccess) {
      dispatch(signUpInit());
      history.push('/');
    }
  }, [signUpSuccess, history, dispatch]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className="signup">
      {fields.map(({id, name, type, placeholder, icon} : fieldTypes) => (
        <Form.Item
          help={!!errors[name] ? `${placeholder}를 입력하세요` : null}
          validateStatus={errors[name] ? 'error' : 'success'}
          hasFeedback
          key={id}
        >
          <Input
            name={name}
            type={type}
            disabled={signUpLoading}
            placeholder={placeholder}
            prefix={<Icon type={icon} />}
            onChange={(e) => { setValue(name, e.target.value, true) }}
            ref={e => {
              e && register(e.input, { required: true });
            }}
          />
          
        </Form.Item>
      ))}
      <Form.Item>
        <Button
          htmlType="submit"
          loading={signUpLoading}
          disabled={signUpLoading}
          type="primary">
          {!signUpLoading && '회원가입'}
        </Button> 
      </Form.Item>
    </Form>
  )
};

export default SignUpForm;