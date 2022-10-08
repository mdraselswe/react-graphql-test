import React from 'react';
import styles from './TabWithIcon.module.scss';

const TabLabelWithIcon = ({ icon, label, ...otherProps }) => {
  return (
    <div className={styles.container} {...otherProps}>
      <span className={styles.icon}>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default TabLabelWithIcon;
