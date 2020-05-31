import React, { useState, useEffect } from 'react'
import InputPanel from './InputPanel'
import ModelPanel from './ModelPanel'
import OutputPanel from './OutputPanel'
import ResultPanel from './ResultPanel'
import './App.css'

const App = () => {
  const [inputFields, setInputFields] = useState([])

  // Initialize display array
  const [display, setDisplay] = useState([])
  const displayStored = JSON.parse(localStorage.getItem("display"))
  useEffect(() => {
    displayStored !== null && setDisplay(displayStored)
  }, [])

  // Convert input models to an object
  const output = () => {
    const outputObject = {}
    inputFields.forEach(field => {
      outputObject[field.name] = field.value
    })
    return outputObject
  }

  // Remove all display
  const clearResults = () => {
    setDisplay([])
    localStorage.setItem('display', null)
  }

  // Add new record to display
  const addObjectToDisplay = () => {
    setDisplay([...display, output()])
  }
  
  // Remove indexed row
  const deleteDisplayRow = index => {
    const newDisplay = [...display]
    newDisplay.splice(index, 1)
    setDisplay(newDisplay)
  }

  // Save current records to local storage
  const saveToLocal = () => 
    localStorage.setItem('display', JSON.stringify(display))

  return (
    <div className="app">
        <div className="app__left">
          <div className="app__left__container">
            <div className="app__left__header">
              <h1>JSON Generator</h1>
              <p className="subtitle">your data entry helper</p>    
            </div>
            <ModelPanel 
              setInputFields={setInputFields} 
            />
            <InputPanel
              setInputFields={setInputFields}
              addObjectToDisplay={addObjectToDisplay}
              fields={inputFields}
            />
            <OutputPanel
              fields={inputFields} 
              output={output()} 
            />
          </div>
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
