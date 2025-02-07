import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import 'antd/dist/reset.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body>
            <AntdRegistry>{children}</AntdRegistry>
        </body>
    </html>
);

export default RootLayout;
