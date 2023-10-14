import { useTasks } from "../../hooks/useTasks";
import { useForm } from "react-hook-form";
import "./TaskForm.css";

export const TaskForm = (props) => {
    const {onAdd} = props;
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isDirty, isValid },
    } = useForm({ mode: "onChange" });

    const [stateList, createTask, eraseTask, updateTask, changeTaskState] = useTasks();

    const onSubmit = (data) => {
        // registerUser(data);
        let newTask = {
            name: getValues("name"),
            description: getValues("description"),
        }
        onAdd(newTask);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Title
                    <input
                        type="text"
                        placeholder="Title"
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: "title required",
                                },
                            })}
                    />
                </label>
                {errors.name?.message && (
                    <span className="error" role="alert">
                        {errors.name.message}
                    </span>
                )}
                <label>
                    Description
                    <input
                        type="text"
                        placeholder="Description"
                        {...register("description")}
                    />
                </label>
                <button >Save note</button>
            </form>
        </>
    );
}