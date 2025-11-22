import { useContext } from "react"
import { ThemeContext} from "./ThemeUseContext"

const Box = () => {

const theme = useContext(ThemeContext)
  return (
    <div style={{backgroundColor: theme.primary.main, color: theme.primary.text}}>
        <h1>I am BOX</h1>
        
    </div>
  )
}

export default Box
