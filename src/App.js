import React, { useState } from 'react';
import { Link } from '@reach/router';
import Public from './Public';
import Private from './Private';

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
    </div>
  );
}

export default App;
