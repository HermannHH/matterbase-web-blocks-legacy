import React, { useState } from 'react';
import { Link } from '@reach/router';
import Public from './Public';
import Private from './Private';
import Protected from './Protected';

function App() {
  const [state, setState] = useState({ isAuthenticated: true });

  const { isAuthenticated } = state;
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
      </nav>
      {!isAuthenticated && <Public />}
      {isAuthenticated && <Private />}
      <Protected />
    </div>
  );
}

export default App;
