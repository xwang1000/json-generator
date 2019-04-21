import React from 'react'

const OutputPanel = props => {

  const { fields, output } = props

  return (
    <div className="output-panel">
      <h2>{fields.length > 0 && 'preview'}</h2>
      <pre className="output-panel__content">
        {fields.length > 0 ? JSON.stringify(output, null, 4) : ''}
      </pre>
    </div>
  )
}

export default OutputPanel
