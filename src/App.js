import React, { Component } from 'react';
import './App.css';

import Issues from './components/issues/Issues'

class App extends Component {
  render() {
    return (
      <div className='App-container'>
        <Issues/>
      </div>
    );
  }
}

export default App;
