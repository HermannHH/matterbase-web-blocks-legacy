import React from 'react';
import { Router, Link } from "@reach/router";


let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dash path="dashboard" />
      </Router>
    </div>
  );
}

export default App;
