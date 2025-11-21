type propType = {
    value: string,
    handleOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = (prop: propType) => {
  return (
    <input type="text" value={prop.value} onChange={prop.handleOnChange}/>
  )
}


export default Input
