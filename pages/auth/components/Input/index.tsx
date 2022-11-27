import React, { FC, InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import { cx } from '@/libs';

import styles from './input.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  error?: FieldError;
}

const Input: FC<Props> = ({ register, error, ...inputProps }) => {
  return (
    <div className={styles.container}>
      <input
        className={cx(styles.input, { [styles.inValid]: !!error })}
        autoComplete='off'
        {...inputProps}
        {...register}
      />
      {!!error && (
        <div className={styles.errorMessage}>
          <span>{error.message}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
