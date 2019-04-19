import React, { useState } from 'react';
import './App.css';
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'

const App = () => {
  const [inputFields, setInputFields] = useState([])
  const updateInputFields = fields => {
    setInputFields(fields)
  } 

  return (
    <div className="App">
      <ModelPanel updateInputFields={updateInputFields}></ModelPanel>
      <InputPanel fields={inputFields} ></InputPanel>
    </div>
  )
}

export default App;
