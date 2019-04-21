import React from 'react'
import './Dropdown.css'

const DropDown = props => {
  const { options, onChange } = props

  const renderOptions = options.map(option => (
    <option key={option} value={option}>{option}</option>
  ))

  const handleChange = e => onChange(e.target.value)

  return (
    <select className="dropdown" onChange={handleChange}>
      {renderOptions}
    </select>
  )
}

export default DropDown
