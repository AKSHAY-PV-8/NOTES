
const Props = (props) => {
    console.log(props)
    return (
        <>
            <h1>hellow {props.name}</h1>
            <h2>age: {props.age}</h2>
            {props.children}
            
            
        </>
    )
}

export default Props
