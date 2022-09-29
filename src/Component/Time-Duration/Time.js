import React from 'react';
import './Time.css'

const Time = (props) => {
    const {time} = props;
    let requiredTime = 0;
    for (const activity of time){
        requiredTime = requiredTime +  activity.requiredTime;
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
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-time'>
            <p className='btn-text'>10</p>
            </button>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-time'>
            <p className='btn-text'>20</p>
            </button>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-time'>
            <p className='btn-text'>30</p>
            </button>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-time'>
            <p className='btn-text'>40</p>
            </button>
            <button onClick={()=>props.handleAddToCart(props.product)} className='btn-time'>
            <p className='btn-text'>50</p>
            </button>


            </div>
        </div>
        <div className='time'>
           <h2>Exercise Details</h2>
            <p>Exercise:{requiredTime}</p> 
            <p>Break time:{}</p>
            
        </div>
        </div>
    );
};

export default Time;