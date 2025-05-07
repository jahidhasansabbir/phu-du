import React from 'react';
import doctorImage from '../assets/success-doctor.png';
import ReviewImg from '../assets/success-review.png';
import PataintsImg from '../assets/success-patients.png';
import StuffsImg from '../assets/success-staffs.png';
import CountUp from 'react-countup';
const MedicalServices = () => {
    
    return (
        <div className='w-10/12 mx-auto'>
            <h1 className='text-2xl md:text-4xl font-extrabold text-center mb-2'>We Provide Best Medical Services</h1>
            <p className='text-gray-500 text-center max-w-4xl mx-auto mb-4'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-10'>
                <div className='bg-white p-4 rounded-xl space-y-3'>
                    <img src={doctorImage} className='w-16 h-16'/>
                    <h2 className='text-3xl md:text-5xl font-extrabold'>
                    <CountUp end={199} duration={2} enableScrollSpy />+
                    </h2>
                    <p className='text-sm md:text-2xl font-semibold text-gray-400'>Total Doctors</p>
                </div>
                <div className='bg-white p-4 rounded-xl space-y-3'>
                    <img src={ReviewImg} className='w-16 h-16'/>
                    <h2 className='text-3xl md:text-5xl font-extrabold'>
                    <CountUp end={467} duration={1} enableScrollSpy />+
                    </h2>
                    <p className='text-sm md:text-2xl font-semibold text-gray-400'>Total Reviews</p>
                </div>
                <div className='bg-white p-4 rounded-xl space-y-3'>
                    <img src={PataintsImg} className='w-16 h-16'/>
                    <h2 className='text-3xl md:text-5xl font-extrabold'>
                    <CountUp end={1900} duration={2} enableScrollSpy />+
                    </h2>
                    <p className='text-sm md:text-2xl font-semibold text-gray-400'>Patients</p>
                </div>
                <div className='bg-white p-4 rounded-xl space-y-3'>
                    <img src={StuffsImg} className='w-16 h-16'/>
                    <h2 className='text-3xl md:text-5xl font-extrabold'>
                    <CountUp end={300} duration={2} enableScrollSpy />+
                    </h2>
                    <p className='text-sm md:text-2xl font-semibold text-gray-400'>Total Stuffs</p>
                </div>
            </div>
        </div>
    );
};

export default MedicalServices;