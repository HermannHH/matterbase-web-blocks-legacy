import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import App from './App';
import store, { history } from './store';
import * as serviceWorker from './serviceWorker';

function Index() {

  return (
    <ReduxProvider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
    </ReduxProvider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
