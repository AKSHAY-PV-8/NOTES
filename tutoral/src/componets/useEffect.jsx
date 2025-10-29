import { useState, useEffect } from "react"

const UseEff = () => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState("")

    useEffect(() => {
        document.title = `count: ${count}`
    },[count])

  return (
    <div>
        <input type="text" value={name}  onChange={ e => setName(e.target.value)}/>
        <button onClick={() => setCount(count+1)}>add{count}</button>
    </div>
    )
}   

export default UseEff
