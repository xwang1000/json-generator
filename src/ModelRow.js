import React from 'react' 
import IosTrash from 'react-ionicons/lib/IosTrash'

const ModelRow = props => {
  const { type, name,id } = props

  const deleteHandler = (e) => {
    e.preventDefault()
    console.log('clicked')
    props.deleteRow(id)
  }

  return (
    <div className="model-row">
      <div className="model-row__type">{type}</div>
      <div className="model-row__name">{name}</div>
      <a href="/" className="model-row__icon" onClick={deleteHandler}>
        <IosTrash color="#bbbbbb" />
      </a>
    </div>
  )
}

export default ModelRow
