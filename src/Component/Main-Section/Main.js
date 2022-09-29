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

    
        }, [activities])
    
        const handleAddToTime = (activity) =>{
            //console.log(activity);
            //time.push(activity);
            const newTime = [...time, activity];
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