import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='mt-20 mb-10 mx-3 sm:mx-10'>
            <h2 className='my-4 text-3xl text-white font-bold'>Questions</h2>
            <div className="collapse mt-5 collapse-arrow rounded-lg w-full sm:w-3/4 sm:mx-auto">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-white peer-checked:bg-base-300 peer-checked:text-white">
                    <p className='text-xl'>How does react Work?</p>
                </div>
                <div className="collapse-content text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                    <p className='pt-4'>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. React reads these objects and uses them to create HTML elements on the virtual DOM, after which it gets synced with the real DOM. So we'll have trees of objects on the virtual DOM and trees of objects on the real DOM. React automatically updates the associated DOM element when we change data on a React element.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow rounded-lg mt-3 w-full sm:w-3/4 sm:mx-auto">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-white peer-checked:bg-base-300 peer-checked:text-white">
                    <p className='text-xl'>What is the difference between props and state?</p>
                </div>
                <div className="collapse-content text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                    <p className='pt-4'>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow rounded-lg mt-3 w-full sm:w-3/4 sm:mx-auto">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-primary text-white peer-checked:bg-base-300 peer-checked:text-white">
                    <p className='text-xl'>In addition to loading data, in what cases is useEffect used?</p>
                </div>
                <div className="collapse-content text-primary-content peer-checked:bg-white peer-checked:text-secondary-content">
                    <ol className='pt-4 text-start list-decimal ml-6'>
                        <li>Running once on mount: fetch API data.</li>
                        <li>Running on state change: validating input field.</li>
                        <li>Running on state change: live filtering.</li>
                        <li>Running on state change: trigger animation on new array value.</li>
                        <li>Running on props change: update paragraph list on fetched API data update.</li>
                        <li>Running on props change: updating fetched API data to get BTC updated price</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Questions;