import { Form } from "antd";
import { LoadingContext } from "context/loading";
import { deleteProduct, getProduct, updateProduct } from "helpers/products";
import { IProduct } from "interfaces/products";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showModal } from "utils/modal";
import Swal from 'sweetalert2'

export const useProductDetails = (id: string) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [product, setProduct] = useState<IProduct>()
    const { setLoading } = useContext(LoadingContext)

    useEffect(()=>{
        form.resetFields()
    },[product])
    const [isEdit, setIsEdit] = useState(false)
    useEffect(()=>{
        setLoading(true)
        getProduct(id)
        .then((result)=>{
            setProduct(result)
        })
        .catch(()=>{
            navigate('/')
        })
        .finally(()=>{
            setLoading(false)
        })
    }, [id])
    
    const onCancelEdit = () =>{
        setIsEdit(false)
        form.resetFields()
    }

    const onSubmit = (values:IProduct) =>{
        setLoading(true)
        updateProduct(id, values)
        .then(()=>{
            showModal({title: 'Product edited', text:'Product edited successfully', type:'success'})
            setProduct((prev) => ({...prev, ...values}))
        })
        .finally(()=>{
            setLoading(false)
        })
    }

    const onDeleteClick = () =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              onDeleteProduct()
            }
          });
    }

    const onDeleteProduct = () =>{
        setLoading(true)
        deleteProduct(id)
        .then(()=>{
            showModal({title: 'Product deleted', text:'Product deleted successfully', type:'success'})
            navigate('/')
        })
        .finally(()=>{
            setLoading(false)
        })
    }

  return { product, isEdit, form, setIsEdit, onCancelEdit, onSubmit, onDeleteClick }
}
