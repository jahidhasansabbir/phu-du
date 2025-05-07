import React from 'react';
import { NavLink } from 'react-router';

const NoDocFound = () => {
    return (
        <div className='text-center bg-white w-10/12 mx-auto rounded-xl p-12 space-y-5 mt-12'>
            <h1 className='text-4xl font-bold'>No Doctor Found!!</h1>
            <p className='text-lg font-medium text-gray-500'> No Doctor found with this registration No.</p>
            <NavLink to='/'>
            <button className='btn rounded-full bg-[#176AE5] text-white text-lg font-bold px-4 py-2'>View All Doctors</button>
            </NavLink>
        </div>
    );
};

export default NoDocFound;