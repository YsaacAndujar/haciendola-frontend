import axios from "axios"
import { ILoginRequest, ILoginResponse } from "interfaces/auth"

export const postLogin  = (data: ILoginRequest) =>{
    return axios.post<never, ILoginResponse>('auth/login', data)
}