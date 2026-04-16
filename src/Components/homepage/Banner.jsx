import React from 'react';
import { FaPlus } from "react-icons/fa";
const Banner = () => {
    return (
        <div className=' flex flex-col justify-center items-center text-center pt-20'>
            <h2 className='font-bold text-4xl pb-3'>Friends to Keep close in your life</h2>
            <p className='text-xl text-gray-500 pb-5'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
relationships that matter most.</p>
<div className='items-center flex'>
    <button className='p-4 rounded-sm flex items-center gap-2 bg-green-700 text-white font-bold'><FaPlus />Add a Friend</button>
</div>
        </div>
    );
};

export default Banner;