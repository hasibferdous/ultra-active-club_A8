import React from 'react';
import './Activity.css';

const Activity = (props) => {
    //console.log(props.activity)
    const {name, img, info, age, requiredTime} = props.activity;
    return (
        <div className='activity'>
             <img src={img} alt=""></img>
            <p className='activity-name'>{name}</p>
           <div className='activity-info'>
            <p><small>Info:{info}</small></p>
            <p>Age:{age}</p>
            <p>Required-Time:{requiredTime} seconds</p>
          </div> 
         <button onClick={()=>props.handleAddToTime(props.activity)} className='btn-list'>
            <p className='btn-text'>Add to list</p>
          
         </button> 
        </div>
    );
};

export default Activity;