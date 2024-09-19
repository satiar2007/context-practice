import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState("sakib")
    const [age, setAge] = useState(17)

    return (
        <UserContext.Provider value={{ user, age }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }