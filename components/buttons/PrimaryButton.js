import React from 'react';
import { Button } from 'antd';
import styles from './PrimaryButton.module.scss';

const PrimaryButton = ({
  name = 'default',
  icon,
  newclass = '',
  ...otherProps
}) => {
  return (
    <Button
      icon={
        <span role='img' aria-label='poweroff' className={styles.span}>
          {icon}
        </span>
      }
      className={`${styles.button} ${newclass}`}
      {...otherProps}
    >
      {name}
    </Button>
  );
};

export default PrimaryButton;
