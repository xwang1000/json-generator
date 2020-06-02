import React, { useState } from 'react'
import ModelRow from './ModelRow'
import DropDown from './DropDown'
import { getArrow } from './utils'
import './ModelPanel.css'

const getUniqueIdGenerator = () => {
  let uniqueId = 0
  return () => uniqueId++
}

const getUniqueId = getUniqueIdGenerator()

const ModelPanel = props => {
  const inputTypes = ['text', 'textarea', 'boolean', 'number']
  const [isOpen, setIsOpen] = useState(true)
  const [rows, setRows] = useState([])

  const [inputType, setInputType] = useState('text')
  const [inputName, setInputName] = useState('')
  
  const deleteRow = id => 
    setRows(rows.filter(row => row.id !== id))

  const addRow = row => 
    setRows([...rows, row])
  
  const handleInputNameChange = e => setInputName(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    const row = {
      id: getUniqueId(),
      type: inputType,
      name: inputName,
    }
    setInputName('')
    addRow(row)
  }

  const handleGenerateButton = e => {
    e.preventDefault()
    props.setInputFields(rows)
  }

  const renderRows = () => 
    rows.map(row => 
      <ModelRow key={row.id} id={row.id} type={row.type} name={row.name} deleteRow={deleteRow}></ModelRow>
    )
  
  const renderForm = () => {
    return (
      <form className="model-panel__form" onSubmit={handleSubmit}>
        <input 
          className="model-panel__form__name" 
          type="text" 
          value={inputName} 
          onChange={handleInputNameChange} 
          autoFocus
        />
        <div className="dropdown-button-wrapper">
          <DropDown
            onChange={setInputType}
            options={inputTypes}
            />
          <input className="submit-button" type="submit" value="+" />
        </div>
      </form>
    )
  }

  const renderBody = (
    <div className="expandable-panel__body">
      <div className="model-row model-row--header">
        <div className="model-row__name">field name</div>
        <div className="model-row__type">data type</div>
      </div>
      {renderRows()}
      {renderForm()}

      <div className="model-panel__button-wrapper">
        <a
          href="/"
          className="button--theme"
          onClick={handleGenerateButton}
        >
          generate fields
        </a>
      </div>
    </div>
  )

  return (
    <div className="model-panel expandable-panel">
      <h2 onClick={() => setIsOpen(!isOpen)}>
        model your input  {getArrow(isOpen)}
      </h2>
      {isOpen && renderBody}
    </div>
  )
}

export default ModelPanel