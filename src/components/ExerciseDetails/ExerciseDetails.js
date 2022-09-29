import React, { useEffect, useState } from 'react';
import './ExerciseDetails.css';
import user from '../../user.jpg';
import Swal from 'sweetalert2'

const ExerciseDetails = ({ carts }) => {
    const [breakTime, setBreakTime] = useState(0);
    const totalTime = (previous, current) => previous + current.timeReq;
    const time = carts.reduce(totalTime, 0);

    const timeHandler = (interval) => {
        setBreakTime(interval);
        setStoredTime(interval);
    }

    useEffect(() => {
        getStoredTime();
    }, [breakTime]);

    const getStoredTime = () => {
        const previousData = localStorage.getItem('break-time');
        const previousDataParse = JSON.parse(previousData);
        if (previousDataParse) {
            localStorage.setItem('break-time', JSON.stringify(previousDataParse));
            setBreakTime(previousDataParse);
        }
    }

    const setStoredTime = (interval) => {
        localStorage.setItem('break-time', JSON.stringify(interval));
    }

    const activity = () => {
        Swal.fire(
            'Good job!',
            'Activity Completed!',
            'success'
        )
    }


    return (
        <div className='sticky top-10 card card-compact'>
            <div className='flex mt-5 sm:mt-0'>
                <img className='rounded full w-16 ml-2 sm:ml-5' src={user} alt="" />
                <div className='text-start ml-3 text-black'>
                    <p className='text-xl sm:text-2xl font-bold'>Junaed Uddin</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-between text-black bg-slate-200 mx-2 sm:mx-5 rounded-md mt-10 py-3'>
                <div className='ml-3'>
                    <p className='text-xl sm:text-2xl font-bold'>67kg</p>
                    <p className='mt-1 text-base font-bold text-slate-500'>Weight</p>
                </div>
                <div>
                    <p className='text-xl sm:text-2xl font-bold'>5.3</p>
                    <p className='mt-1 text-base font-bold text-slate-500'>Height</p>
                </div>
                <div>
                    <p className='mr-3 text-xl sm:text-2xl font-bold'>26yrs</p>
                    <p className='mt-1 text-base font-bold text-slate-500'>Age</p>
                </div>
            </div>
            <h2 className='text-xl text-black font-bold mt-10 sm:text-start ml-3 sm:ml-5'>Add an Interval</h2>
            <div className="bg-slate-200 rounded-lg py-3 mt-5 mx-2 sm:mx-5">
                <button onClick={() => timeHandler(10)} className="btn btn-circle text-white mr-3 btn-active">10s</button>
                <button onClick={() => timeHandler(20)} className="btn btn-circle text-white mr-3">20s</button>
                <button onClick={() => timeHandler(30)} className="btn btn-circle text-white mr-3">30s</button>
                <button onClick={() => timeHandler(40)} className="btn btn-circle text-white mr-3">40s</button>
                <button onClick={() => timeHandler(50)} className="btn btn-circle text-white mr-3">50s</button>
            </div>
            <div>
                <h2 className='text-xl text-black sm:text-start ml-3 sm:ml-5 mt-8 font-bold'>Exercise Details</h2>
                <div className='text-start mx-2 sm:mx-5 mt-5'>
                    <div className='flex justify-between bg-slate-200 rounded-lg pl-3'>
                        <span className='py-4 mr-4 text-black text-base font-bold '>Exercise Time </span><span className='bg-slate-200 rounded-lg py-4 text-black font-bold mr-4'>{time} sec</span>
                    </div>
                    <div className='flex justify-between mt-3 bg-slate-200 rounded-lg pl-3'>
                        <span className='py-4 mr-4 text-black text-base font-bold '>Interval Time </span><span className='bg-slate-200 rounded-lg py-4 text-black font-bold mr-4'> {breakTime} sec</span>
                    </div>
                </div>
                <div className='card-actions w-full'>
                    <button onClick={activity} className='btn my-5 w-9/12 mx-auto text-white'>Activity Completed</button>
                </div>
            </div>
        </div>
    );
};

export default ExerciseDetails;