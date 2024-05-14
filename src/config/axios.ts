import axios from "axios";
import { AuthContext } from "context/auth";
import { useContext } from "react";


const removeLogin = () =>{
    const { setIsLogged } = useContext(AuthContext)
    setIsLogged(false)
}

export const setupAxios = (): void => {


    axios.interceptors.response.use(
      ({data}) => {
        return data;
      },
      (error) => {
        if(!error.response){
          return Promise.reject(error)
        }
        const { status } = error.response
        if(status === 401){
            removeLogin()
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
    );

    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }