import axios from "axios"
import { AuthContext } from "context/auth"
import { postLogin, postSignin } from "helpers/auth"
import { useContext } from "react"

export const useAuth = () => {
    const { setIsLogged } = useContext(AuthContext)

    const login = ({ remember, token }: { remember: boolean, token: string }) => {
        if (remember) {
            localStorage.setItem("token", token);
        } else {
            sessionStorage.setItem("token", token);
        }
        axios.defaults.headers.Authorization = `Bearer ${token}`
        setIsLogged(true)
    }
    const startLogin = ({ username, password, remember }: { username: string, password: string, remember: boolean }) => {
        postLogin({ username, password, })
            .then(({ token }) => {
                login({ remember, token })
            })
    }
    
    const startSignin = ({ username, password }: { username: string, password: string }) => {
        postSignin({ username, password, })
            .then(({ token }) => {
                login({ remember:false, token })
            })
    }
    return { startLogin, startSignin }
}