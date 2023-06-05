import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHome, faFlag,faUserGroup,faCalendarWeek,faGear,faVideo,faRightToBracket,faPlane,faScaleBalanced,faTheaterMasks} from '@fortawesome/free-solid-svg-icons'
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Context/Authprovider';
import { Userdetails } from '../Hook/Userdetails';

const Navbar = () => {
    const { signoutall,user}=useContext(AuthContext);
    const userdetails=Userdetails(user);
    return (
        <div>
            <div className="flex flex-col justify-center gap-7 p-3 mt-5 font-medium">
                <li>
                    <NavLink className={({isActive})=>isActive? "text-pink-500":undefined} to="/home"><FontAwesomeIcon icon={faHome} className= "text-xl pr-4"></FontAwesomeIcon> <span className=" text-slate-700 pl-2">Home</span></NavLink>
                </li>
                <li >
                    <NavLink to="/home/profile" className="flex items-center">
                    <div class="avatar online pr-2">
                    <div class="w-8 rounded-full">
                        <img src={userdetails.image} alt="" />
                    </div>
                    </div> <span className="pl-2">{userdetails.name}</span></NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=>isActive? "text-pink-500":undefined} to="/page"><FontAwesomeIcon icon={faFlag} className=" text-xl pr-5"></FontAwesomeIcon><span className=" text-slate-700 pl-2">Page</span> </NavLink>
                </li>
                <li>
                    <a className=""><FontAwesomeIcon icon={faUserGroup} className="text-slate-600  text-xl pr-2"></FontAwesomeIcon> <span className="pl-2">Groups</span></a>
                </li>
                <li>
                    <a className=""><FontAwesomeIcon icon={faCalendarWeek} className="text-slate-600  text-xl pr-2"></FontAwesomeIcon>  <span className="pl-4">Events</span></a>
                </li>
                <li>
                    <NavLink to="/home/legaleaid" className={({isActive})=>isActive? "text-pink-500":undefined}><FontAwesomeIcon icon={faTheaterMasks} className="text-xl pr-2"></FontAwesomeIcon>  <span className=" text-slate-700 pl-2">Solution</span></NavLink>
                </li>
                <li className="lg:hidden">
                    <NavLink to="/home/mindfresh" className={({isActive})=>isActive? "text-pink-500":undefined}><FontAwesomeIcon icon={faPlane} className="  text-xl pr-2"></FontAwesomeIcon>  <span className="text-slate-700 pl-3">Mind Fresh</span></NavLink>
                </li>
                <li>
                    <NavLink to="/home/watch" className={({isActive})=>isActive? "text-pink-500":undefined}><FontAwesomeIcon icon={faVideo} className=" text-xl pr-2"></FontAwesomeIcon>  <span className=" text-slate-700 pl-2">Watchs</span></NavLink>
                </li>
            
                <li>
                <NavLink className={({isActive})=>isActive? "text-pink-500":undefined}  to="/home/otherinfo"><FontAwesomeIcon icon={faGear} className="text-xl pr-2"></FontAwesomeIcon>  <span className="text-slate-700 pl-2">Setting</span></NavLink>
                </li>
                
                <li>
                    <Link to="/" onClick={signoutall} className="" ><FontAwesomeIcon icon={faRightToBracket} className="text-slate-600  text-xl pr-2"></FontAwesomeIcon>  <span className="pl-2">Logout</span></Link>
                </li>
            
            </div>
        </div>
    );
};

export default Navbar;