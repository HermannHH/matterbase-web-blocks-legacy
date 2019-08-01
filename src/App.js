import React, { Fragment } from 'react';
import { ToastProvider } from 'react-toast-notifications';
import { ThemeProvider } from 'styled-components';
import {Helmet} from "react-helmet";

import AppContext from 'contextuals/AppContext';
import AppContextProvider from 'contextuals/AppContextProvider';
import constants from 'utils/constants';
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
                  <Helmet>
                      <meta charSet="utf-8" />
                      <title>Matterbase</title>
                      <link rel="canonical" href="https://matterbase.io" />
                      <meta name="title" content="Productivity building blocks for individuals & teams" />
                      <meta name="description" content="Calendars, planners & scheduling tools often operate in silos and can be hard to use. Matterbase transforms your day to day workflows to be more integrated & connected." />

                      <meta property="og:type" content="website" />
                      <meta property="og:url" content="https://matterbase.io/" />
                      <meta property="og:title" content="Productivity building blocks for individuals & teams" />
                      <meta property="og:description" content="Calendars, planners & scheduling tools often operate in silos and can be hard to use. Matterbase transforms your day to day workflows to be more integrated & connected." />
                      <meta property="og:image" content={`${constants.ENV.ASSET_BASE_PATH}/branding/og-image.png`} />

                      <meta property="twitter:card" content="summary_large_image" />
                      <meta property="twitter:url" content="https://matterbase.io/" />
                      <meta property="twitter:title" content="Productivity building blocks for individuals & teams" />
                      <meta property="twitter:description" content="Calendars, planners & scheduling tools often operate in silos and can be hard to use. Matterbase transforms your day to day workflows to be more integrated & connected." />
                      <meta property="twitter:image" content={`${constants.ENV.ASSET_BASE_PATH}/branding/og-image.png`} />
                  </Helmet>
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
