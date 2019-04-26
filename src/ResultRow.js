import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'

const isEmptyObject = object => 
  Object.keys(object).length === 0 && object.constructor === Object

const ResultRow = props => {

  const { object, theme, isLastItem, deleteRow } = props

  const getComma = isLastItem ? '' : ','

  const renderRow = () => {
    if (isEmptyObject(theme)) {
      return JSON.stringify(object, null, 4) + getComma
    }

    return (
      <SyntaxHighlighter 
        language='javascript' 
        style={theme}
      >
        {JSON.stringify(object, null, 4) + getComma}
      </SyntaxHighlighter>
    )
    
  }

  return (
    <pre
      className="result-panel__row" 
      onClick={deleteRow}
    >
      {renderRow()}
    </pre>
  )
  
}

export default ResultRow
