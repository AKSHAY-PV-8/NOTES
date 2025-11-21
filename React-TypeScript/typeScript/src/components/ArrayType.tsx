type propType = {
    hobies: string[]
}
const ArrayType = (prop: propType) => {
  return (
    <div>
        <h1>hobies</h1>
        {prop.hobies.map(h => <div>. {h}</div>)}
      
    </div>
  )
}

export default ArrayType
