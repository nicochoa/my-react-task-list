import { useTasks } from "../../hooks/useTasks";
import { useForm } from "react-hook-form";
import "./TaskForm.css";
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { ArrowForwardIcon } from '@chakra-ui/icons'

export const TaskForm = (props) => {
    const { onAdd } = props;
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm({ mode: "onChange" });

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
                <FormControl isInvalid={errors.name}>
                    <FormLabel htmlFor="name" fontWeight={'600'}>
                        Title
                    </FormLabel>
                    <Input
                        id="name"
                        type="text"
                        placeholder="Title"
                        size='lg'
                        {...register("name",
                            {
                                required: {
                                    value: true,
                                    message: "title required",
                                },
                                minLength:{
                                    value: 3,
                                    message:"Name is waaay too short",
                                }
                            })}
                    />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="description" fontWeight={'600'}>
                        Description
                    </FormLabel>
                    <Textarea
                        id="description"
                        type="text"
                        placeholder="Description"
                        size='lg'
                        {...register("description")}
                    />
                </FormControl>
                <Button 
                mt={4} 
                colorScheme='teal' 
                variant='outline' 
                isLoading={isSubmitting} 
                type='submit'
                rightIcon={<ArrowForwardIcon></ArrowForwardIcon>}>Save note</Button>
            </form>
        </>
    );
}