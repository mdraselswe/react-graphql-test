import React from 'react';
import { Input } from 'antd';
import styles from './PrimaryInput.module.scss';

const PrimaryInput = ({ label, newclass = '', ...otherProps }) => {
  if (label) {
    return (
      <div className={styles.input_root}>
        <label htmlFor={label} className={styles.label}>
          {label}
        </label>
        <Input
          id={label}
          className={`${styles.input} ${newclass}`}
          {...otherProps}
        />
      </div>
    );
  }

  return <Input className={`${styles.input} ${newclass}`} {...otherProps} />;
};

export default PrimaryInput;
