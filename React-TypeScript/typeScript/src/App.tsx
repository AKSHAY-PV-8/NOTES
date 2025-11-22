
import './App.css'
import ArrayType from './components/ArrayType'
import Box from './components/Box'
import ChildrenProp from './components/ChildrenProp'
import ComponetInsideComponent from './components/ComponetInsideComponent'
import EventProps from './components/EventProps'
import Greeting from './components/Greeting'
import Input from './components/Input'
import ObjectType from './components/ObjectType'
import Style from './components/Style'
import { ThemeContextProvider } from './components/ThemeUseContext'
import UnionProp from './components/UnionProp'
import User from './components/User'
import { UserContextProvider } from './components/UserContext'
import UseReducer from './components/UseReducer'
import UseStateTypeScript from './components/useStateTypeScript'


function App() {

  const personDetials = {
    first: 'akshay',
    second: "pv"
  }

  const hobies = ["footbal", "coding"]

  

  return (
    <>

      <Greeting name="akshay" age={22} />
      <ObjectType name={personDetials}/>
      <ArrayType hobies={hobies}/>
      <UnionProp status='true'/>
      <ChildrenProp>welcome back</ChildrenProp>
      <ComponetInsideComponent>
        <ChildrenProp>inside component</ChildrenProp>
      </ComponetInsideComponent>

      <EventProps handleClick={(event, id) => {
        console.log('button clicked',event, id)
      }}/>

      <Input value='' handleOnChange={(event) => console.log(event)}/>

      <Style style={{backgroundColor: "blue", padding: "1rem"}}/>

      <UseStateTypeScript/>

      <UseReducer/>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>

      <UserContextProvider>
        <User/>
      </UserContextProvider>

    
    </>
  )
}

export default App
