import React from 'react';
import './Time.css'

const Time = (props) => {
    const {time} = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const activity of time){
        quantity = quantity +  activity.quantity;
        total = total + activity.price * activity.quantity;
        
    }

    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal =(total+ shipping+ tax).toFixed(2);
    return (
        <div className='cart'>
           <h4>Order summary in Cart</h4>
            <p>Selected Items: {quantity}</p> 
            <p>Total Price: ${total}</p>
            <p>Total Shipping:${shipping}</p>
            <p>Tax:{tax}</p>
            <h5>Grand Total:{grandTotal}</h5>
        </div>
    );
};

export default Time;