import { Form } from "antd";
import { getProduct, updateProduct } from "helpers/products";
import { IProduct } from "interfaces/products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { showModal } from "utils/modal";

export const useProductDetails = (id: string) => {
    const navigate = useNavigate();
    const [form] = Form.useForm();
    const [product, setProduct] = useState<IProduct>()
    useEffect(()=>{
        form.resetFields()
    },[product])
    const [isEdit, setIsEdit] = useState(false)
    useEffect(()=>{
        getProduct(id)
        .then((result)=>{
            setProduct(result)
        })
        .catch(()=>{
            navigate('/')
        })
    }, [id])
    
    const onCancelEdit = () =>{
        setIsEdit(false)
        form.resetFields()
    }

    const onSubmit = (values:IProduct) =>{
        
        updateProduct(id, values)
        .then(()=>{
            showModal({title: 'Product edited', text:'Product edited successfully', type:'success'})
            setProduct((prev) => ({...prev, ...values}))
        })
    }

  return { product, isEdit, form, setIsEdit, onCancelEdit, onSubmit }
}
