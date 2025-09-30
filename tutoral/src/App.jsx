
import './App.css'
import Form from './componets/Form'
import List from './componets/List'
import Props from "./componets/Props"
import Counter from './componets/State'
import State from './componets/State'


function App() {
  return (
    <>
      <Props name="akshay" age="21">
        <p>hellow  fdjhkdfjghkd</p>
      </Props>
      <Props name="akshay" age="21">
        <button>bye</button>
      </Props>

      {/* state */}

      <Counter></Counter>   

      {/* list     */}

      <List></List>

      {/* Form */}

      <Form></Form>
    </>
  )
}

export default App
