import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import { ApolloProvider } from 'react-apollo';
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";

import apolloClient from './apolloClient';
import AppContext from 'contextuals/AppContext';
import AppContextProvider from 'contextuals/AppContextProvider';
import PageNotFound from 'screens/errors/PageNotFound';
import theme from 'utils/theme';
import Public from './Public';
import Private from './Private';
import Protected from './Protected';

import "styles/index.scss";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <AppContext.Consumer>
          {context => (
            <ThemeProvider theme={theme}>
              <ApolloProvider client={apolloClient}>
                <ApolloProviderHooks client={apolloClient}>
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
