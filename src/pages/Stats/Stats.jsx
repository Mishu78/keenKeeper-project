import React, { useEffect, useState } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


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
        <div className="bg-gray-100 pb-10">
            <h2 className='text-5xl font-bold'>Friendship Analystics</h2>
            <div className=" my-10 bg-white m-50 p-20 ">
<h2 className="text-xl font-bold text-green-600">By Interaction Type</h2>
            <div className='flex justify-center'>
               
<PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />
     <Legend/>
     <Tooltip/>
    </PieChart>
        </div>
            </div>
 
            </div>
            
    );
};

export default Stats;