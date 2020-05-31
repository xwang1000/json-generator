import React from 'react'
import { atelierEstuaryDark, atelierEstuaryLight, vs2015, xcode, rainbow, solarizedDark, solarizedLight, purebasic
} from 'react-syntax-highlighter/dist/esm/styles/hljs'
import './ThemePanel.css'

const options = {
  'none': {},
  'atelierEstuaryDark': atelierEstuaryDark,
  'atelierEstuaryLight': atelierEstuaryLight,
  'vs2015': vs2015,
  'xcode': xcode,
  'rainbow': rainbow,
  'solarizedDark': solarizedDark,
  'solarizedLight': solarizedLight,
  'purebasic': purebasic
}

const ThemePanel = props => {
  const { setTheme } = props

  const renderThemeOptions = () => {
    const optionBlocks = []
    for (let name in options) {
      optionBlocks.push(
        <div key={name} className="theme-panel__block" onClick={() => setTheme(options[name])}>{name}</div>
      )
    }

    return optionBlocks
  }

  return (
    <div className="theme-panel">
      <p>theme</p>
      {renderThemeOptions()}
    </div>
  )
}

export default ThemePanel
