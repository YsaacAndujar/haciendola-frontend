import axios from "axios";
import { showModal } from "utils/modal";


const removeLogin = () =>{
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload();
}

export const setupAxios = (): void => {
  const genericErroMsg = 'Hubo un error desconocido. Revise su conexión a internet e inténtelo más tarde'
    axios.interceptors.response.use(
      ({data}) => {
        return data;
      },
      (error) => {
        if(!error.response){
          showModal({title: 'Error desconocido', text:genericErroMsg, type:'error'})
          return Promise.reject(error)
        }
        const { data,status } = error.response
        if(status === 401){
            removeLogin()
          return Promise.reject(error);
        }
        showModal({title: 'Error', text: data.message || genericErroMsg, type:'error'})
        return Promise.reject(error);
      }
    );

    axios.defaults.baseURL = import.meta.env.VITE_API_URL;
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      axios.defaults.headers.Authorization = `Bearer ${token}`;
    }
  }