import React, { Component } from 'react';
import './App.css';
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ModelPanel></ModelPanel>
        {/* <InputPanel></InputPanel> */}
      </div>
    );
  }
}

export default App;
