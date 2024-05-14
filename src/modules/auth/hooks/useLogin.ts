import { AuthContext } from "context/auth"
import { postLogin } from "helpers/auth"
import { useContext } from "react"

export const useLogin = () =>{
    const { setIsLogged } = useContext(AuthContext)

    const login = ({remember, token}: {remember:boolean, token: string}) =>{
        if(remember){
            localStorage.setItem("token", token);
        }else{
            sessionStorage.setItem("token", token);
        }
        setIsLogged(true)
    }
    const startLogin = ({username, password, remember}: {username: string, password: string, remember: boolean}) =>{
        postLogin({username, password,})
        .then(({token}) =>{
            login({remember, token})
        })
    }
    return { startLogin }
}