import React, { useEffect } from 'react';
import { Form, Button, Input, Icon } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../redux/modules/signup';
import './SignUpForm.scss';
import fields from './signUpField';
import { useForm } from 'react-hook-form';

const SignUpForm = () => {

  const { register, handleSubmit, errors, setValue } = useForm();
  const dispatch = useDispatch();
  const signUpLoading = useSelector(state => state.signup.signUpLoading);

  const onSubmit = ({id, password, nickname}) => {
    dispatch(signUpRequest({ id, password, nickname }));
  };

  useEffect(() => {
    fields.forEach(({ name }) => {
      register({ name }, { required: true });
    });
  }, [register]);

  return (
    <>
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
              onChange={(e) => { setValue(name, e.target.value, true) }}
              prefix={<Icon type={icon} />}
              ref={register({ required: true })}
            />
          </Form.Item>
        ))}
        <Form.Item>
          <Button
            htmlType="submit"
            disabled={signUpLoading}
            type="primary">
            회원가입
          </Button> 
        </Form.Item>
      </Form>
      {signUpLoading ? <Icon type="loading" /> : null}
    </>
  )
};

export default SignUpForm;