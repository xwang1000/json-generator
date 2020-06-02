import React from 'react' 
import IosTrash from 'react-ionicons/lib/IosTrash'

const ModelRow = props => {
  const { type, name,id } = props

  const deleteHandler = (e) => {
    e.preventDefault()
    props.deleteRow(id)
  }

  return (
    <div className="model-row">
      <div className="model-row__name model__row__left">
        <span className="model-row__value">
          {name}
        </span>
      </div>
      <div className="model-row__type model__row__right">
        <span className="model-row__value">
          {type}
        </span>
        <a href="/" className="model-row__icon" onClick={deleteHandler}>
          <IosTrash color="#bbbbbb" />
        </a>
      </div>
    </div>
  )
}

export default ModelRow
