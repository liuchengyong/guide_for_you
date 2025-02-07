import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
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

const AdminMainLayout = ({ children }: { children: React.ReactNode }) => (
    <Layout hasSider>
        <Sider style={siderStyle}>
            <div className="demo-logo-vertical">网站导航</div>
        </Sider>
        <Layout>
            <Content>{children}</Content>
        </Layout>
    </Layout>
);

export default AdminMainLayout;
