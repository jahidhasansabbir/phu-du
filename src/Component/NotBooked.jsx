import React from 'react';
import { NavLink } from 'react-router';

const NotBooked = () => {
    return (
        <div className='text-center bg-white mx-auto rounded-xl p-12 space-y-5 my-12'>
            <h1 className='text-center text-4xl font-bold'>You Have not booked any appointment yet.</h1>
            <p className='text-center text-lg font-medium text-gray-500 max-w-5xl'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience.</p>
            <NavLink to='/'>
            <button className='btn rounded-full bg-[#176AE5] text-white text-lg font-bold px-4 py-2'>View All Doctors</button>
            </NavLink>
        </div>
    );
};

export default NotBooked;