import { Grid, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ReactNode } from "react";
import './layaout.css';
import { Link } from "react-router-dom";
const { useBreakpoint } = Grid;

interface CustomLayoutProps {
  children: ReactNode;
}

export const CustomLayout = ({ children }: CustomLayoutProps) => {
  const screens = useBreakpoint();
  return (
    <Layout style={{minHeight: '100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, minWidth: 0 }}
          key={0}
        >
          <Menu.Item>
            <Link to='/'>Productos</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: screens.xs ? '20px 16px' : '50px 48px'  }}>
        <div
          style={{
            background: 'white',
            minHeight: 280,
            padding: 24,
            borderRadius: '25px',
          }}
        >
          {children}
        </div>
      </Content>
    </Layout>
  )
}
