import React from 'react';
import { useState } from 'react';
import { Allpostshow } from '../Hook/Allpostshow';
import Loading from '../Loading/Loading';
import Readtext from './Modeladmin/Readtext';
import Showcomment from './Modeladmin/Showcomment';

const Allpost = () => {
    const [fulltext,setFulltext]=useState("");
    const [allcomment,setAllcomment]=useState([]);
    const [allpost,refetch,isLoading]=Allpostshow("");
    return (
        <div>
            {
                isLoading&&<Loading></Loading>
            }
           <div className="overflow-x-auto w-full">
  <table className="table w-full">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>User</th>
        <th>Posttext</th>
        <th>Totallike</th>
        <th>Totalcomment</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            allpost.map(x=>
                <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>
        <div>
              <div className="font-bold">{x.username}</div>
              <div className="text-xs opacity-50">{x.useremail}</div>
            </div>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                {x.postimg!==""?<img src={x.postimg} alt="Avatar Tailwind CSS Component" />:<p className="text-xs font-semibold mt-4">No img</p>}
              </div>
            </div>
            <div >
              {x.posttext!==""? <label htmlFor="read-text" className="text-sm link font-semibold text-blue-600" onClick={()=>setFulltext(x.posttext)}>read text</label>:<p className="text-xs font-semibold mt-4">No Text</p>}
            </div>
          </div>
        </td>
        <td>
          <span className="badge badge-ghost badge-sm">{x.likeuser.length}</span>
        </td>
        <td>
        <span className="badge badge-ghost badge-sm">{x.Comment.length}{x.Comment.length!==0&&<label htmlFor="All-comment" className="text-sm link  font-medium ml-2 text-blue-600" onClick={()=>setAllcomment(x.Comment)}> sce all</label>}</span>
        </td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
                )
        }
      
    </tbody>
  </table>
</div> 
<Readtext
fulltext={fulltext}
>

</Readtext>
<Showcomment
allcomment={allcomment}
>

</Showcomment>
        </div>
    );
};

export default Allpost;