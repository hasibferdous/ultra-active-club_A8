import React, { useEffect, useState } from 'react';
import { addToDb, getStoredTime } from '../../utilities/fakedb';
import Activity from '../Activity/Activity';
import Time from '../Time-Duration/Time';
import './Main.css'

const Main = () => {
        const [activities, setActivities] = useState([]);
        const [time, setTime] = useState([]);
        useEffect( ()=>{
            fetch('activities.json')
            .then(res=> res.json())
            .then(data =>  setActivities(data))
        }, []);
    
        useEffect(() =>{
            //console.log('local Storage first line', activities)
            const storedTime = getStoredTime();
            const savedTime = [];
            for(const id in storedTime){
                const addedActivity = activities.find(activity=> activity.id === id);
                if(addedActivity){
                    const quantity = storedTime[id];
                    addedActivity.quantity =quantity;
                    savedTime.push(addedActivity);
                //console.log(addedActivity);
                }
            }
            setTime(savedTime);
    
        }, [activities])
    
        const handleAddToTime = (selectedActivity) =>{
            console.log(selectedActivity);
            let newTime = [];
            const exists = time.find(activity => activity.id === selectedActivity.id);
            if(!exists){
                selectedActivity.quantity = 1;
                newTime = [...time, selectedActivity];
            }
            else {
                const rest = time.filter(activity => activity.id !== selectedActivity.id);
                exists.quantity = exists.quantity + 1;
                newTime = [...rest, exists];
            
            }
            setTime(newTime);
            addToDb(selectedActivity.id)
        }

    return (
        <div className='main-container'>
           <div className="activities-container">
                {
                    activities.map(activity=><Activity 
                        key={activity.id}
                         product={activity} 
                         handleAddToCart={handleAddToTime}  
                        ></Activity>)
                }
           </div>
           <div className="time-container">
                <Time time={time}></Time>
           </div>
        </div>
    );
};

export default Main;