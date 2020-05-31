import React, { useState } from 'react'
import ResultRow from './ResultRow'
import ThemePanel from './ThemePanel'
import './ResultPanel.css'

// Display time for messages
const TIME_OUT = 1200

const ResultPanel = props => {
  // Destructure props
  const { display, clearResults, deleteDisplayRow } = props
  const [theme, setTheme] = useState({})

  // Copy message indicator
  const [copySuccess, setCopySuccess] = useState(false)
  const copyToClipboard = () => {
    const el = document.createElement('textarea')
    el.value = JSON.stringify(display, null, 4)
    document.body.appendChild(el)
    el.select()
    document.execCommand('copy')
    el.style.display = "none"
    setCopySuccess(true)
    
    setTimeout(() => {
      setCopySuccess(false)
    }, TIME_OUT)
  }

  // Save message indicator
  const [saveSuccess, setSaveSuccess] = useState(false)
  const save = () => {
    props.saveToLocal()

    setSaveSuccess(true)
    setTimeout(() => {
      setSaveSuccess(false)
    }, TIME_OUT)
  }

  const renderOptions = () => {
    if (display.length > 0) {
      return (
        <span className="options">
          <span 
            className="option clear"
            onClick={clearResults}
          >
            clear
          </span>
          <span 
            className="option copy"
            onClick={copyToClipboard}
          >
            copy
          </span>
          <span 
            className="option save"
            onClick={save}
          >
            save
          </span>
        </span>
      )
    }
  }

  const renderThemes = () => {
    if (display.length > 0) {
      return <ThemePanel setTheme={setTheme} />
    }
  }

  const renderRows = () => {
    return display.map((object, index) => (
      <ResultRow 
        key={index} 
        object={object} 
        isLastItem={index === display.length - 1} 
        index={index} 
        deleteRow={() => deleteDisplayRow(index)}
        theme={theme} 
      />
    ))
  }
  
  return (
    <div className="result-panel">
      <h2>
        Result ({display.length})
        {renderOptions()}
      </h2>
      {renderThemes()}
      <p className="result-panel__message">
        {copySuccess && 'copied to clipboard!'}
        {saveSuccess && 'saved'}
      </p>
      <div className="result-panel__content">
        {renderRows()}
      </div>
    </div>
  )
}

export default ResultPanel
