import React, { ReactElement, useId } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import { withApi } from '@/libs';
import { NextPageWithLayout } from '@/pages/_app.page';

import { Input, Layout, SubmitButton } from '../components';
import { useLogin } from '../hooks';
import styles from './login.module.scss';

interface LoginForm {
  email: string;
  password: string;
}

const Login: NextPageWithLayout = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit: handleSubmitWrapper,
  } = useForm<LoginForm>({ mode: 'onChange' });
  const formId = useId();

  const { login, fetching } = useLogin();
  const handleSubmit: SubmitHandler<LoginForm> = async (input) => {
    if (fetching) return;

    await login({
      input: {
        ...input,
      },
    });
  };

  return (
    <div className={styles.wrapper}>
      <h3>워크스페이스에 로그인</h3>
      <form onSubmit={handleSubmitWrapper(handleSubmit)}>
        <Input
          id={`${formId}-email`}
          name='email'
          placeholder='이메일'
          register={register('email', {
            required: {
              value: true,
              message: '이메일 값을 넣어주세요.',
            },
            pattern: {
              value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message: '이메일이 아닙니다.',
            },
          })}
          error={errors.email}
        />
        <Input
          id={`${formId}-password`}
          name='password'
          placeholder='패스워드'
          register={register('password', {
            required: {
              value: true,
              message: '패스워드 값을 넣어주세요.',
            },
            maxLength: {
              value: 20,
              message: '최대 20자 까지 입니다.',
            },
            minLength: {
              value: 8,
              message: '최소 8자 입니다.',
            },
          })}
          error={errors.password}
          type='password'
        />
        <SubmitButton text='로그인' isValid={isValid} />
      </form>
    </div>
  );
};

export default withApi(Login);

Login.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
