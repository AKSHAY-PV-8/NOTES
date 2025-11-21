type propType = {
    name: string,
    age: number,
    isLogged?: boolean
}
const Greeting = (prop: propType) => {
  return (
    <div>
        <h1>Welcom {prop.name}</h1>
        <h2>details</h2>
        <div className="">age: {prop.age}</div>
        logged: {prop.isLogged ? <span>logged</span>: <span>not logged</span>}
        
        ddgdfg
        dfgdfgdfd
    </div>
  )
}

export default Greeting
