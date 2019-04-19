import React, { useState } from 'react';
import './App.css';
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'

const App = () => {
  
  const updateInputFields = fields => {
    console.log(fields)
  } 

  return (
    <div className="App">
      <ModelPanel updateInputFields={updateInputFields}></ModelPanel>
      <InputPanel></InputPanel>
    </div>
  )
}

export default App;
