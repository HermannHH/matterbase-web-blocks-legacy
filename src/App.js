import React, { Fragment } from 'react';

import { ThemeProvider } from 'styled-components';

import AppContext from 'contextuals/AppContext';
import AppContextProvider from 'contextuals/AppContextProvider';
// import PageNotFound from 'screens/errors/PageNotFound';
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
                <Fragment>
                  {!context.data.isAuthenticated && <Public appContext={context}/>}
                  {context.data.isAuthenticated && <Private appContext={context} />}
                  <Protected appContext={context} />
                </Fragment>
            </ThemeProvider>
          )}
        </AppContext.Consumer>
      </div>
    </AppContextProvider>
  );
}

export default App;
