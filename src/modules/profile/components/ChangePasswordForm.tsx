import { Button, Col, Form, Input, Row, Typography } from "antd";
import { useChangePassword } from "../hooks/useChangePassword";
const { Title, } = Typography;

export const ChangePasswordForm = () => {
  const { form, onSubmit, } = useChangePassword()

  return (
    <>
      <Title level={2}>Change password</Title>
      <Form
        name="basic"
        size="large"
        form={form}
        onFinish={onSubmit}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
      >
        <Form.Item
          label="Old password"
          name="oldPassword"
          rules={[{ required: true, message: 'La contraseña es requerida' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="New password"
          name="newPassword"
          rules={[{ required: true, message: 'La contraseña es requerida' }]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={['newPassword']}
          rules={[
            { required: true, message: 'Confirme contraseña' },
            ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('newPassword') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Las contraseñas no son iguales'));
            },
          }),]}
        >
          <Input.Password />
        </Form.Item>
        <Row justify="end" gutter={16} >
              <Col>
                <Form.Item>
                  <Button type="primary" size="large" htmlType="submit">
                    Save
                  </Button>
                </Form.Item>
              </Col>
        </Row>
      </Form>
    </>
  )
}
