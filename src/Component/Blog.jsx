import React from 'react';
import { LuCalendarHeart } from 'react-icons/lu';

const Blog = ({blog}) => {
    const {question, answer, updated} = blog;
    return (
        <div className='bg-white p-8 rounded-2xl mb-8 space-y-4'>
            <h1 className='text-3xl font-bold border-b-2 border-dashed border-gray-200 pb-4'>{question}</h1>
            <p className='border-b-2 border-dashed border-gray-200 pb-4 text-gray-500'><span className='text-[#09982F]'>Answer:</span> <br /> <span>{answer}</span></p>
            <p className='text-lg text-gray-400 font-medium flex items-center gap-1'>
            <LuCalendarHeart size={20}/>Added at {updated}</p>
        </div>
    );
};

export default Blog;