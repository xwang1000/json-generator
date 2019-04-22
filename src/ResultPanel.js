import React, { useState } from 'react'
import ResultRow from './ResultRow'

const ResultPanel = props => {
  const [copySuccess, setCopySuccess] = useState(false)
  const { display, clearResults, deleteDisplayRow } = props

  const renderRows = () => {
    return display.map((object, index) => (
      <ResultRow 
        key={index} 
        object={object} 
        isLastItem={index === display.length - 1} 
        index={index} 
        deleteRow={() => deleteDisplayRow(index)} 
      />
    ))
  }

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
    }, 1500)
  }

  const renderOptions = () => {
    if (display.length > 0) {
      return (
        <span className="options">
          <span 
            className="option clear"
            onClick={clearResults}>
            clear
          </span>
          <span 
            className="option copy"
            onClick={copyToClipboard}>
            copy
          </span>
          <span className="option save">
            save
          </span>
        </span>
      )
    }
  }
  
  return (
    <div className="result-panel">
      <h2>Records ({display.length}){renderOptions()}</h2>

      {copySuccess && 'copied!'}
      <div className="result-panel__content">
        {renderRows()}
      </div>
    </div>
  )
}

export default ResultPanel
