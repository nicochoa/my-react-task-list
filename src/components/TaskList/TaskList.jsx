import { useEffect , useState } from "react";

import { Task } from "../Task/Task";

export const TaskList = ({list}) => {
    let [stateList, setState] = useState([]);

    const changeState = (task) => {
        let newList = [...stateList];
        newList = newList.map((e)=>{
            if (e.name == task.name) {
                e.state = task.state 
            }
            return e;
        });
        if (!newList.find(e => e.name === task.name)) {
            newList.push(task)
        }
        localStorage.setItem("tasks",JSON.stringify(newList));
        setState(newList);
    }

    const taskState = (task)=>{
        if(stateList.length) {
            console.log(stateList);
            return stateList.find((e)=> e.name == task.name).state;
        }
        return task.state;
    }

    useEffect(()=>{
        if (JSON.parse(localStorage.getItem("tasks"))) {
            let inBrowserTasks = JSON.parse(localStorage.getItem("tasks"));
            setState(inBrowserTasks);
        }else{
            setState(list);
        }
        console.log(stateList);
    }, []);
    

    return (
        <div>
            {list.map((task, i) =>
                (<Task task={task} key={i} changeState={changeState} taskState={taskState(task)} />)
            )}
        </div>
    );
}