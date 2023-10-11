import { useEffect , useState } from "react";

import { Task } from "../Task/Task";
import { useTasks } from "../../hooks/useTasks";


export const TaskList = ({list}) => {
    const [ stateList, createTask, eraseTask, updateTask, changeTaskState ] = useTasks();

    const handleUpdateTask = (task)=>{
        let newName = prompt("actualizar tarea");
        task.name = newName;
        updateTask(task);
    }

    const handleCreateTask = ()=>{
        let newTaskName = prompt("nueva tarea");
        let newTask ={
            name: newTaskName,
        }
        createTask(newTask);
    }
    

    return (
        <div>
            {stateList.map((task, i) =>
                (<Task 
                    task={task} 
                    key={i} c
                    onDelete={eraseTask} 
                    onUpdate = {handleUpdateTask}
                    onChange = {changeTaskState} />)
            )}
            <button onClick={handleCreateTask}>add</button>
        </div>
    );
}