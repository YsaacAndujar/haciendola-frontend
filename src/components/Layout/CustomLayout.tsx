import { Grid, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { ReactNode } from "react";
import './customLayout.css';
import { Link } from "react-router-dom";
import SubMenu from "antd/es/menu/SubMenu";
const { useBreakpoint } = Grid;

interface CustomLayoutProps {
  children: ReactNode;
}

export const CustomLayout = ({ children }: CustomLayoutProps) => {
  const screens = useBreakpoint();
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ flex: 1, minWidth: 0 }}
          key={0}
        >
          <Menu.Item>
            <Link to='/products'>Productos</Link>
          </Menu.Item>
          <Menu.SubMenu key="profile" title="profile">
            <Menu.Item key="profile">
              <Link to='/profile'>Profile</Link>
            </Menu.Item>
            <Menu.Item key="logout">
              Logout
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Header>
      <Content style={{ padding: screens.xs ? '20px 16px' : '50px 48px' }}>
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
