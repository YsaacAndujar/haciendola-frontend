import { Form } from "antd";
import { LoadingContext } from "context/loading";
import { getProduct, updateProduct } from "helpers/products";
import { IProduct } from "interfaces/products";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showModal } from "utils/modal";

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

  return { product, isEdit, form, setIsEdit, onCancelEdit, onSubmit }
}
