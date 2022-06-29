import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className=' text-xl flex bg-slate-200 py-5 shadow-lg rounded justify-center'>
            <p className=' pl-8'><Link to='/'>Home</Link></p>
            <p className=' pl-8'><Link to='/add'>Add-Products</Link></p>
            <p className=' pl-8'><Link to='/login'>Login</Link></p>
            <p className=' pl-8'><Link to='/profile'>My Profile</Link></p>
            <p className=' pl-8'><Link to='/all'>All-Products</Link></p>
        </div>
    );
};

export default NavBar;