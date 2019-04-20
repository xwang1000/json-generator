import React from 'react'

const OutputPanel = props => {

  const { fields } = props
  
  const output = () => {
    const outputObject = {}
    fields.forEach(field => {
      outputObject[field.name] = field.value
    })
    return outputObject
  }

  return (
    <div className="output-panel">
      <h2>Output Panel</h2>
      <pre>
        {fields.length > 0 ? JSON.stringify(output(), null, 4) : ''}
      </pre>
    </div>
  )
}

export default OutputPanel
