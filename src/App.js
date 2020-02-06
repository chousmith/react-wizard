import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <main style={{ textAlign: 'center', marginTop: '4em' }}>
          <Routes />
        </main>
      </Router>
    );
  }
}

export default App;
