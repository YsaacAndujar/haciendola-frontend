import axios from "axios"
import { IForgotPasswordRequest, ILoginRequest, ILoginResponse } from "interfaces/auth"

export const postLogin  = (data: ILoginRequest) =>{
    return axios.post<never, ILoginResponse>('auth/login', data)
}

export const postSignin  = (data: ILoginRequest) =>{
    return axios.post<never, ILoginResponse>('auth/signin', data)
}

export const postForgotPassword  = (data: IForgotPasswordRequest) =>{
    return axios.post<never, ILoginResponse>('auth/forgot-password', data)
}