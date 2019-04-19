import React, { useState } from 'react'

const InputPanel = () => {

  return (
    <form>
      <label>
        Chinese
        <input type="text" name="chinese" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  )
}

export default InputPanel
