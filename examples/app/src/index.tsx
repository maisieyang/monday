import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import  Layout  from './layouts/index'
import  Hello  from './pages/home';
import  Users  from './pages/user';
import  Me  from './pages/me';




const App = () => {
    return (
        <HashRouter>
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route path="/" element={<Hello />} />
                <Route path="/users" element={<Users />} />
                <Route path="/me" element={<Me />} />
            </Route>
        </Routes>
    </HashRouter>
    );
}



const root = ReactDOM.createRoot(document.getElementById('malita'));
root.render(React.createElement(App));
