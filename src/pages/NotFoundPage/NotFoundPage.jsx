import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
         <h1 className='text-6xl font-bold text-red-600'>404</h1>
         <p className=' text-xl font-bold text-gray-500 mt-2'>oops! Page not found</p>   
        <p className=' text-xl font-bold text-gray-500 mt-2'>The page you are looking for does not exist.</p>
        <a href="/" className='mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'>Go Back Home</a>   
        </div>
    );
};

export default NotFoundPage;