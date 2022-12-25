import React from 'react';
import { Outlet } from 'react-router-dom';
import Searchbar from '../commonpage/Searchbar';
import Beautifulplease from './Beautifulplease';
import Navbar from './Navbar';
import Postpart from './Postpart';

const Home = () => {
  
    return (
        <div>
            <div className="flex justify-between gap-8 p-1 lg:p-3 h-screen overflow-x-auto">
                <div className="bg-white hidden lg:block w-3/12">
                   <Navbar></Navbar>
                </div>
                <div className="bg-white w-full lg:w-7/12 overflow-x-auto lg:shadow-sm shadow-slate-400 lg:p-5 p-0">
                
                  <Outlet></Outlet>
                    </div>
                <div className="bg-white hidden lg:block w-3/12 overflow-x-auto">
                     <Beautifulplease></Beautifulplease>
                    </div>
                
            </div>
            <Searchbar></Searchbar>
        </div>
    );
};

export default Home;