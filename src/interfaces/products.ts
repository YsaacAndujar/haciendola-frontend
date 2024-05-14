export interface IProductList {
    id: number, 
    handle: string,
    title: string,
    stock: number,
    price: number
}

export interface IProductListResponse {
    result: IProductList[]
    total: number
}