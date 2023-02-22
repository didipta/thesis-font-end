import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../commonpage/Footer';
import Header from '../commonpage/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;