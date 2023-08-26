import { Task } from "../Task/Task";

export const TaskList = ({list}) => {
    

    return (
        <div>
            {list.map((task, i) =>
                (<Task task={task} key={i} />)
            )}
        </div>
    );
}