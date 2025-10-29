import React from 'react'
import { UserContext } from './ComponentA'




const ComponentC = () => {
  return (
    <div>

      <UserContext.Consumer>
        {
            user => {
                return <div>User name {user}</div>
            }
        }
      </UserContext.Consumer>
    </div>
  )
}

export default ComponentC
