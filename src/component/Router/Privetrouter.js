import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import Loading from '../Loading/Loading';
const Privetrouter = ({children}) => {
    const {user,loading,signoutall,setLoading}=useContext(AuthContext);
    const location=useLocation();
    console.log(loading)
    if(loading)
    {
        return <>
        <Loading></Loading>
        
        </>;
    }
    else if(!user && localStorage.getItem('Thankutoken')===null)
    {
        setLoading(false);
        signoutall();
        return <Navigate to="/" replace></Navigate>
    }
   
    return children;
};

export default Privetrouter;