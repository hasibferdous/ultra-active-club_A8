import React, { useEffect, useState } from 'react';
import { addToDb, getStoredTime } from '../../utilities/fakedb';
import Activity from '../Activity/Activity';
import Time from '../Time-Duration/Time';
import './Main.css'
import Note from '../Notes/Note';
const Main = () => {
        const [activities, setActivities] = useState([]);
        const [time, setTime] = useState([]);
        useEffect( ()=>{
            fetch('activities.json')
            .then(res=> res.json())
            .then(data =>  setActivities(data))
        }, []);
    
         useEffect(() =>{
            console.log('local Storage first line', activities)
             const storedTime = getStoredTime();
             console.log(storedTime);
        //     const savedTime = [];
            // for(const id in storedTime){
            //     const addedActivity = activities.find(activity=> activity.id === id);
            //     console.log(addedActivity);
                        
            //     if(addedActivity){
            //         const exerciseTime = storedTime[id];
            //         addedActivity.exerciseTime =exerciseTime;
            //         savedTime.push(addedActivity);
            //      console.log(addedActivity);
            //      }
            // }
            // setTime(savedTime);
    
        }, [activities])
    
        const handleAddToTime = (activity) =>{
            //console.log(activity);
            //time.push(activity);
            const newTime = [...time, activity];
            // let newTime = [];
            // const exists = time.find(activity => activity.id === selectedActivity.id);
            // if(!exists){
            //     selectedActivity.quantity = 1;
            //     newTime = [...time, selectedActivity];
            // }
            // else {
            //     const rest = time.filter(activity => activity.id !== selectedActivity.id);
            //     exists.requiredTime = exists.requiredTime + 1;
            //     newTime = [...rest, exists];
            
            // }
            setTime(newTime);
            addToDb(activity.id)
        }




    return (
        <div className='main-container'>
           <div className="activities-container">
            
                 {
                    activities.map(activity=><Activity 
                        key={activity.id}
                         activity={activity} 
                         handleAddToTime={handleAddToTime}  
                        ></Activity>)
                } 
           </div>
           <div className="time-container">
            
                <Time time={time}></Time> 

           </div>
                <Note></Note>
        </div>
    );
};

export default Main;