import React, { useState } from "react";
import { Icon } from "@iconify/react";
import {Link} from 'react-router-dom'
export default function Task({ task, toggleReminder, deleteTask, updateTask }) {
  const { id, reminder } = task;

  const [name, setName] = useState(task.name);
  const [day, setDay] = useState(task.day);
  const [hour, setHour] = useState(task.hour);

  const [isUpdate, setIsUpdate] = useState(false);

  const onPressEnter = (e) => {
    if (e.code === "Enter") {
      console.log("user hit enter");
      updateTask({ id, name, day, hour, reminder })
        .then((response) => {
          console.log("response", response);
          if (response === "success") {
            setIsUpdate(false);
          }
        })
        .catch((error) => console.log("update task", error));
    }
  };

  return (
    <div
      className={`task ${reminder ? "task-reminder" : ""}`}
      onDoubleClick={() => toggleReminder(id)}
    >
        <div>
            {isUpdate ? (
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={onPressEnter}
            />
            ) : (
            <h3 className="name-section"> {name}</h3>
            )}

            <div className="day-time-display">
                {isUpdate ? (
                    <input
                    type="date"
                    placeholder="Day"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    onKeyDown={onPressEnter}
                    />
                ) : (
                    <p>{day} </p>
                )}
                {isUpdate ? (
                    <input
                    type="time"
                    placeholder="Time"
                    value={hour}
                    onChange={(e) => setHour(e.target.value)}
                    onKeyDown={onPressEnter}
                    />
                ) : (
                    <p className="hour">{hour}</p>
                )}
            </div>
        </div>
        <div className="icons">
            <Icon
            onClick={() => deleteTask(id)}
            icon="ep:circle-close"
            color="red"
            width="40"
            height="40"
            />
            <Icon id="edit"
            onClick={() => setIsUpdate(!isUpdate)}
            icon="akar-icons:edit"
            color="orange"
            width="40"
            height="40"
            />
            <Link to={`task/${id}`}>
            <Icon id="enter"
            icon="icon-park-solid:database-enter"
            color="green"
            width="40"
            />
            </Link>
            
        </div>
    </div>
  );
}