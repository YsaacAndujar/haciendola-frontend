import { useState } from "react"
import { AuthContext } from "./authContext"

type AuthContextProvider = {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProvider) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  const [isLogged, setIsLogged] = useState<boolean>(!!token)
  return (
    <AuthContext.Provider value={{
      isLogged,
      setIsLogged
    }}>
      {children}
    </AuthContext.Provider>
  )
}