import React from "react";

import type { MenuProps } from 'antd';
import { Layout, theme } from 'antd';

import Content from "../Content/Index";

// const { Content } = Layout;

const items1: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));


const AppLayout: React.FC = () => {

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ paddingTop: '50px' }}>
            <Content />
        </Layout>
    );
}

export default AppLayout;