import { Button, Input, Row, Table, Typography } from "antd";
import { useProductsList } from "../hooks/useProductsList.tsx";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
const { Title, } = Typography;

export const ProductsListScreen = () => {
  const { columns, products, pagination, onPaginationChange, onSearch } = useProductsList()
  const navigate = useNavigate()
  return (
    <>
      <Title level={2}>Productos</Title>
      <Row justify='end' style={{marginBottom:'25px'}}>
        <Button type="primary" size="large" onClick={()=>{navigate('add')}}>Crear</Button>
      </Row>
      <Search placeholder="Search" size="large" allowClear onSearch={onSearch} style={{ width: 300,marginBottom:'25px' }} />
      <Table columns={columns} dataSource={products} rowKey="id" pagination={{...pagination, onChange:onPaginationChange}}/>
    </>
  )
}
