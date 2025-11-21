type propType = {
    name: {
        first: string,
        second: string
    }
}
const ObjectType = (prop: propType) => {
  return (
    <div>
        <h2>Person: {prop.name.first} {prop.name.second}</h2>
    </div>
  )
}

export default ObjectType
