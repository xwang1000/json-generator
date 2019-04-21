import React from 'react'
import InputRow from './InputRow'

const InputPanel = props => {

  const { fields, setInputFields, addObjectToDisplay } = props

  const renderInputRows = fields.map((field, index) => {
    const updateInput = value => {
      const newFields = [...fields]
      newFields[index].value = value
      setInputFields(newFields)
    }
    
    return <InputRow key={field.id} field={field} updateInput={updateInput} />
  })

  const onSubmit = event => {
    event.preventDefault()
    addObjectToDisplay()
  }

  return (
    <div className="input-panel">
      <h2>Input Panel</h2>
      <form onSubmit={onSubmit}>
        {renderInputRows}
        <input type="submit" value="add object" />
      </form>
    </div>
  )
}

export default InputPanel
