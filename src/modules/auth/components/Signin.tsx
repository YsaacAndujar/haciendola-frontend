import { Dispatch, SetStateAction } from "react";
import { Button, Col, Form, Input, Row, Typography } from 'antd';
const { Title, Text, Link } = Typography;

interface SigninProps {
  onChangeLogin: Dispatch<SetStateAction<boolean>>
}

export const Signin = ({ onChangeLogin }:SigninProps) => {
  return (
    <>
      <Title level={2}>Registro</Title>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        style={{ padding: '20px' }}
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
          label="Confirmar contraseña"
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

        <Row justify="end">
          <Col>
            <Form.Item>
              <Text>
                Ya tienes una cuenta? Ingresa haciendo click <Link onClick={() => { onChangeLogin(true) }}>Aquí</Link>
              </Text>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Resgistrarse
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}
