import axios from "axios"
import { IProductListResponse } from "interfaces/products"

export const getProducts  = (params?: {page: number, take:number, param?: string}) =>{
    return axios.get<never, IProductListResponse>('/products', {params})
}