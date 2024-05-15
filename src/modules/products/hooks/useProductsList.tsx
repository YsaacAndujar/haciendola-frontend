import { Grid, TableProps } from "antd"
import { LoadingContext } from "context/loading";
import { getProducts } from "helpers/products"
import { IProductList } from "interfaces/products"
import { useContext, useEffect, useState } from "react"
const { useBreakpoint } = Grid;

export const useProductsList = () => {
    const [products, setProducts] = useState<IProductList[]>([])
    const [pagination, setPagination] = useState<{total:number}>({total:0})
    const [filters, setFilters] = useState({page:1, take:10,})
    const screens = useBreakpoint();
    const { setLoading } = useContext(LoadingContext)

    useEffect(()=>{
      setLoading(true)
        getProducts(filters)
        .then(({result, total})=>{
            setProducts(result)
            setPagination((prev)=> ({...prev, total}))
        })
        .finally(()=>{
          setLoading(false)
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
    const columnsMd: TableProps<IProductList>['columns'] = [
        {
          title: 'Id',
          dataIndex: 'id',
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
        {
          key: 'action',
          render: (_, record) => (
              <a href={`/${record.id}`}>Details</a>
          ),
        },
      ];
    const columnsXs: TableProps<IProductList>['columns'] = [
        {
          title: 'Id',
          dataIndex: 'id',
        },
        {
          title: 'Title',
          dataIndex: 'title',
        },
        {
          title: 'Price',
          dataIndex: 'price',
        },
        {
          key: 'action',
          render: (_, record) => (
              <a href={`/${record.id}`}>Details</a>
          ),
        },
      ];
  return { products, columns: (screens.xs? columnsXs : columnsMd).map((column, idx) => ({...column, key: idx})),pagination, onPaginationChange, onSearch }
}
