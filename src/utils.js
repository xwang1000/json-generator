import React from 'react'

export const getArrow = isOpened => {
  return isOpened ?
    <i class="fas fa-chevron-up arrow"></i> :
    <i class="fas fa-chevron-down arrow"></i>
}

