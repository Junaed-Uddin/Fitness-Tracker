import React from 'react';
import './ExerciseList.css';

const ExerciseList = ({equipment, exerciseTime}) => {
    const { name, image, age, about, timeReq } = equipment;
    return (
        <div>
            <div className="card h-full card-compact bg-slate-700 drop-shadow-2xl">
                <figure className='px-3 pt-3'><img className='w-full h-72 object-cover rounded-lg' src={image} alt="equipments" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white text-xl">{name}</h2>
                    <p className='text-start mt-1 text-slate-400'>{about}</p>
                    <p className='text-start text-base font-bold mt-3 text-white'>For Age: {age}</p>
                    <p className='text-start mb-4 text-base font-bold text-white'>Time Required: {timeReq}s</p>
                    <div className="card-actions w-full">
                        <button onClick={exerciseTime} className="btn btn-primary w-full text-white">Add to List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExerciseList;