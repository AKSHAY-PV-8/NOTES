type propType = {
    style : React.CSSProperties
}
const Style = (prop: propType) => {
  return (
    <div style={prop.style}>
            STYLE
    </div>
  )
}

export default Style
