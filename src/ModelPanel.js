import React, { useState } from 'react'
import ModelRow from './ModelRow'
import DropDown from './DropDown'

const getUniqueIdGenerator = () => {
  let uniqueId = 0
  return () => uniqueId++
}

const getUniqueId = getUniqueIdGenerator()

const ModelPanel = props => {
  const inputTypes = ['text', 'textarea', 'boolean']
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
    }
  ])

  const [inputType, setInputType] = useState('text')
  const [inputName, setInputName] = useState('')
  
  const deleteRow = id => setRows(rows.filter(row => row.id !== id))

  const addRow = row => setRows([...rows, row])

  const handleInputNameChange = e => setInputName(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()

    const row = {
      id: getUniqueId(),
      type: inputType,
      name: inputName
    }

    addRow(row)
  }

  const renderRows = () => 
    rows.map(row => 
      <ModelRow key={row.id} id={row.id} type={row.type} name={row.name} deleteRow={deleteRow}></ModelRow>
    )
  

  const renderInputRow = () => {
    return (
      <form onSubmit={handleSubmit}>
        <DropDown onChange={setInputType} options={inputTypes} />
        <input type="text" value={inputName} onChange={handleInputNameChange} placeholder="input field name" />
        <input type="submit" value="+" />
      </form>
    )
  }

  return (
    <div>
      <h2>
        Model Panel
      </h2>
      {renderInputRow()}
      <h3>fields</h3>
      {renderRows()}

      <p onClick={() => props.updateInputFields(rows)}>generate input fields</p>
    </div>
  )
}

export default ModelPanel