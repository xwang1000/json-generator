import React from 'react'
import { atelierEstuaryDark, atelierEstuaryLight, vs2015, xcode, rainbow
} from 'react-syntax-highlighter/dist/esm/styles/hljs'

const ThemePanel = props => {
  const { setTheme } = props
  
  const renderThemeOptions = (
    <p>
      <span onClick={() => setTheme(atelierEstuaryLight)}>atelierEstuaryLight</span> | 
      <span onClick={() => setTheme(vs2015)}>vs2015</span> | 
      <span onClick={() => setTheme(xcode)}>xcode</span>
    </p>
  )

  return renderThemeOptions
}

export default ThemePanel
