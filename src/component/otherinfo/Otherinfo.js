import React from 'react';

const Otherinfo = () => {
    return (
        <div className="p-3 flex flex-col gap-2">
            <h1 className=" text-xl text-rose-500 font-bold">Add other information</h1>
            <p className="text-sm font-semibold">Are you agree?</p>
            <hr className="h-1 w-24 bg-pink-300"></hr>
            <div>
                <form className="flex flex-col gap-2 items-center mt-2">
                <div className="w-full max-w-xs">
                <label class="label font-bold uppercase">phone number:</label>
                <input type="text" placeholder="Enter your phone number" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className="w-full max-w-xs">
                <label class="label font-bold uppercase">address:</label>
                <input type="text" placeholder="Enter your address" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
               
                <div className="w-full max-w-xs">
                <label class="label font-bold uppercase">gender:</label>
                <input type="text" placeholder="Enter your gender" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                
                <div className="w-full max-w-xs">
                <label class="label font-bold uppercase">religion:</label>
                <input type="text" placeholder="Enter your religion" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                
                <div className="w-full max-w-xs">
                <label class="label font-bold uppercase">nickname:</label>
                <input type="text" placeholder="Enter your nickname" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                
                <div className="w-full max-w-xs">
                <label class="label font-bold uppercase">hobby:</label>
                <input type="text" placeholder="Enter your hobby" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                
                <div className="w-full max-w-xs">
                <label class="label font-bold uppercase">sort bio:</label>
                <textarea type="text" placeholder="Enter the sort bio" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                
                
                <button className="btn bg-pink-600 border-none text-white">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Otherinfo;