import { useState } from "react"
import { AuthContext } from "./auth/authContext"

type AuthContextProvider = {
    children: React.ReactNode
  }
  
  export const AuthContextProvider = ({ children }: AuthContextProvider) => {
  
    const [isLogged, setIsLogged] = useState<boolean>(false)
    return (
      <AuthContext.Provider value={{
        isLogged,
        setIsLogged
      }}>
        {children}
      </AuthContext.Provider>
    )
  }