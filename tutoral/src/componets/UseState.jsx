import { useState } from "react"

const UseState = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState({firstName:"", lastName: ""})
    const [newItem, setNewItem] = useState("")
    const [item, setItem] = useState([]);

    const add = () =>{
        setItem([...item, newItem])
    }

    
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={() => setCount(count+1)}>add</button>
        <button onClick={() => setCount (count-1)}>dec</button>


        {/* UseState Using object */}

        <h2>name: {name.firstName} {name.lastName}</h2>
  

        <label htmlFor="">first Name</label>
        <input type="text" value={name.firstName} name="" id="" onChange={e => setName({...name, firstName: e.target.value})}/>

        <label htmlFor="">Last Name</label>
        <input type="text" value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})}/>


        {/* UseState Using Array */}

        <label htmlFor="">ADD ITEMS</label>
        <input type="text" value={newItem}  onChange={e => setNewItem(e.target.value)}/>
        <button onClick={add}>add</button>

        <h1>LIST</h1>
        <ul>
            {item.map((i, index) =>(
                <li key={index}>{i}</li>
            ))}
        </ul>
    </div>
  )
}

export default UseState



  




              