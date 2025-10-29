import React from 'react'
import ComponentB from './ComponentB'

export const UserContext = React.createContext();

const ComponentA = () => {
  return (
    <div>
        <UserContext.Provider value={"name"}>
            <ComponentB></ComponentB>
        </UserContext.Provider>
        
    </div>
  )
}

export default ComponentA
