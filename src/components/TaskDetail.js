import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function TaskDetail() {
    const [task,setTask] = useState(null);
    const params = useParams();
    useEffect(() =>{
        fetch('http://localhost:5000/tasks',{
          method:"GET",
        })  
          .then((response)=>response.json())
          .then((response)=> {
            console.log("get tasks",response);
            setTask(response);
        })
          .catch((error) => console.log("get tasks", error));
        return () => {};
      },[]);
    
  return (
    <div style={{ 
        color: "#fff" 
        
        }}>
        <h3>{task.name}</h3>
        <div>
            <p>{task.day}</p>
            <p>{task.hour}</p>
        </div>
    </div>
  )
}
