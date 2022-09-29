//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Activity.css';

const Activity = (props) => {

    const {name, img, info, age, requiredTime} = props.product;


    return (
        <div className='activity'>
            <img src={img} alt=""></img>
            <p className='activity-name'>{name}</p>
           <div className='activity-info'>
            <p><small>Info:{info}</small></p>
            <p>Age:{age}</p>
            <p>Required-Time:{requiredTime} seconds</p>
          </div> 
         <button onClick={()=>props.handleAddToTime(props.product)} className='btn-cart'>
            <p className='btn-text'>Add to list</p>
            {/* <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> */}
         </button>
        </div>
    );
};

export default Activity;