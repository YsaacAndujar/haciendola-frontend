import { Button, Col, Form, Row, Typography } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { ProductValuesForm } from "../components/ProductValuesForm";
import { useProductDetails } from "../hooks/useProductDetails";
import { useProductAdd } from "../hooks/useProductAdd";
const { Title, } = Typography;

export const ProductAddScreen = () => {
    const { form, onSubmit } = useProductAdd()
    const navigate = useNavigate()
  return (
    <>
      <Title level={2}>Add</Title>
      <Form
        name="basic"
        size="large"
        form={form}
        onFinish={onSubmit}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
      >
        <ProductValuesForm/>

        <Row justify="end"gutter={16} >
              <Col>
                <Form.Item>
                  <Button size="large" onClick={() =>{navigate('/products')}}>
                    Cancel
                  </Button>
                </Form.Item>
              </Col>
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" htmlType="submit">
                    Add
                  </Button>
                </Form.Item>
              </Col>
        </Row>
      </Form>
    </>
  )
}
