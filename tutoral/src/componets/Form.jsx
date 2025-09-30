
const Form = () => {
    const onchangeHandler = (event) => {
        event.target.value;
    }
  return (
    <form action="">
        <label htmlFor="">NAME</label>
        <input type="text" onChange={onchangeHandler}/>
    </form>
  )
}

export default Form
