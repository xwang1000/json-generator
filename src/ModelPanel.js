import React, { useState } from 'react'
import ModelRow from './ModelRow'

const dataTypes = ['text', 'textarea']

const getUniqueIdGenerator = () => {
  let uniqueId = 0
  return () => uniqueId++
}

const getUniqueId = getUniqueIdGenerator()

const ModelPanel = () => {
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
  
  const renderRows = () => {
    return rows.map(row => (
      <ModelRow key={row.id} id={row.id} type={row.type} name={row.name} deleteRow={deleteRow}></ModelRow>
    ))
  }

  const renderInputRow = () => {
    return (
      <form>
        <label>
          type
          
        </label>
      </form>
    )
  }

  const deleteRow = id => 
    setRows(rows.filter(row => row.id !== id))
  
  const addRow = () => {
    const newRow = {
      id: getUniqueId(),
      type: 'text',
      name: 'origin'
    }
    setRows([...rows, newRow])
  }

  return (
    <div>
      Model Panel
      {renderInputRow()}
      <strong onClick={addRow}>+</strong>
      {renderRows()}
    </div>
  )
}

export default ModelPanel