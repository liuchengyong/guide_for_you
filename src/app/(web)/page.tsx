import { Layout, Menu } from 'antd';
import Sider from 'antd/es/layout/Sider';

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};

export default async function Guide() {
    return (
        <Layout hasSider>
            <Sider style={siderStyle}>
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[
                        {
                            key: 'dasdas',
                            label: 'ceshi',
                        },
                    ]}
                />
            </Sider>
        </Layout>
    );
}
