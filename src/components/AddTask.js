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
        
        onSubmitTask({name,day,description,hour,reminder});
    };

  return (
    <form onSubmit={onSubmit}>
        
        <div className='form-control'>
            <label className='typeTask'>Task</label>
            <input style={{color: "rgb(255, 136, 0)"}}
                type="text"
                placeholder='Add Task'
                value={name}
                onChange={(e)=> setName(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label className='typeTask'>Description</label>
            <input style={{
                color: "rgb(255, 136, 0)"
            }}
                type="text-area"
                placeholder='Description'
                value={description}
                onChange={(e)=> setDescription(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label className='typeTask'>Day</label>
            <input style={{color: "rgb(255, 136, 0)"}}
                type="date"
                placeholder='Day'
                value={day}
                onChange={(e)=> setDay(e.target.value)}
            />
        </div>
        <div className='form-control'>
            <label className='typeTask'>Hour</label>
            <input style={{color: "rgb(255, 136, 0)"}}
                type="time"
                placeholder='Time'
                value={hour}
                onChange={(e)=> setHour(e.target.value)}
            />
        </div>
        <div className='form-control form-control-check'>
            <label id='remainder'>Reminder</label>
            <input style={{color: "rgb(255, 136, 0)"}}
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
