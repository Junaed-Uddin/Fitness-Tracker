import React, { useEffect, useState } from 'react';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import ExerciseList from '../ExerciseList/ExerciseList';
import './Home.css';

const Home = () => {
    const [equipments, setEquipments] = useState([]);
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setEquipments(data))
            .catch(err => console.log(err));
    }, []);

    const addToCart = selectedEquipment => {
        const newEquipment = [...carts, selectedEquipment];
        setCart(newEquipment);
    }

    return (
        <div>
            <div className='flex flex-wrap sm:flex-nowrap'>
                <div className=''>
                    <h2 className='text-3xl text-sky-500 mt-14 mb-5 ml-5 sm:ml-10 text-start font-bold'>Fitness Tracker</h2>
                    <p className='text-start text-white font-bold mb-10 text-xl ml-5 sm:ml-10'>Choose Self Burning Exercise</p>
                    <div className='exerciseList grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 sm:mr-5 lg:ml-10 ml-3 sm:ml-5 mr-3'>
                        {
                            equipments.map(equipment => <ExerciseList key={equipment.id} equipment={equipment} exerciseTime={() => addToCart(equipment)}></ExerciseList>)
                        }
                    </div>
                </div>
                <div className='exerciseDetails sm:mx-0 rounded-xl sm:rounded-md mx-3 w-full sm:w-[60rem] bg-slate-100 shadow-lg mt-5 sm:mt-0'>
                    <ExerciseDetails carts={carts}></ExerciseDetails>
                </div>
            </div>
        </div>
    );
};

export default Home;