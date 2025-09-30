
const List = () => {
    const array = ["a", "b", "c"]
  return (
    <div>
        <h1>List</h1>
        <ul>
            {array.map((fruit, index) => <h2 key={index}>{fruit}</h2> )}
        </ul>   
    </div>
  )
}

export default List
                  