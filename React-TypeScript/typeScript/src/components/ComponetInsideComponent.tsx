type propType = {
    children : React.ReactNode
}
const ComponetInsideComponent = (prop: propType) => {
  return (
    <div>
        {prop.children}
        
    </div>
  )
}

export default ComponetInsideComponent
