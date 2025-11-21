
import './App.css'
import ArrayType from './components/ArrayType'
import ChildrenProp from './components/ChildrenProp'
import ComponetInsideComponent from './components/ComponetInsideComponent'
import EventProps from './components/EventProps'
import Greeting from './components/Greeting'
import Input from './components/Input'
import ObjectType from './components/ObjectType'
import UnionProp from './components/UnionProp'

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

      
    </>
  )
}

export default App
