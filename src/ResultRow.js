import React from 'react'
import IosTrash from 'react-ionicons/lib/IosTrash'
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

  const deleteHandler = e => {
    e.preventDefault()
    deleteRow()
  }

  return (
    <pre
      className="result-panel__row" 
    >
      {renderRow()}
      <a href="/" className="model-row__icon" onClick={deleteHandler}>
        <IosTrash color="#bbbbbb" />
      </a>
    </pre>
  )
  
}

export default ResultRow
