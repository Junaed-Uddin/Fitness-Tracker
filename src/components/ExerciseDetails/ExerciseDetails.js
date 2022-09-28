import React, { useState } from 'react';
import './ExerciseDetails.css';

const ExerciseDetails = ({ carts }) => {
    const [breakTime, setBreakTime] = useState(0);
    const totalTime = (previous, current) => previous + current.timeReq;
    const time = carts.reduce(totalTime, 0);

    const timeHandler = (interval) => {
        setBreakTime(interval);
    }
    
    return (
        <div className='sticky top-10'>
            <h2 className='text-2xl text-black font-bold'>Add an Interval</h2>
            <div className="bg-slate-200 rounded-lg py-3 mt-10 mx-5">
                <button onClick={()=>timeHandler(10)} className="btn btn-circle text-white mr-3 btn-active">10s</button>
                <button onClick={()=>timeHandler(20)} className="btn btn-circle text-white mr-3">20s</button>
                <button onClick={()=>timeHandler(30)} className="btn btn-circle text-white mr-3">30s</button>
                <button onClick={()=>timeHandler(40)} className="btn btn-circle text-white mr-3">40s</button>
                <button onClick={()=>timeHandler(50)} className="btn btn-circle text-white mr-3">50s</button>
            </div>
            <div>
                <h2 className='text-xl text-black text-start ml-5 mt-5 font-bold'>Exercise Details</h2>
                <div className='text-start mx-5 mt-5'>
                    <div className='flex justify-between bg-slate-200 rounded-lg pl-3'>
                        <span className='py-4 mr-4 text-black text-base font-bold '>Exercise Time </span><span className='bg-slate-200 rounded-lg py-4 text-black font-bold mr-4'>{time} sec</span>
                    </div>
                    <div className='flex justify-between mt-3 bg-slate-200 rounded-lg pl-3'>
                        <span className='py-4 mr-4 text-black text-base font-bold '>Interval Time </span><span className='bg-slate-200 rounded-lg py-4 text-black font-bold mr-4'>{breakTime} sec</span>
                    </div>
                </div>
                <div className='card-actions w-full'>
                    <button className='btn mt-5 w-[21rem] mx-5 text-white'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;