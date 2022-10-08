import React, { useState } from 'react'

export default function AddTask({onSubmitTask}) {

    const [name,setName] = useState('');
    const [day,setDay] = useState('');
    const [hour,setHour] = useState('');
    const [description,setDescription] = useState('');
    const [reminder,setReminder] = useState(false);


    const onSubmit = (e) => {
        e.preventDefault();

        if(!name || !day || !hour ){
            alert('Please fill the all inputs')
            return;
        }
        //console.log("test", name, day, hour)
        onSubmitTask({name,day,hour,reminder});
    };

  return (
    <form onSubmit={onSubmit}>
        
        <div className='form-control'>
            <label className='typeTask'>Task</label>
            <input 
                type="text"
                placeholder='Add Task'
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label className='typeTask'>Description</label>
            <input 
                type="text-area"
                placeholder='Description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label className='typeTask'>Day</label>
            <input 
                type="date"
                placeholder='Day'
                value={day}
                onChange={(e)=> setDay(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label className='typeTask'>Hour</label>
            <input 
                type="time"
                placeholder='Time'
                value={hour}
                onChange={(e)=> setHour(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label id='remainder'>Reminder</label>
            <input 
                type="checkbox"
                checked={reminder}
                value={reminder}
                onChange={(e)=> setReminder(e.currentTarget.checked)}
            />
        </div>
        
        <button type="submit" className='btn btn-block'>Save Task</button>

    </form>
  )
}
