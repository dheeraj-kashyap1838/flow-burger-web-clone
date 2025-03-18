import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {
    const UserData = {
        name: "Dheeraj",
        age: 22,
        des: "Devoloper"
    }
  return (
    <DataContext.Provider value={UserData}>
        {children}
    </DataContext.Provider>
  )
}

export default UserContext