import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Loading from '../Loading/Loading';



const Privetrouter = ({children}) => {
    const {user,loading,signoutall}=useContext(AuthContext);
    const location=useLocation();
    if(loading)
    {
        return <>
        <Loading></Loading>
        
        </>;
    }
    if(!user)
    {
        signoutall();
        return <Navigate to="/" state={{from:location}} replace></Navigate>
    }
    return children;
};

export default Privetrouter;