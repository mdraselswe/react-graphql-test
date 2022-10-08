import React from 'react';
import { Layout } from 'antd';
import styles from './Content.module.scss';

const { Content } = Layout;

const ContentContainer = ({ children, ...otherProps }) => {
  return (
    <Content className={styles.content} {...otherProps}>
      {children}
    </Content>
  );
};

export default ContentContainer;
