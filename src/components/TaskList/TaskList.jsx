import { useEffect , useState, useContext} from "react";

import { Task } from "../Task/Task";
import { useTasks } from "../../hooks/useTasks";
import { TaskForm } from "../TaskForm/TaskForm";
import './TaskList.css'



export const TaskList = ({list}) => {
    const [ stateList, createTask, eraseTask, updateTask, changeTaskState ] = useTasks();

    const handleUpdateTask = (task)=>{
        let newDescription = prompt("actualizar tarea");
        task.description = newDescription;
        updateTask(task);
    }

    const handleCreateTask = (newTask)=>{
        createTask(newTask);
    }


    return (
        <div id="TaskList">
            <TaskForm onAdd={handleCreateTask}/>
            {stateList.map((task, i) =>
                (<Task 
                    task={task} 
                    key={i} c
                    onDelete={eraseTask} 
                    onUpdate = {handleUpdateTask}
                    onChange = {changeTaskState} />)
            )}
            {/* <button onClick={handleCreateTask}>add</button> */}
        </div>
    );
}