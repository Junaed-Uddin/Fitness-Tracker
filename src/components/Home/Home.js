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
                <div className='mb-10'>
                    <h2 className='text-3xl text-sky-500 mt-14 mb-10 ml-10 text-start font-bold'>Fitness Tracker</h2>
                    <div className='exerciseList grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mx-10'>
                        {
                            equipments.map(equipment => <ExerciseList key={equipment.id} equipment={equipment} exerciseTime={() => addToCart(equipment)}></ExerciseList>)
                        }
                    </div>
                </div>
                <div className='exerciseDetails w-[40rem] bg-slate-100 shadow-lg'>
                    <ExerciseDetails carts={carts}></ExerciseDetails>
                </div>
            </div>
        </div>
    );
};

export default Home;