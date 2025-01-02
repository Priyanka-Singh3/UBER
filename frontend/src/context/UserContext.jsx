import React, { createContext, useState } from 'react'

export const UserContextData = createContext();

const UserContext = ({children}) => {
  const [user, SetUser] = useState({
    email: '',
    fullName: {
      firstName: '',
      lastName: ''
    }
  })

  return (
    <div>
        <UserContextData.Provider value={[user, SetUser]}> 
        {children}
        </UserContextData.Provider>
    </div>
  )
}

export default UserContext