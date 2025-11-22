import { useState } from "react"

type AuthUser = {
  name : string,
  email : string
}


const UseStateTypeScript = () => {

  const [user, setUser] = useState<AuthUser | null>(null)

  const [withoutCheck, setWithoutCheck] = useState<AuthUser> ({} as AuthUser)

  const handleLogin = () => {
  setUser({
    name: "akshay",
    email: "aksahy@gmail.com"
  })

  setWithoutCheck({
     name: "akshay",
    email: "aksahy@gmail.com"
  })
}
  return (
    <div>
      <button onClick={() => handleLogin()}>login</button>

      <div className="">User Name is {user?.name}</div>

      <div className="">user name without check {withoutCheck.name}</div>
      
    </div>
  )
}

export default UseStateTypeScript
