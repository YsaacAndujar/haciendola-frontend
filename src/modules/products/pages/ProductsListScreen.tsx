import { Button, Input, Row, Table, Typography } from "antd";
import { useProducts } from "../hooks/useProducts";
const { Search } = Input;
const { Title, } = Typography;

export const ProductsListScreen = () => {
  const { columns, products, pagination, onPaginationChange, onSearch } = useProducts()
  return (
    <>
      <Title level={2}>Productos</Title>
      <Row justify='end' style={{marginBottom:'25px'}}>
        <Button type="primary" size="large">Crear</Button>
      </Row>
      <Search placeholder="Search" size="large" allowClear onSearch={onSearch} style={{ width: 300,marginBottom:'25px' }} />
      <Table columns={columns} dataSource={products} rowKey="id" pagination={{...pagination, onChange:onPaginationChange}}/>
    </>
  )
}
