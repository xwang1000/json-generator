import React from 'react'

const ResultPanel = props => {
  const { display } = props

  return <div>
    <h2>Result Panel</h2>
    <pre>
      { display.length === 0 ? '' : JSON.stringify(display, null, 4)}
    </pre>
  </div>
}

export default ResultPanel
