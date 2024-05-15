import { useState } from "react"
import { LoadingContext } from "./loadingContext";

type LoadingContextProvider = {
  children: React.ReactNode
}

export const LoadingContextProvider = ({ children }: LoadingContextProvider) => {
  const [loading, setLoading] = useState<boolean>(false)
  return (
    <LoadingContext.Provider value={{
      loading,
      setLoading
    }}>
      {children}
    </LoadingContext.Provider>
  )
}