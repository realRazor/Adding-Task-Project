import React, { useEffect } from 'react'
import AddTask from './AddTask'
import { useState } from 'react';
import Sun from './Sun'
import Task from './Task';
import ToggleButton from './ToggleButton';
import {Link} from 'react-router-dom'

export default function Main() {
  const [tasks,setTasks] = useState([]);
  const [showForm,setShowForm] = useState(false);

  useEffect(() =>{
    fetch('http://localhost:5000/tasks',{
      method:"GET",
    })  
      .then((response)=>response.json())
      .then((response)=> {
        console.log("get tasks",response);
        setTasks(response);
    })
      .catch((error) => console.log("get tasks", error));
    return () => {};
  },[]);
  const onAddTask = (data) =>{
    console.log("data",data);
    fetch('http://localhost:5000/tasks',{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(data),
    })
    .then((response) => response.json())
    .then((response)=> {
      console.log("add task", response);
      setTasks([...tasks,response]);
    })
    .catch((error) => console.log("add task", error));
  };
  const toggleReminder = (id) => {
    console.log("id",id);
    const task = tasks.filter((elm) => elm.id === id)[0];
    const updatedTask = {...task,reminder:!task.reminder};

    fetch(`http://localhost:5000/tasks/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(updatedTask),
    })
    .then((response) => response.json())
    .then((response)=>{
      console.log("updated task",response);
      const updatedTasks = tasks.map((task)=>
      task.id === id ? response : task);
      setTasks(updatedTasks);
    })
    .catch((error)=> console.log("update task",error));
  };
  const deleteTask = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`,{
      method:"DELETE",      
    })
    .then((response)=>{
      console.log("deleted task",response);
      if(response.status === 200){
        const updatedTasks = tasks.filter((elm)=>elm.id !== id);
        setTasks(updatedTasks);
      }
  })
  .catch((error) => console.log("delete tasks", error));
  }
  const toggleForm = () =>{
    setShowForm(!showForm)
  }
  const updateTask = (task) => {
    // console.log("update task", task);

    return new Promise((resole, reject) => {
      fetch(`http://localhost:5000/tasks/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(task),
      })
        .then((response) => response.json())
        .then((response) => {
          console.log("response", response);
          if (response.id) {
            resole("success");
          } else {
            reject("failure");
          }
        })
        .catch((error) => {
          console.log("update task", error);
          reject("failure");
        });
    });
  };

  return (
    <div>
      <Sun />
        <div className='container'>
          <ToggleButton toggleForm={toggleForm} showForm={showForm} />
          {showForm ? (<AddTask onSubmitTask={onAddTask} />) : null}
          
          <div className='tasks-wrapper'>
            {tasks.map((task)=>{
              return(
                <Link />,
                <Task                
                  deleteTask = {deleteTask}
                  updateTask = {updateTask}
                  toggleReminder={toggleReminder}
                  task={task}
                  key={task.id}
                />
              );
            })}
          </div>
        </div>
    </div>
  )
}
