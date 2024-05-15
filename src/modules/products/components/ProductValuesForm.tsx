import { Form, Input, InputNumber } from "antd";

interface ProductValuesFormProps {
    isEdit? : boolean
}

export const ProductValuesForm = ({isEdit} : ProductValuesFormProps) => {
    return (
        <>
            <Form.Item
                label="Handle"
                name="handle"
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <Input disabled={!isEdit} />
            </Form.Item>

            <Form.Item
                label="Title"
                name="title"
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <Input disabled={!isEdit} />
            </Form.Item>

            <Form.Item
                label="Description"
                name="description"
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <Input disabled={!isEdit} />
            </Form.Item>
            <Form.Item
                label="SKU"
                name="sku"
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <Input disabled={!isEdit} />
            </Form.Item>
            <Form.Item
                label="Grams"
                name="grams"
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <InputNumber disabled={!isEdit} style={{ width: '100%' }} min={0} />
            </Form.Item>
            <Form.Item
                label="Stock"
                name="stock"
                rules={[
                    { required: true, message: 'This field is required' },
                    {
                        pattern: /^[0-9]*$/,
                        message: 'Only integers',
                    },
                ]}
            >
                <InputNumber disabled={!isEdit} style={{ width: '100%' }} min={0} />
            </Form.Item>
            <Form.Item
                label="Price"
                name="price"
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <InputNumber disabled={!isEdit} style={{ width: '100%' }} min={0} />
            </Form.Item>
            <Form.Item
                label="Compare Price"
                name="comparePrice"
                rules={[{ required: true, message: 'This field is required' }]}
            >
                <InputNumber disabled={!isEdit} style={{ width: '100%' }} />
            </Form.Item>

            <Form.Item
                label="Barcode"
                name="barcode"
            >
                <Input disabled={!isEdit} />
            </Form.Item>
        </>
    )
}
