import React from 'react';

const Number = () => {
    return (
        <div className='flex  justify-center items-center text-center pt-10'>
            <div className="card bg-base-100 shadow-sm mr-5">
  <div className="card-body">
    <h2 className="text-center  font-bold text-4xl pb-3">10</h2>
    <p className='text-gray-400'>Total Friends</p>
  </div>
</div>  

 <div className="card bg-base-100 shadow-sm mr-5">
  <div className="card-body">
    <h2 className="text-center font-bold text-4xl pb-3">3</h2>
    <p className='text-gray-400'>On Track</p>
  </div>
</div>  

 <div className=" card bg-base-100 shadow-sm mr-5">
  <div className="card-body">
    <h2 className="text-center font-bold text-4xl pb-3">6</h2>
    <p className='text-gray-400'>Need Attention</p>
  </div>
</div>  

 <div className=" card bg-base-100 shadow-sm">
  <div className="card-body">
    <h2 className="text-center font-bold text-4xl pb-3">12</h2>
    <p className='text-gray-400'>Interactions this month</p>
  </div>
</div>  
        </div>
    );
};

export default Number;