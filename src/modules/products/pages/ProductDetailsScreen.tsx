import { Button, Col, Form, Input, InputNumber, Row, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetails } from "../hooks/useProductDetails";
import { ProductValuesForm } from "../components/ProductValuesForm";
const { Title, } = Typography;

export const ProductDetailsScreen = () => {
  const { id } = useParams();
    const navigate = useNavigate();
    if (!id) {
        navigate('/')
    }
    const { product, form, isEdit, setIsEdit, onCancelEdit, onSubmit } = useProductDetails(id||'0')
    
  return (
    <>
      <Title level={2}>Details</Title>
      <Form
        name="basic"
        size="large"
        initialValues={product}
        form={form}
        onFinish={onSubmit}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
      >
        <ProductValuesForm isEdit={isEdit}/>

        <Row justify="end"gutter={16} >
          {
            !isEdit && 
            <>
              <Col>
                <Form.Item>
                  <Button size="large" onClick={() =>{navigate('/')}}>
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" onClick={()=> setIsEdit(true)}>
                    Edit
                  </Button>
                </Form.Item>
              </Col>
            </>
          }
          {
            isEdit && 
            <>
              <Col>
                <Form.Item>
                  <Button size="large" htmlType="reset" onClick={onCancelEdit}>
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Col>
            </>
          }
        </Row>
      </Form>
    </>
  )
}
