import React from 'react';
import { Page, Content, Header } from '@alita/flow';
import { Outlet, useLocation } from 'react-router-dom';
import './index.css';

const Layout = () => {
    const { pathname } = useLocation()
    return (<Page>
        <Header>
            <div className='voisky-header'>
            当前路由: {pathname}
            </div>
        </Header>
        <Content>
            <Outlet />
        </Content>
    </Page>)
}

export default Layout;

