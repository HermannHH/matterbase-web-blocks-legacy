import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";

import AppContext from 'contextuals/AppContext';
import AppContextProvider from 'contextuals/AppContextProvider';
import PageNotFound from 'screens/errors/PageNotFound';
import theme from 'utils/theme';
import Public from './Public';
import Private from './Private';
import Protected from './Protected';

import "styles/index.scss";

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

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <AppContext.Consumer>
          {context => (
            <ThemeProvider theme={theme}>
              <ApolloProvider client={client}>
                <ApolloProviderHooks client={client}>
                  <Fragment>
                    {!context.data.isAuthenticated && <Public />}
                    {context.data.isAuthenticated && <Private />}
                    <Protected />
                  </Fragment>
                </ApolloProviderHooks>
              </ApolloProvider>
            </ThemeProvider>
          )}
        </AppContext.Consumer>
      </div>
    </AppContextProvider>
  );
}

export default App;
