import React from 'react';
import { CiHome } from "react-icons/ci";
import { RiTimeLine } from "react-icons/ri";
import { ImStatsDots } from "react-icons/im";        
import { Link, NavLink } from 'react-router';
const NavBar = () => {
    return (
        <nav className=''>
          <div className="navbar bg-base-100 shadow-sm flex justify-between gap-4 items-center container mx-auto py-[8px]">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src="/src/assets/logo.png" alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to={'/'} className={({isActive})=>`text-gray-600 font-semibold ${isActive ? "bg-green-700 text-white" : "bg-white"}`}><CiHome />Home</NavLink></li>
      <li><NavLink to={'/timeline'} className={({isActive})=>`text-gray-600 font-semibold ${isActive ? "bg-green-700 text-white" : "bg-white"}`}><RiTimeLine />Timeline</NavLink>
      </li>
       <li><NavLink to={'/stats'} className={({isActive})=>`text-gray-600 font-semibold ${isActive ? "bg-green-700 text-white" : "bg-white"}`}><ImStatsDots />Stats</NavLink>
      </li>
    </ul>
  </div>
</div>
        </nav>
    );
};

export default NavBar;