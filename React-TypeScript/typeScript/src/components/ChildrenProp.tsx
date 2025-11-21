type propType = {
    children: string
}

const ChildrenProp = (prop: propType) => {
  return (
    <div>
        {prop.children}
    </div>
  )
}

export default ChildrenProp
