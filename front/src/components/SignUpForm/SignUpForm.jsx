import React, { useEffect, useCallback } from 'react';
import { Form, Button, Input, Icon, Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest, signUpInit } from '../../redux/modules/signup';
import './SignUpForm.scss';
import fields from './signUpField';
import { useForm } from 'react-hook-form';
import { useHistory, withRouter } from 'react-router-dom';

const SignUpForm = () => {

  const { register, handleSubmit, errors, setValue, reset} = useForm();
  const { signUpLoading, signUpError, signUpSuccess } = useSelector(state => state.signup).toJS();
  const dispatch = useDispatch();
  const history = useHistory();  

  const onSubmit = ({id, password, nickname}) => {
    dispatch(signUpRequest({ id, password, nickname }));
  };

  const showErrorModal = useCallback(() => {
    Modal.error({
      title: '에러',
      content: '회원가입에 실패했습니다.',
      centered: true,
      onOk: () => {
        reset({
          id: '',
          password: '',
          nickname: ''
        });
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
      {fields.map(({name, type, placeholder, icon}, key) => (
        <Form.Item
          help={!!errors[name] ? `${placeholder}를 입력하세요` : null}
          validateStatus={errors[name] ? 'error' : 'success'}
          hasFeedback
          key={key}
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

export default withRouter(SignUpForm);