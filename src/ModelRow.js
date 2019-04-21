import React from 'react' 

const ModelRow = props => {
  const { type, name,id } = props

  return (
    <div className="model-row" onClick={() => props.deleteRow(id)}>
      <div className="model-row__type">{type}</div>
      <div className="model-row__name">{name}</div>
    </div>
  )
}

export default ModelRow
