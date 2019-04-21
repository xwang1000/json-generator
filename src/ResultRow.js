import React from 'react'

const ResultRow = props => {

  const { object, isLastItem, deleteRow } = props
  const getComma = isLastItem ? '' : ','
  
  return <pre onClick={deleteRow}>{JSON.stringify(object, null, 4)}{getComma}</pre>
}

export default ResultRow
