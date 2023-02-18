import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Navbar from '../Homepage/Navbar';
import img from "../img/chat.png"
const Header = () => {
  const {user}=useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    {
      user&&
      <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64">
        <Navbar></Navbar>
      </ul>
    </div>
    }
    <Link to="/home" className="btn btn-ghost normal-case text-xl"><span className="text-red-500">THA</span>NKU</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  {
      user&&
      <div className="navbar-end">

      <label htmlFor="search-bar" className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </label>
        <button class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span class="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>

        <Link to="/home/chat"><button class="btn btn-ghost btn-circle bg-white shadow-lg shadow-slate-400 fixed bottom-3 right-3">
          <div class="indicator">
           <img src={img} alt="" className='w-10 h-10'></img>
            <span class="badge badge-xs bg-pink-500 border-none text-white indicator-item">0</span>
          </div>
        </button></Link>
      </div>
  }

</div>
        </div>
    );
};

export default Header;