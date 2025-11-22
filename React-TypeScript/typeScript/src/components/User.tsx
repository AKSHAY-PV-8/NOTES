import { useContext } from "react"
import { UserContext } from "./UserContext"

const User = () => {
const usersContext = useContext(UserContext)

const handleLogin = () => {
   
        usersContext.setUser({
            name: "akshay",
            email: "Aksahypv@gmail.com"
        })
}

const handleLogOut = () => {
        usersContext.setUser(null)
}
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogOut}>Logout</button>

        <div className="">User name is : {usersContext.user?.name}</div>
        <div className="">Email name is : {usersContext.user?.email}</div>

    </div>
  )
}

export default User
