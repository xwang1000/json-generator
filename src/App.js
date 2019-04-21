import React, { useState } from 'react';
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'
import OutputPanel from './OutputPanel'
import ResultPanel from './ResultPanel'
import './App.css';

const App = () => {
  const [inputFields, setInputFields] = useState([])
  const [display, setDisplay] = useState([])
  
  const output = () => {
    const outputObject = {}
    inputFields.forEach(field => {
      outputObject[field.name] = field.value
    })
    return outputObject
  }

  const addObjectToDisplay = () => {
    setDisplay([...display, output()])
  }

  return (
    <div className="App">
      <ModelPanel setInputFields={setInputFields} />
      <InputPanel setInputFields={setInputFields} addObjectToDisplay={addObjectToDisplay} fields={inputFields} />
      <OutputPanel fields={inputFields} output={output()} />
      <ResultPanel display={display} />
    </div>
  )
}

export default App;
