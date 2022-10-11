import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { TodoForm } from '../../components/TodoForm/TodoForm'
import { TodoList } from '../../components/TodoList/TodoList'

export const Todo = () => {
    return (
        <Stack 
        maxW='95vw' 
        m='auto' 
        mt='0'
        placeItems='center' 
        direction='column'>
            <Heading textAlign='center' color='white'>Lista de tareas</Heading>
            <TodoForm/>
            <TodoList/>
        </Stack>
        
    )
}
