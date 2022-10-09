import { ApolloClient, HttpLink, from, InMemoryCache } from '@apollo/client';
import getConfig from 'next/config';
import { onError } from '@apollo/client/link/error';

const { publicRuntimeConfig } = getConfig();

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    );

  if (networkError) console.log(`[Network error]: ${networkError}`);
});

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: from([
      new HttpLink({
        uri: publicRuntimeConfig.url,
        headers: {
          Authorization: `Bearer ${publicRuntimeConfig.token}`,
        },
      }),
      errorLink,
    ]),
    cache: new InMemoryCache(),
  });
}

export default createApolloClient;
