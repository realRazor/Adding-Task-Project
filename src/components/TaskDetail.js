import React, {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';

export default function TaskDetail() {
    const [task,setTask] = useState(null);
    const params = useParams();
    const {id} = params;
    useEffect(() =>{
        fetch(`http://localhost:5000/tasks/${id}`,{
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
    
      if(!task) return <p style={{ color: "#fff" }}>Loading...</p>

  return (
    <div style={{ 
        color: "#fff", 
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
        }}>
        <h3>{task.name}</h3>
        <div>
            <p>{task.day}</p>
            <p>{task.hour}</p>
        </div>
        <div>
           <p>{task.description}</p>
        </div>
    </div>
  )
}
