import { Button, Checkbox, Col, Form, Input, Row } from "antd"
import { Typography } from 'antd';
import { Dispatch, SetStateAction } from "react";
import { useLogin } from "../hooks/useLogin";
const { Title, Text, Link } = Typography;

interface LoginProps {
  onChangeLogin: Dispatch<SetStateAction<boolean>>
}

export const Login = ({ onChangeLogin }: LoginProps) => {
  const { startLogin } = useLogin()
  return (
    <>
      <Title level={2}>Login</Title>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        style={{ padding: '20px' }}
        onFinish={startLogin}
        labelCol={{ span: 5, offset:0 }}
      >
        <Form.Item
          label="Usuario"
          name="username"
          rules={[{ required: true, message: 'El usuario es requerido' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[{ required: true, message: 'La contraseña es requerida' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 5 }}
        >
          <Checkbox>Recuérdame</Checkbox>
        </Form.Item>
        <Row justify="end">
          <Col>
            <Form.Item>
              <Text>
                Aún no tienes una cuenta? Regístrate haciendo click <Link onClick={() => { onChangeLogin(false) }}>Aquí</Link>
              </Text>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Ingresar
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
