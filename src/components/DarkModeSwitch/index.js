import { StyledSwitch } from './style'
import { useContext } from 'react'
import { ColorModeContext } from '../ColorMode'
export function DarkModeSwitch() {
  
const contexto = useContext(ColorModeContext)

    return (
      <StyledSwitch>
        <input id="darkmode" type="checkbox" onChange={() =>{
          contexto.toggleMode()
        }} />
        
        <label
          htmlFor="darkmode"
          className="darkmode-switch"
        >
          <span>🌙</span>
          <span>☀️</span>
        </label>
      </StyledSwitch>
    )
  }