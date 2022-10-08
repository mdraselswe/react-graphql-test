import { Layout } from 'antd';
import Navbar from '../navbar/Navbar';
import styles from './Layout.module.scss';

export default function LayoutComponent({ children }) {
  return (
    <Layout>
      <Navbar />
      <main>
        <Layout id={styles.layout}>{children}</Layout>
      </main>
    </Layout>
  );
}
