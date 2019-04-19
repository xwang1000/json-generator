import React, { useState } from 'react'
import InputRow from './InputRow'

const InputPanel = props => {
  const { fields } = props

  const renderInputRows = fields.map(field => (
    <InputRow key={field.id} field={field} />
  ))
  
  return (
    <div>
      <h2>Input Panel</h2>
      {renderInputRows}
    </div>
  )
}

export default InputPanel
