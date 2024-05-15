import axios from "axios"
import { IProduct, IProductListResponse } from "interfaces/products"

export const getProducts  = (params?: {page: number, take:number, param?: string}) =>{
    return axios.get<never, IProductListResponse>('/products', {params})
}

export const getProduct  = (id:string) =>{
    return axios.get<never, IProduct>(`/products/${id}`, )
}

export const updateProduct  = (id:string, product: IProduct) =>{
    return axios.put(`/products/${id}`, product)
}