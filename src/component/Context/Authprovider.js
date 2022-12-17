import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import {createUserWithEmailAndPassword, deleteUser, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import { app } from '../Firebase/Firebage.config';
import { Userdetails } from '../Hook/Userdetails';
export const AuthContext=createContext();
const Authprovider = ({children}) => {
    const auth=getAuth(app);
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const [userrole,setUserrole]=useState("");
    const googlelogin=(provider)=>
    {
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
    const createuser=(email,password)=>
    {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const deleteuser=()=>
    {
        return deleteUser(auth.currentUser);
    }
    const siginwithemailpassword=(email,password)=>
    {
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const upadateuserprofile=(profile)=>
    {
        return updateProfile(auth.currentUser,profile);
    }
    const forgetpass=(email)=>
    {
        return sendPasswordResetEmail(auth, email);
    }
    const EmailVerification=()=>
    {
      sendEmailVerification(auth.currentUser)
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
  const userolheadel=(role)=>
  {
    fetch(`https://thesis-node-js.vercel.app/users/${role?.email}`)
    .then(res => res.json())
    .then(data => {
        setUserrole(data.type)
    })
   
  }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,(currentUser)=>
          {
              userolheadel(currentUser);
              setUser(currentUser);
              setLoading(false);
         
          });
          return ()=>
          {
              unsubscribe();
          }
  
      },[user])
      

    const authInfo={
        user,
        googlelogin,
        signoutall,
        loading,
        setLoading,
        createuser,
        upadateuserprofile,
        siginwithemailpassword,
        EmailVerification,
        userrole,userolheadel
        }
    return (
         <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default Authprovider;