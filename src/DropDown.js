import React from 'react'

const DropDown = props => {
  const { options, onChange } = props

  const renderOptions = options.map(option => (
    <option key={option} value={option}>{option}</option>
  ))

  const handleChange = e => onChange(e.target.value)

  return (
    <select onChange={handleChange}>
      {renderOptions}
    </select>
  )
}

export default DropDown
