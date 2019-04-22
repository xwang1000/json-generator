import React, { useState } from 'react'
import InputRow from './InputRow'
import { getArrow } from './utils'
import './InputPanel.css'

const InputPanel = props => {
  const [isOpen, setIsOpen] = useState(true)
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

  const renderForm = (
    <form onSubmit={onSubmit}>
      {renderInputRows}
      <div className="input-panel__form__submit-wrapper">
        <input className="input-panel__form__submit" type="submit" value="add to results" />
      </div>
    </form>
  )

  const renderEmptyBody = (
    <p className="input-panel__body__waiting">waiting for input modeling...</p>
  )

  const renderBody = (
    <div className="input-panel__body">
      {fields.length > 0 ? renderForm : renderEmptyBody}
    </div>
  )

  return (
    <div className="input-panel expandable-panel">
      <h2 onClick={() => setIsOpen(!isOpen)}>
        plug in your data  {getArrow(isOpen)}
      </h2>
      {isOpen && renderBody}
    </div>
  )
}

export default InputPanel
