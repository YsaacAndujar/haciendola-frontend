import { createContext, Dispatch, SetStateAction, } from "react";

export interface AuthContextValues {
    isLogged: boolean,
    setIsLogged: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<AuthContextValues>({
    isLogged: false,
    setIsLogged: () => {}
})