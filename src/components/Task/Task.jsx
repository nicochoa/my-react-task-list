import { useEffect, useState } from 'react';
import './Task.css'


export const Task = ({ task, i , onDelete, onUpdate, onChange}) => {
    
    return (

        <label key={i} htmlFor={task.name}>
            <input 
            type="checkbox" 
            name={task.name} 
            checked={task.state} 

            onChange={()=>{
                task.state? task.state = false : task.state = true;
                onChange(task)}} />
            <span>{task.name}</span>
            <span>{task.description}</span>
            <button onClick={ () => onDelete(task)}>erase</button>
            <button onClick={()=> onUpdate(task)}>update</button>
        </label>

    );
}