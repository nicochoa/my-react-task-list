import { useState , useEffect } from "react";
export function useTasks(){
    let [stateList, setState] = useState([]);

    const createTask = (newTask)=>{
        let newList = [...stateList];
        newTask["id"] = Date.now().toString();
        newTask["state"] = false;
        newList.push(newTask);
        setState(newList);
        localStorage.setItem("tasks",JSON.stringify(newList));
    }

    const eraseTask = (task)=>{
        let newList = [...stateList];
        let remainingTasks = newList.filter((items)=>{
            return items.name != task.name;
        });
        setState(remainingTasks);
        localStorage.setItem("tasks",JSON.stringify(remainingTasks));
    }

    const updateTask = (task)=>{
        let newList = [...stateList];
        newList = newList.map((e)=>{
            if (e.id == task.id) {
                e.name = task.name;
            }
            return e;
        });
        localStorage.setItem("tasks",JSON.stringify(newList));
        setState(newList);
    }

    const changeTaskState = (task)=>{
        let newList = [...stateList];
        newList = newList.map((e)=>{
            if (e.id == task.id) {
                e.state = task.state;
            }
            return e;
        });
        localStorage.setItem("tasks",JSON.stringify(newList));
        setState(newList);
    }

    useEffect(()=>{
        if (JSON.parse(localStorage.getItem("tasks"))) {
            let inBrowserTasks = JSON.parse(localStorage.getItem("tasks"));
            setState(inBrowserTasks);
        }
        console.log(stateList);
    }, []);
    
    return [ stateList, createTask, eraseTask, updateTask, changeTaskState]
}