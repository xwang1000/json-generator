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
      return (<p><span onClick={clearResults}>clear</span> <span onClick={copyToClipboard}>copy</span></p>)
    }
  }
  
  return (
    <div className="result-panel">
      <h2>Records ({display.length})</h2>
      {renderOptions()}
      {copySuccess && 'copied!'}
      {renderRows()}
    </div>
  )
}

export default ResultPanel
