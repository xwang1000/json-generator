import React, { useState, useEffect } from 'react'

const getDefaultValue = type => {
  switch (type) {
    case 'boolean':
      return false
    case 'number':
      return NaN
    default: 
      return ''
  }
}

const InputRow = props => {
  const { name, type } = props.field
  const [value, setValue] = useState(getDefaultValue(type))

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
        return <input type="text" value={value} onChange={e => handleChange(e.target.value)} placeholder={name} />
      case 'textarea':
        return <textarea value={value} onChange={e => handleChange(e.target.value)} placeholder={name}></textarea>
      case 'boolean':
        return (
          <div className="input-row__boolean">
            <span>{name}</span>
            <input type="checkbox" value={value} onChange={e => handleChange(e.target.checked)} />  
          </div>
        )
      case 'number':
        return (
          <input type="number" onChange={e => handleChange(Number(e.target.value))} placeholder={name} />
        )
      default: 
        return `Sorry, cannot find the corresponding input type: ${type}`
    }
  }

  return (
    <div className="input-row">
      {renderInputBox()}
    </div>
  )

}

export default InputRow
