import React, { useState } from "react";
import { useEffect } from "react";

const Timeline = () => {
  const [activities, setActivities] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("activities")) || [];
    setActivities(data);
  }, []);

  const filteredActivities = activities.filter((item) => {
    if (filter === "All") return true;
    return item.type === filter;
  });

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Timeline</h1>

      
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-500 mb-2">
          Filter timeline
        </label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full md:w-64 p-2.5 bg-white border border-gray-200 rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-500 outline-none cursor-pointer text-gray-700"
        >
          <option value="All">All interactions</option>
          <option value="Call">Call</option>
          <option value="Text">Message</option>
          <option value="Video">Video</option>
        </select>
      </div>


      {filteredActivities.map((item) => (
        <div
          key={item.id}
          className="bg-white shadow border border-gray-200 rounded-xl p-4 flex items-center gap-4"
        >
          <span className="text-2xl">
            {item.type === "Call" && " 📞"}
            {item.type === "Text" && " 💬"} 
            {item.type === "Video" && " 🎥"}
          </span>
          <div>
            <h3 className="font-semibold text-gray-800">
              {item.type}<span className='text-gray-500 text-sm'> with {item.name}</span>
            </h3>
            <p className="text-gray-500 text-sm">{item.date}</p>
          </div>
        </div>
      ))}

     
      {filteredActivities.length === 0 && (
        <p className="text-center text-gray-400 py-10">No activities found for "{filter}"</p>
      )}
    
    </div>
  );
};

export default Timeline;