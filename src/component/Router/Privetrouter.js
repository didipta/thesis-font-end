import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import { Roleofuser } from '../Hook/Roleofuser';
import Loading from '../Loading/Loading';
const Privetrouter = ({children}) => {
    const {user,loading,signoutall,setLoading}=useContext(AuthContext);
    const [userdetails,roleloading]=Roleofuser(user?.email);
    const location=useLocation();
    console.log(userdetails);
    if(loading || roleloading)
    {
        return <>
        
        <Loading></Loading>
        
        </>;
    }
   if(userdetails!=="user" || !user || localStorage.getItem('Thankutoken')===null)
    {
        setLoading(false);
        signoutall();
        return <Navigate to="/" replace></Navigate>
    }
   
    return children;
};

export default Privetrouter;