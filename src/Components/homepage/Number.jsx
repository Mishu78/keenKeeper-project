import React from 'react';

const Number = () => {
  return (
    <div className="max-w-5xl mx-auto p-10">
      
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        
      
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-2">10</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Total Friends</p>
          </div>
        </div>

        
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-2">3</h2>
            <p className="text-gray-400 text-xs sm:text-sm">On Track</p>
          </div>
        </div>

        
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-2">6</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Need Attention</p>
          </div>
        </div>

    
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body items-center text-center">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl pb-2">12</h2>
            <p className="text-gray-400 text-xs sm:text-sm">Interactions this month</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Number;