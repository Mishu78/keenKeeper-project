import React, { useEffect, useState } from 'react';
import FriendsCard from './FriendsCard';

const FriendsCards = () => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        fetch('/friends.json')
            .then(res => res.json())
            .then(data => {
                setFriends(data)
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
      <div className=' flex justify-center mt-20'>
        <span className="loading loading-bars loading-xl"></span>
      </div>
        )
        
    }

    return (
        <div className='max-w-5xl mx-auto p-10'>
            <h2 className='text-2xl font-bold mb-6 text-gray-800'>Your Friends</h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                {friends.map(friend => <FriendsCard key={friend.id} friend={friend}></FriendsCard>)}
            </div>
        </div>
    );
};

export default FriendsCards;