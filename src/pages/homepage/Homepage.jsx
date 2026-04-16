import React from 'react';
import Banner from '../../Components/homepage/Banner';
import Stats from '../../Components/homepage/Stats';
import YourFriends from '../../Components/homepage/YourFriends';

const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Stats/>
            <YourFriends/>
        </div>
    );
};

export default Homepage;