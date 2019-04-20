import React, { useState } from 'react';
import './App.css';
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'
import OutputPanel from './OutputPanel'

const App = () => {
  const [inputFields, setInputFields] = useState([])

  const updateInputFields = fields => 
    setInputFields(fields)

  const convertFieldsToRecord = () => {
    if (inputFields.length !== 0) {
      return {
        [inputFields[0].name]: [inputFields[0].value]
      }
    }

  }

  return (
    <div className="App">
      <ModelPanel updateInputFields={updateInputFields} />
      <InputPanel updateInputFields={updateInputFields} fields={inputFields} />
      <OutputPanel record={convertFieldsToRecord()} fields={inputFields} />
    </div>
  )
}

export default App;
