type propType = {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void
}
const EventProps = (prop: propType) => {
  return (
    <button onClick={(event) => prop.handleClick(event, 1)}> click</button>
  )
}

export default EventProps
