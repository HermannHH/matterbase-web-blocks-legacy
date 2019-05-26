import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import { ThemeProvider } from 'styled-components';
import AppContext from 'components/contextuals/AppContext';
import AppContextProvider from 'components/contextuals/AppContextProvider';
import theme from 'utils/theme';
import Public from './Public';
import Private from './Private';
import Protected from './Protected';

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
