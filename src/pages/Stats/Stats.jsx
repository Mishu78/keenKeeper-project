import React, { useEffect, useState } from 'react';
import { Legend, Pie, PieChart, Tooltip,ResponsiveContainer } from 'recharts';


const Stats = () => {
    const [data,setData]=useState([]);
    const loadData=()=>{
        const activities=JSON.parse(localStorage.getItem("activities")) || [];
        const counts ={Call: 0,Text:0,Video:0};
        activities.forEach(item =>{
            if(counts[item.type]!==undefined){
                counts[item.type]++;
            }
        })
    
    setData ([
  { name: 'Call', value: counts.Call, fill: '#7e35e1' },
  { name: 'Text', value: counts.Text, fill: '#244D3F' },
  { name: 'Video', value: counts.Video, fill: '#0eb179' },
  
]);
    };

     useEffect(() => {
    loadData();

    window.addEventListener("activityUpdated", loadData);

    return () => {
      window.removeEventListener("activityUpdated", loadData);
    };
  }, []);
    return (
        <div className="bg-gray-100 pb-10 px-4">
            <h2 className='text-2xl md:text-4xl font-bold pt-6'>Friendship Analystics</h2>
            <div className=" my-10 bg-white max-w-3xl mx-auto p-6 md:p-10 rounded-xl shadow ">
<h2 className="text-lg mde:text-xl font-bold text-green-600 mb-6 text-start">By Interaction Type</h2>
            <div className='w-full h-[300px] md:h-[400px]'>
               <ResponsiveContainer>
<PieChart>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={100}
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="5%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={2}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend/>
     <Tooltip/>
    </PieChart>
    </ResponsiveContainer>
        </div>
            </div>
 
            </div>
            
    );
};

export default Stats;