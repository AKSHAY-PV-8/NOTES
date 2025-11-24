import { createContext, useDeferredValue, useState } from "react";

type AuthUser = {
    name: string,
    email: string
}

type UserContextProviderProps = {
    children : React.ReactNode
}

type UserCOntextType = {
    user: AuthUser | null,
    setUser:  React.Dispatch<React.SetStateAction<AuthUser | null>>

}


export const UserContext = createContext<UserCOntextType>({} as UserCOntextType)

export const UserContextProvider  = ({children}: UserContextProviderProps) => {
    const [ user, setUser] = useState<AuthUser | null>(null)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
