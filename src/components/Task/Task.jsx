import './Task.css'


export const Task = ({task, i}) => {
     const onChangeTaskState = (task , e)=>{
        console.log(task);
        if (task.state) {
            !e.target.checked;
            task.state = false;
        }else{
            e.target.checked;
            task.state = true;
        }
     }

    return (
      
        <label key={i} htmlFor={task.name}>
            <input type="checkbox" name={task.name}  defaultChecked={task.state} onChange={(e)=>onChangeTaskState(task, e)}/>
            <span>{task.name}</span>
        </label>
      
    );
  }