import { createContext, Dispatch, SetStateAction, } from "react";

export interface IAuthContextValues {
    isLogged: boolean,
    setIsLogged: Dispatch<SetStateAction<boolean>>
}

export const AuthContext = createContext<IAuthContextValues>({
    isLogged: false,
    setIsLogged: () => {}
})