import React, { useState } from 'react';
import { useEffect } from 'react';

const Timeline = () => {
    const [activities,setActivities]=useState([]);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("activities"))||[];
        setActivities(data);
    },[]);
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-4 bg-gray-100">
            {activities.map(item=>(
  <div key={item.id} className=" bg-white shadow border border-gray-200 rounded-xl p-4 flex items-center gap-4">
    <span className="text-2xl">
        {
            item.type === "Call" && " 📞"
        }
        {
            item.type === "Text" && " 💬"
        }
        {
            item.type === "Video" && " 🎥"
        }
    </span>
    <div>
        <h3 className="font-semibold">
            {item.type} with {item.name}
        </h3>
        <p className="text-gray-500 text-sm">{item.date}</p>
    </div>
    </div>
            ))}

        </div>
    );
};

export default Timeline;