import React from 'react' 

const ModelRow = props => {
  const { type, name,id } = props

  return (
    <div>
      {type}: {name}
      <strong onClick={() => props.deleteRow(id)}>-</strong>
    </div>
  )
}

export default ModelRow