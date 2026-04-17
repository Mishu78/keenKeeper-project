import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch('/friends.json')
      .then(res => res.json())
      .then(data => {
        const singleFriend = data.find(friend => friend.id == id);
        setFriend(singleFriend);
      });
  }, [id]);

  if (!friend) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  // Status color
  let statusClass = "";
  if (friend.status === "Overdue") {
    statusClass = "bg-red-500 text-white";
  } else if (friend.status === "Almost Due") {
    statusClass = "bg-orange-500 text-white";
  } else {
    statusClass = "bg-green-700 text-white";
  }

  const handleActivity=(type)=>{
    const newActivity={
      id: Date.now(),
      type:type,
      name:friend.name,
      date:new Date().toLocaleDateString(),
    };
    const existing=JSON.parse(localStorage.getItem("activities"))|| [];
    const updated=[newActivity, ...existing];
    localStorage.setItem("activities",JSON.stringify(updated));

    toast.success(`${type} with ${friend.name}`,{
      icon: type === "Call" ? "📞" : type === "Text" ? "💬" : "🎥",
      style:{
        borderRadius:"10px",
        background:  'white',
        color: 'black',
        fontWeight:"bold",
      }
    })
    window.dispatchEvent(new Event("activityUpdated"));
  };
  
  return (
   <> 
   <ToastContainer/>
    <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6 bg-gray-100">
     
      <div className="bg-white shadow rounded-xl p-6 text-center">

        <img
          src={friend.picture}
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />

        <h2 className="text-xl font-bold">{friend.name}</h2>

        <div className={`mt-2 inline-block px-3 py-1 rounded-full text-xs font-bold ${statusClass}`}>
          {friend.status}
        </div>
        
         <div className="mt-3 flex justify-center gap-2 flex-wrap">
          {friend.tags.map((tag, i) => (
            <span key={i} className="bg-green-200 px-3 py-1 rounded-full text-xs font-bold uppercase">
              {tag}
            </span>
          ))}
        </div>

         <p className="mt-4 text-gray-500 text-sm italic">
          "{friend.bio}"
        </p>

        <p className="text-gray-500 text-sm mt-2">{friend.email}</p>

      
       

      
        <div className="mt-6 space-y-3">
          <button className="w-full border border-gray-200 shadow py-2 rounded hover:bg-gray-100">
            ⏰ Snooze 2 Weeks
          </button>
          <button className="w-full border border-gray-200 shadow py-2 rounded hover:bg-gray-100">
            📦 Archive
          </button>
          <button className="w-full border border-gray-200 shadow py-2 rounded text-red-500 hover:bg-red-50">
            🗑️ Delete
          </button>
        </div>

      </div>

      
      <div className="md:col-span-2 space-y-5">

        
        <div className="grid grid-cols-3 gap-4 ">

          <div className="bg-white p-8 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold">{friend.days_since_contact}</h3>
            <p className="text-gray-500 text-sm">Days Since Contact</p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h3 className="text-2xl font-bold">{friend.goal}</h3>
            <p className="text-gray-500 text-sm">Goal (Days)</p>
          </div>

          <div className="bg-white p-10 rounded-xl shadow text-center">
            <h3 className="text-lg font-bold">{friend.next_due_date}</h3>
            <p className="text-gray-500 text-sm">Next Due</p>
          </div>

        </div>

      
        <div className="bg-white p-12 rounded-xl shadow flex justify-between items-center">
          <div>
            <h3 className="font-semibold pb-3">Relationship Goal</h3>
            <p className="text-gray-500 text-sm">
              Connect every {friend.goal} days
            </p>
          </div>

          <button className="border px-4 py-1 rounded hover:bg-gray-100">
            Edit
          </button>
        </div>

        
        <div className="bg-white p-10 rounded-xl shadow">
          <h3 className="font-semibold mb-4">Quick Check-In</h3>

          <div className="grid grid-cols-3 gap-4">

            <button onClick={()=>handleActivity("Call")} className="border p-8 rounded-xl hover:bg-gray-100">
              📞 <br /> Call
            </button>

            <button onClick={()=>handleActivity("Text")} className="border p-8 rounded-xl hover:bg-gray-100">
              💬 <br /> Text
            </button>

            <button onClick={()=>handleActivity("Video")} className="border p-8 rounded-xl hover:bg-gray-100">
              🎥 <br /> Video
            </button>

          </div>
        </div>

      </div>

    </div>
    </>
  );
};

export default FriendDetails;