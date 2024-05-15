import { Form } from "antd";
import { LoadingContext } from "context/loading";
import { postProduct } from "helpers/products";
import { IProduct } from "interfaces/products";
import { useContext } from "react";
import { showModal } from "utils/modal";

export const useProductAdd = () => {
    const [form] = Form.useForm();
    const { setLoading } = useContext(LoadingContext)

    const onSubmit = (values:IProduct) =>{
        setLoading(true)
        postProduct(values)
        .then(()=>{
            showModal({title: 'Product added', text:'Product added successfully', type:'success'})
            form.resetFields()
        })
        .finally(()=>{
            setLoading(false)
        })
    }

  return { form, onSubmit }
}
