import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import AuthContext from 'components/contextuals/AuthContext';
import AuthContextProvider from 'components/contextuals/AuthContextProvider';
import Public from './Public';
import Private from './Private';
import Protected from './Protected';

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <AuthContext.Consumer>
          {context => (
            <Fragment>
              <nav>
                <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
              </nav>
              {!context.data.isAuthenticated && <Public />}
              {context.data.isAuthenticated && <Private />}
              <Protected />
            </Fragment>
          )}
        </AuthContext.Consumer>
      </div>
    </AuthContextProvider>
  );
}

export default App;
