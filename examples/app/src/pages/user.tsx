import React from 'react';
import { Link } from 'react-router-dom';
import './user.css';

const Users = () => {
    return (
        <>
            <p className='voisky-users'> Users </p>
            <Link to='/me'>Me</Link>
        </>);
};

export default Users;