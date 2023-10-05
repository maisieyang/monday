import React from 'react';
import { Link } from 'react-router-dom';
import './me.css';

const Me = () => {
    return (<><p className='voisky-me'> Me </p> <Link to='/'>go Home</Link></>);
};

export default Me;