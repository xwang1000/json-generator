import React from 'react'

const InputRow = props => {
  const { name, type} = props.field

  const renderInputBox = () => {
    switch (type) {
      case 'text': 
        return <input type="text" />
      case 'textarea':
        return <textarea></textarea>
      case 'boolean':
        return <input type="checkbox" />
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
