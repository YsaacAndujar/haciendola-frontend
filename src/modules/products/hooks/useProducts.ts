import { TableProps } from "antd"
import { getProducts } from "helpers/products"
import { IProductList } from "interfaces/products"
import { useEffect, useState } from "react"

export const useProducts = () => {
    const [products, setProducts] = useState<IProductList[]>([])
    const [pagination, setPagination] = useState<{total:number}>({total:0})
    const [filters, setFilters] = useState({page:1, take:10,})
    useEffect(()=>{
        getProducts(filters)
        .then(({result, total})=>{
            setProducts(result)
            setPagination((prev)=> ({...prev, total}))
        })
    }, [filters])
    const onPaginationChange = (page: number, take: number) =>{
        setFilters((prev)=> ({...prev, page, take}))
        setPagination((prev)=> ({...prev, current:page}))

    }
    const onSearch = (param:string) =>{
        setPagination((prev)=> ({...prev, current:1}))
        setFilters((prev)=> ({...prev, param, page:1}))
    }
    const columns: TableProps<IProductList>['columns'] = [
        {
          title: 'Id',
          dataIndex: 'id',
        },
        {
          title: 'Handle',
          dataIndex: 'handle',
        },
        {
          title: 'Title',
          dataIndex: 'title',
        },
        {
          title: 'Stock',
          dataIndex: 'stock',
        },
        {
          title: 'Price',
          dataIndex: 'price',
        },
      ];
  return { products, columns: columns.map((column, idx) => ({...column, key: idx})),pagination, onPaginationChange, onSearch }
}
