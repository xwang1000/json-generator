import React, { useState } from 'react'
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'
import OutputPanel from './OutputPanel'
import ResultPanel from './ResultPanel'
import './App.css'

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
    
  const deleteDisplayRow = index => {
    console.log(index)
    console.log(display)
    const newDisplay = [...display]
    newDisplay.splice(index, 1)
    setDisplay(newDisplay)
  }

  return (
    <div className="app">
        <div className="app__left">
          <h1>JSON Generator</h1>
          <p>your data entry helper</p>
          <ModelPanel setInputFields={setInputFields} />
          <InputPanel setInputFields={setInputFields} addObjectToDisplay={addObjectToDisplay} fields={inputFields} />
          <OutputPanel fields={inputFields} output={output()} />
        </div>
        <div className="app__right">
          <ResultPanel display={display} clearResults={() => setDisplay([])} deleteDisplayRow={deleteDisplayRow} />
        </div>
    </div>
  )
}

export default App;
