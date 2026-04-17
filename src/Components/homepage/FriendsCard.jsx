import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {
    const {id,name, picture, days_since_contact, tags, status} = friend;

    let statusClass = '';

    if(status === 'Overdue') {
        statusClass = 'bg-red-500 text-white';
    }
    else if(status === 'Almost Due') {
        statusClass = 'bg-orange-500 text-white';
    }
    else if(status === 'On-Track') {
        statusClass = 'bg-green-900 text-white';
    }
    return (
        <Link to={`/friend/${id}`}>
        <div className='rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center text-center transition-all hover:shadow-md'>
            <img className='w-20 h-20 rounded-full object-cover border-2 border-gray-50 shadow-inner' src={picture} alt={name} />
            <h3 className='text-lg font-bold text-gray-800 mb-1'>{name}</h3>
            <p className='text-gray-400 text-sm font-medium mb-3'>{days_since_contact}d ago</p>

            <div className='flex flex-wrap justify-center gap-2'>
                {tags.map((tag, index) => (
                    <span className=' px-3 py-1 bg-green-300 font-bold uppercase rounded-full text-[11px]' key={index}>
                        {tag}
                    </span>
                ))}
            </div>

            <div className={`mt-3 px-3 py-1 rounded-xl text-[11px] font-bold shadow-sm ${statusClass}`}>
                {status}
            </div>
        </div>
        </Link>
    );
};

export default FriendsCard;