import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { Allsongshow } from '../Hook/Allsongshow';
import Loading from '../Loading/Loading';
import Delectsonglink from '../Watch/Delectsonglink';

const Adminhome = () => {
    const [allsong,isLoading,refetch]=Allsongshow();
    const [songlingid,setSonglink]=useState("");
    const { register,formState: { errors }, handleSubmit } = useForm();
    const onSubmit = (data,e) =>
    {
        fetch(`https://thesis-node-js.vercel.app/songlink`,
        {
            method:"POST",
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${localStorage.getItem('Thankutoken')}`
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            e.target.reset();
            refetch();
            toast.success("Song link Added")
             })
    }
    return (
        <div className="p-2 flex flex-col gap-5 mb-10" >
            <form className="flex flex-col w-full max-w-xs gap-3 " onSubmit={handleSubmit(onSubmit)}>
                <h1 className="text-center font-semibold"><span className="text-red-400 text-xl">Youtube</span> Song Add</h1>
                <input type="url" className="input input-bordered input-error w-full max-w-xs" placeholder="Enter the url...." {...register("linkUrl", { required: "youtube song link is required" })}></input>
                <button className="btn btn-active btn-ghost">Submit</button>
                {errors.linkUrl && <p role="alert" className="text-red-400 font-medium text-xs ml-20">{errors.linkUrl?.message}</p>}
            </form>
            <Toaster
            className="z-50"
        position="bottom-right"
        reverseOrder={false}
        />
        <div className="">
        {
                isLoading&&<Loading></Loading>
        }
        <div className="overflow-x-auto">
  <table className="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th></th>
        <th>Song Link</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
   
        {
            allsong.map((x,i)=>
                <tr>
                <th>{i+1}</th>
                <td> <iframe className="w-40 h-20 shadow-lg rounded-md" src={x.linkUrl}></iframe></td>
                <td className="link text-blue-500">{x.linkUrl}</td>
                <td><label htmlFor="delect_songlink" onClick={()=>setSonglink(x._id)}><FontAwesomeIcon icon={faTrash} className="text-lg text-red-500 cursor-pointer" ></FontAwesomeIcon></label></td>
              </tr>
                )
        }
     
      
    </tbody>
  </table>
</div>
        </div>
        <Delectsonglink
        songlingid={songlingid}
        refetch={refetch}
        >

        </Delectsonglink>
        </div>
    );
};

export default Adminhome;