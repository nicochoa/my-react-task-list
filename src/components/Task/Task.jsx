import { useEffect, useState } from 'react';
import './Task.css'
import { Button, Checkbox, Stack, Text, Flex } from '@chakra-ui/react';


export const Task = ({ task, i, onDelete, onUpdate, onChange }) => {

    return (

        <Stack 
        direction={'column'} 
        key={i} 
        htmlFor={task.name} 
        width={'300px'} 
        marginBlock={7} 
        borderBottom='2px' 
        borderColor='gray.200' 
        paddingBottom={5}>
            <Flex>
                <Checkbox
                    size='lg' 
                    colorScheme='teal'
                    type="checkbox"
                    name={task.name}
                    isChecked={task.state}
                    onChange={() => {
                        task.state ? task.state = false : task.state = true;
                        onChange(task)
                    }} />
                <Text marginLeft={4} fontWeight='800'>{task.name}</Text>
            </Flex>
            <Text>{task.description}</Text>
            <Flex justify={'center'} gap={4}>
                <Button colorScheme='cyan' variant='outline' onClick={() => onUpdate(task)}>update</Button>
                <Button colorScheme='red' variant='outline' onClick={() => onDelete(task)}>erase</Button>
            </Flex>
        </Stack>

    );
}