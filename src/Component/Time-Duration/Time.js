import React, { useState } from 'react';
import './Time.css'
import BreakTime from '../BreakTime/BreakTime';

const Time = (props) => {
    const {time} = props;
    //console.log(time);
     let exerciseTime = 0;
    for (const activity of time){
        exerciseTime = exerciseTime +  activity.requiredTime;
    }

    const [breakTime, setBreakTime] = useState(0);

    const handleClick1 = () => {
        setBreakTime(10);
    }
    const handleClick2 = () => {
        setBreakTime(20);
    }
    const handleClick3 = () => {
        setBreakTime(30);
    }
    const handleClick4 = () => {
        setBreakTime(40);
    }
    const handleClick5 = () => {
        setBreakTime(50);
    }

    
    
    return (
        <div>
        <div className='name'>
            <h2>H. M. Hasib Ferdous</h2>
        </div>
        <div className='info'>
        <h5>Weight:78kg</h5>
        <h5>Height: 5'11"</h5>
        <h5>Age:25</h5>
        </div>
        <div className='addBreak'>
            <h2>Add A Break</h2>
            <div className='breakTime'>

        


            <button onClick={handleClick1} className='btn-time'>
            <p className='btn-text'>10</p>
            </button>
            <button onClick={handleClick2} className='btn-time'>
            <p className='btn-text'>20</p>
            </button>
            <button onClick={handleClick3} className='btn-time'>
            <p className='btn-text'>30</p>
            </button>
            <button onClick={handleClick4} className='btn-time'>
            <p className='btn-text'>40</p>
            </button>
            <button onClick={handleClick5} className='btn-time'>
            <p className='btn-text'>50</p>
            </button>

        
            </div>
        </div>

        <div className='time'>
           <h2>Exercise Details</h2>
            <p>Exercise Time:{exerciseTime}</p> 
            <p>Break Time:{breakTime}</p>
            <BreakTime></BreakTime>
            
        </div>
        </div>
    );
};




export default Time;