import { useReducer } from "react"

type CounterState = {
    count: number
}

type UpdateAction = {
    type: "inc" | "dec",
    payload: number
}

type RestAction = { // in reset payload is not needed so we put like this 
    type : "reset"
}

type CounterAction = UpdateAction | RestAction
    
const initialState = {count : 0}

function reducer(state: CounterState, action: CounterAction){
    switch(action.type){
        case "inc":
            return {count: state.count + action.payload}
        case "dec":
            return {count: state.count - action.payload}

        case "reset":
            return initialState
        default:
            return state
    }
}


const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
        COUNT : {state.count}
        <button onClick={() => dispatch({ type: "inc", payload: 10})}>increment 10</button>
        <button onClick={() => dispatch({ type: "dec", payload: 10})}>Decrement 10</button>
        <button onClick={() => dispatch({ type: "reset"})}>Reset</button>
    </div>
  )

}

export default UseReducer
