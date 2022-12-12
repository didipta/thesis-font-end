import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { app } from '../Firebase/Firebage.config';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const auth=getAuth(app);
    const [user,setUser]=useState(null);
    
    const [loading,setLoading]=useState(true);

   
    const googlelogin=(provider)=>
    {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }

    const signoutall=()=>
    {
        setLoading(true);
        signOut(auth)
        .then(res => {
            setUser(null);
            localStorage.removeItem('Thankutoken');
        })
        .catch(error=>{
            setUser(null);
        })
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>
          {
            
              setUser(currentUser);
              setLoading(false);
          });
          return ()=>
          {
              unsubscribe();
          }
  
      },[])


    const authInfo={
        user,
        googlelogin,
        signoutall,
        loading,
        setLoading,
        }
    return (
         <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default Authprovider;