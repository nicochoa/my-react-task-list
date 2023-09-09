import { useEffect, useState } from 'react';
import './Task.css'


export const Task = ({ task, i , changeState, taskState}) => {
    
    return (

        <label key={i} htmlFor={task.name}>
            <input 
            type="checkbox" 
            name={task.name} 
            checked={taskState} 

            onChange={()=>{
                taskState? taskState = false : taskState = true;
                task.state? task.state = false : task.state = true;
                changeState(task)}} />
            <span>{task.name}</span>
        </label>

    );
}