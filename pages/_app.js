import { ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import Layout from '../components/layout/Layout';
import { useApollo } from '../lib/apollo';
import '../styles/scss/styles.global.scss';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default MyApp;
