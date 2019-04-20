import React from 'react'
import InputRow from './InputRow'

const InputPanel = props => {

  const { fields, setInputFields } = props

  const renderInputRows = fields.map((field, index) => {
    const updateInput = value => {
      const newFields = [...fields]
      newFields[index].value = value
      setInputFields(newFields)
    }
    
    return <InputRow key={field.id} field={field} updateInput={updateInput} />
  })

  return (
    <div>
      <h2>Input Panel</h2>
      <form>
        {renderInputRows}
      </form>
    </div>
  )
}

export default InputPanel
