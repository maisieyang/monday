import React from 'react';
import { Page, Content, Header } from '@alita/flow';
import { Outlet, useLocation } from 'react-router-dom';

const Layout = () => {
    const { pathname } = useLocation()
    return (<Page>
        <Header>当前路由: {pathname}</Header>
        <Content>
            <Outlet />
        </Content>
    </Page>)
}

export default Layout;

