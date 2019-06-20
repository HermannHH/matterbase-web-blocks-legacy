import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';


const httpLink = new HttpLink({
  uri: "http://localhost:5000/graphql",
  headers: {
    'Content-Type' : 'application/json',
    // authorization: `Bearer ${
    //   process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN
    // }`,
  },
});

const cache = new InMemoryCache();

const client = new ApolloClient({
  link: httpLink,
  cache,
});
// const client = new ApolloClient({
//   networkInterface: createNetworkInterface('http://localhost:5000/graphql'),
//   queryTransformer: addTypeName,
// });
export default client;
