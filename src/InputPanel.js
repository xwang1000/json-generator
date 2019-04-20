import React, { useState } from 'react'
import InputRow from './InputRow'

const InputPanel = props => {

  const { fields, updateInputFields } = props

  const renderInputRows = fields.map(field => {
    const updateInput = inputObject => {
      field.value = inputObject.value
      updateInputFields(fields)
    }
    
    return <InputRow key={field.id} field={field} updateInput={updateInput} />
  })

  return (
    <div>
      <h2>Input Panel</h2>
      <form>
        {renderInputRows}
        {/* <input type="submit" value="Submit Object" /> */}
      </form>
    </div>
  )
}

export default InputPanel
