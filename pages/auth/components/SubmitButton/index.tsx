import React, { ButtonHTMLAttributes, FC } from 'react';

import styles from './submitButton.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  isValid: boolean;
}

const SubmitButton: FC<Props> = ({ text, isValid, ...buttonProps }) => {
  const content = text || '제출하기';
  return (
    <button type='submit' disabled={!isValid} className={styles.button} {...buttonProps}>
      {content}
    </button>
  );
};

export default SubmitButton;
