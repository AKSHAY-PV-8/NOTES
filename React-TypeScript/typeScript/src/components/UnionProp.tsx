
type typeStatus = {
    status: "true" | "false" | "error"
}
const UnionProp = (prop: typeStatus) => {
    let message

    if(prop.status === 'true'){
        message = "loading success"
    } else {
        message = "Error fetching data";
    }

    if(prop)
  return (
    <div>
        status - {message}
    </div>
  )
}

export default UnionProp
