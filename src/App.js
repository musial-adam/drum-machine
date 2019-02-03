import React, { Component } from 'react';
import './App.scss';

import DrumMachine from './components/DrumMachine/DrumMachine';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DrumMachine />
      </div>
    );
  }
}

export default App;
