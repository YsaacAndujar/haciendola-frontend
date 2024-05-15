export interface IProductList {
    id: number, 
    handle: string,
    title: string,
    stock: number,
    price: number,
}

export interface IProduct extends IProductList {
    description: string,
    sku: string,
    grams: number,
    comparePrice: number,
    barcode: string,
}

export interface IProductListResponse {
    result: IProductList[]
    total: number
}