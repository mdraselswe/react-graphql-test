import { Layout, Menu } from 'antd';
import React from 'react';
import styles from './Navbar.module.scss';
import Link from 'next/link';

const { Header } = Layout;

const items1 = ['crud', 'blank'].map((key) => ({
  key,
  label: (
    <Link href={`/${key}`}>
      <a>{key.toUpperCase()}</a>
    </Link>
  ),
}));

const Navbar = () => {
  return (
    <Header id={styles.nav}>
      <h2>React GraphQL</h2>
      <Menu
        id={styles.menu}
        className={styles.menu}
        theme='light'
        mode='horizontal'
        // defaultSelectedKeys={['']}
        items={items1}
      />
    </Header>
  );
};

export default Navbar;
