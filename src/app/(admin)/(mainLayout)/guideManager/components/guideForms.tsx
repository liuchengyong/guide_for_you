'use client';
import {
    Form,
    Input,
    Button,
    Drawer,
    Space,
    Row,
    Col,
    InputNumber,
} from 'antd';

const GuideManagerForm = ({
    open,
    onClose,
}: {
    open: boolean;
    onClose?: () => void;
}) => {
    const [form] = Form.useForm();

    const onSave = () => {
        form.validateFields().then((values) => {
            fetch('/api/guide', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
        });
    };

    return (
        <Drawer
            title="创建导航"
            width={600}
            onClose={onClose}
            open={open}
            extra={
                <Space>
                    <Button onClick={onClose}>取消</Button>
                    <Button onClick={onSave} type="primary">
                        保存
                    </Button>
                </Space>
            }
        >
            <Form layout="vertical" form={form}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="title"
                            label="标题"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入导航标题',
                                },
                            ]}
                        >
                            <Input placeholder="请输入导航标题" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="url"
                            label="导航地址"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please choose the type',
                                },
                            ]}
                        >
                            <Input placeholder="请输入导航地址" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item name="icon" label="图标">
                            <Input placeholder="请输入导航图标" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item name="order" label="排序">
                            <InputNumber
                                width={200}
                                min={0}
                                max={10000}
                                step={1}
                                placeholder="请输入导航描述"
                            />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item name="description" label="描述">
                            <Input.TextArea
                                rows={4}
                                placeholder="请输入导航描述"
                            />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
};

export default GuideManagerForm;
