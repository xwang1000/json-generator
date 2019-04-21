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
  const inputTypes = ['text', 'textarea', 'boolean']
  const [isOpen, setIsOpen] = useState(true)
  const [rows, setRows] = useState([
    { 
      id: getUniqueId(),
      type: 'text',
      name: 'Chinese'
    },
    {
      id: getUniqueId(),
      type: 'text',
      name: 'English'
    },
    {
      id: getUniqueId(),
      type: 'boolean',
      name: 'Modern'
    }
  ])

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

  const renderRows = () => 
    rows.map(row => 
      <ModelRow key={row.id} id={row.id} type={row.type} name={row.name} deleteRow={deleteRow}></ModelRow>
    )
  
  const renderForm = () => {
    return (
      <form className="model-panel__form" onSubmit={handleSubmit}>
        <DropDown onChange={setInputType} options={inputTypes} />
        <input 
          className="model-panel__form__name" 
          type="text" 
          value={inputName} 
          onChange={handleInputNameChange} 
          placeholder="create new input field" 
        />
      </form>
    )
  }

  const renderBody = (
    <div className="model-panel__body">
      {renderRows()}
      {renderForm()}
      <span
        className="model-panel__button"
        onClick={() => props.setInputFields(rows)}
      >
        generate input fields
      </span>
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