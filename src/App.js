import React, { useState, useEffect } from 'react'
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'
import OutputPanel from './OutputPanel'
import ResultPanel from './ResultPanel'
import './App.css'

const App = () => {
  const [inputFields, setInputFields] = useState([])
  const [display, setDisplay] = useState([])
  const displayStored = JSON.parse(localStorage.getItem("display"))

  useEffect(() => displayStored !== null && setDisplay(displayStored)
  , [])

  const output = () => {
    const outputObject = {}
    inputFields.forEach(field => {
      outputObject[field.name] = field.value
    })
    return outputObject
  }

  const clearResults = () => {
    setDisplay([])
    localStorage.setItem('display', null)
  }

  const addObjectToDisplay = () => {
    setDisplay([...display, output()])
  }
    
  const deleteDisplayRow = index => {
    const newDisplay = [...display]
    newDisplay.splice(index, 1)
    setDisplay(newDisplay)
  }

  const saveToLocal = () => {
    localStorage.setItem('display', JSON.stringify(display))
  }

  return (
    <div className="app">
        <div className="app__left">
          <h1>JSON Generator</h1>
          <p className="subtitle">your data entry helper</p>
          <ModelPanel setInputFields={setInputFields} />
          <InputPanel setInputFields={setInputFields} addObjectToDisplay={addObjectToDisplay} fields={inputFields} />
          <OutputPanel fields={inputFields} output={output()} />
        </div>
        <div className="app__right">
          <ResultPanel 
            display={display} 
            clearResults={clearResults} 
            deleteDisplayRow={deleteDisplayRow}
            saveToLocal={saveToLocal}
          />
        </div>
    </div>
  )
}

export default App;
