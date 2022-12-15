import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AdminLayout = () => {
    return (
        <div className="h-screen overflow-hidden">
        <div className="drawer-content p-1 ">
            
            <label htmlFor="my-drawer-2" className="lg:hidden pl-3"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon></label>
            <Link to="/home" className="btn btn-ghost normal-case text-xl pr-2"><span className="text-red-500">THA</span>NKU</Link>
        </div> 
        <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content p-5 h-[80vh] overflow-x-auto">
            <Outlet></Outlet>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
            <ul className="menu p-4 w-80 text-base-content">

            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
            </ul>
        
        </div>
        </div>
        </div>
    );
};

export default AdminLayout;