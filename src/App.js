import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import AppContext from 'components/contextuals/AppContext';
import AppContextProvider from 'components/contextuals/AppContextProvider';
import PageNotFound from 'screens/errors/PageNotFound';
import theme from 'utils/theme';
import Public from './Public';
import Private from './Private';
import Protected from './Protected';

import "styles/base.scss";

function App() {
  return (
    <AppContextProvider>
      <div className="App">
        <AppContext.Consumer>
          {context => (
            <ThemeProvider theme={theme}>
              <Fragment>
                {!context.data.isAuthenticated && <Public />}
                {context.data.isAuthenticated && <Private />}
                <Protected />
              </Fragment>
            </ThemeProvider>
          )}
        </AppContext.Consumer>
      </div>
    </AppContextProvider>
  );
}

export default App;
