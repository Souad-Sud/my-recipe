"use client"
import { createContext, useContext, useState} from "react";
import {UserContextType, UserType} from "@/utils/types";

const UserContext = createContext<UserContextType | null>(null)

export const UserConterProvider =  ( 

    { children }: { children: React.ReactNode; }
 ) => {
        // Stats taking type
        const [user, setUser] = useState<(UserType | null)>(null)
    
    return(
        // This stat is added to thid provider to be used everywhere
    <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}