import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const ResultRow = props => {

  const { object, theme, isLastItem, deleteRow } = props

  const getComma = isLastItem ? '' : ','
  
  const renderRow = () => {
    if (theme === '') {
      return JSON.stringify(object, null, 4) + getComma
    }
    return (
      <SyntaxHighlighter 
        language='json' 
        style={getStyle()}
      >
        {JSON.stringify(object, null, 4) + getComma}
      </SyntaxHighlighter>
    )
    
  }

  const getStyle = theme => {
    if (theme === 'docco') {
      return docco
    }

    if (theme === 'dark') {
      return dark
    }
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
