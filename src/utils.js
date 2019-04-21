import React from 'react'

export const getArrow = isOpened => {
  return isOpened ?
    <i className="fas fa-chevron-up arrow"></i> :
    <i className="fas fa-chevron-down arrow"></i>
}

