import React, { useState } from 'react';
import './Time.css'


const Time = (props) => {
    const {time} = props;
    //console.log(time);
     let exerciseTime = 0;
    for (const activity of time){
        exerciseTime = exerciseTime +  activity.requiredTime;
    }

    const [breakTime, setBreakTime] = useState(0);

    const handleClick1 = () => {setBreakTime(10);}
    const handleClick2 = () => {setBreakTime(20);}
    const handleClick3 = () => {setBreakTime(30);}
    const handleClick4 = () => {setBreakTime(40);}
    const handleClick5 = () => {setBreakTime(50);};
    
    localStorage.setItem('Break-Time', JSON.stringify(breakTime))
        localStorage.getItem((breakTime));
        
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
            <p className='btn-text'><b>10</b></p>
            </button>
            <button onClick={handleClick2} className='btn-time'>
            <p className='btn-text'><b>20</b></p>
            </button>
            <button onClick={handleClick3} className='btn-time'>
            <p className='btn-text'><b>30</b></p>
            </button>
            <button onClick={handleClick4} className='btn-time'>
            <p className='btn-text'><b>40</b></p>
            </button>
            <button onClick={handleClick5} className='btn-time'>
            <p className='btn-text'><b>50</b></p>
            </button>
            </div>
        </div>
        <div className='time'>
           <h2><b>Exercise Details</b></h2>
            <p>Exercise Time: {exerciseTime} seconds</p> 
            <p>Break Time: {breakTime} seconds</p>
            
        </div>
        </div>
    );
};
export default Time;