import { ApolloClient, HttpLink, from, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';
import { onError } from '@apollo/client/link/error';

const { publicRuntimeConfig } = getConfig();

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([
      errorLink,
      new HttpLink({
        uri: publicRuntimeConfig.url,
        headers: {
          Authorization: `Bearer ${publicRuntimeConfig.token}`,
        },
      }),
    ]),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
