import React, { useState } from 'react';

const BreakTime = () => {

    function Counter(){
        const[count, setBreakTime] =  useState(10);
    
        const increaseCount = () => setBreakTime(count +0);
    
    
    return (
        <div>
            <button onClick={increaseCount}>10</button>
            <div className='time'>
          
            <p>Break time:{increaseCount}</p>
            
        </div>
        </div>
    );
};
};

export default BreakTime;