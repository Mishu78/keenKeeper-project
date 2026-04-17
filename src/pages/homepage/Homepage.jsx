import React from 'react';
import Banner from '../../Components/homepage/Banner';

import YourFriends from '../../Components/homepage/YourFriends';

import Number from '../../Components/homepage/number';


const Homepage = () => {
    return (
        <div>
            <Banner/>
            <Number/>
        
            <YourFriends/>
        </div>
    );
};

export default Homepage;