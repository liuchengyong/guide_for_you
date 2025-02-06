import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import '@/styles/globals.css';

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>{children}</AntdRegistry>
    </body>
  </html>
);

export default RootLayout;