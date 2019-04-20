import React, { useState, useEffect } from 'react'

const InputRow = props => {
  const { name, type } = props.field
  const [value, setValue] = useState(type === "boolean" ? false : '')

  useEffect(() => {
    props.updateInput(value)
  }, [])

  const handleChange = value => {
    setValue(value)
    props.updateInput(value)
  }

  const renderInputBox = () => {
    switch (type) {
      case 'text': 
        return <input type="text" value={value} onChange={e => handleChange(e.target.value)} />
      case 'textarea':
        return <textarea value={value} onChange={e => handleChange(e.target.value)}></textarea>
      case 'boolean':
        return <input type="checkbox" value={value} onChange={e => handleChange(e.target.checked)} />
      default: 
        return `Sorry, cannot find the corresponding input type: ${type}`
    }
  }

  return (
    <div>
      <label>
        {name}
        {renderInputBox()}
      </label>
    </div>
  )

}

export default InputRow
