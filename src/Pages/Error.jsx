import React from 'react';
import { NavLink } from 'react-router';
import image from '../assets/image.png'
import Navbar from '../Component/Navbar';
const Error = () => {
    return (
        <>
        <Navbar></Navbar>
        <div className=' bg-white mx-auto rounded-xl p-12 space-y-3 w-10/12 flex flex-col justify-center items-center'>
            <img src={image} className='w-[450px]' alt="" />
            <h1 className='text-4xl font-bold'>404 - Page Not Found</h1>
            <p className='text-xl font-medium text-gray-500'>Oops! The page you're looking for doesn't exist</p>
            <NavLink to='/'>
            <button className='btn rounded-full bg-[#176AE5] text-white text-lg font-bold px-4 py-2'>View All Doctors</button>
            </NavLink>
        </div>
        </>
    );
};

export default Error;