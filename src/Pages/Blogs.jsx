import React from 'react';
import { useLoaderData } from 'react-router';
import Blog from '../Component/Blog';

const Blogs = () => {
    const data = useLoaderData();
    return (
        <div className='w-10/12 mx-auto my-8'>
            {
                data.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
            }
        </div>
    );
};

export default Blogs;