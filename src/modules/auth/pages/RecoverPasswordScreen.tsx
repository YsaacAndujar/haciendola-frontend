import { Button, Col, Form, Input, Layout, Row, theme, Typography } from "antd";
import { Content } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { useRecoverPassword } from "../hooks/useRecoverPassword";
import { contentStyle, divContainerStyle, layoutStyle } from "../styles/layoutStyles";
const { Title,Text } = Typography;

export const RecoverPasswordScreen = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
      const navigate = useNavigate()
      const { onSubmit } = useRecoverPassword()
  return (
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>
        <div
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
            ...divContainerStyle
          }}
        >
      <Title level={2}>Recover password</Title>
      <Text style={{color:'red'}}>The code will always be 0000</Text>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        style={{ padding: '20px' }}
        labelCol={{ span: 5, offset: 0 }}
        onFinish={onSubmit}
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: 'El usuario es requerido' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Code"
          name="code"
          rules={[{ required: true, message: 'El usuario es requerido' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="New password"
          name="password"
          rules={[{ required: true, message: 'La contraseña es requerida' }]}
        >
          <Input.Password />
        </Form.Item>
        
        <Form.Item
          label="Confirm password"
          name="confirm"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Confirme contraseña' },
            ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Las contraseñas no son iguales'));
            },
          }),]}
        >
          <Input.Password />
        </Form.Item>
        <Row justify="end" gutter={16}>
          <Col>
            <Form.Item>
              <Button size="large" onClick={() => { navigate('/auth') }}>
                Cancel
              </Button>
            </Form.Item>
          </Col>
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit" size="large">
                Change password
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
        </div>
      </Content>
    </Layout>
  )
}
