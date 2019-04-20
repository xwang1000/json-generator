import React from 'react'

const OutputPanel = props => {
  console.log(props)
  const { record, fields } = props
  // const getOutput = JSON.stringify(fields, null, 4)
  return (
    <div>
      <h2>Output Panel</h2>
    </div>
  )
}

export default OutputPanel
