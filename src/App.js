import React, { useState } from 'react';
import './App.css';
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'
import OutputPanel from './OutputPanel'

const App = () => {
  const [inputFields, setInputFields] = useState([])

  return (
    <div className="App">
      <ModelPanel setInputFields={setInputFields} />
      <InputPanel setInputFields={setInputFields} fields={inputFields} />
      <OutputPanel fields={inputFields} />
    </div>
  )
}

export default App;
