import React from 'react'

const OutputPanel = props => {

  const { fields } = props
  const getProperties = () => {
    return fields.map(field => (
        <p key={field.id}> 
          {JSON.stringify(field.name)}: {JSON.stringify(field.value)},
        </p>
      ))
  }

  const renderJSON = () => {
    return (
      <div>
        {'{'}
        {getProperties()}
        {'}'}
      </div>
    )
  }

  return (
    <div>
      <h2>Output Panel</h2>
      {fields.length > 0 ? renderJSON() : ''}
    </div>
  )
}

export default OutputPanel
