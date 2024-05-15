import { Form } from "antd";
import { postProduct } from "helpers/products";
import { IProduct } from "interfaces/products";
import { showModal } from "utils/modal";

export const useProductAdd = () => {
    const [form] = Form.useForm();
    const onSubmit = (values:IProduct) =>{
        
        postProduct(values)
        .then(()=>{
            showModal({title: 'Product added', text:'Product added successfully', type:'success'})
            form.resetFields()
        })
    }

  return { form, onSubmit }
}
