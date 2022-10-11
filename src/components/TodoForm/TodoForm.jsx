import { Button, Flex, FormControl, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { v4 } from 'uuid'
import { createTask } from '../../redux/task/taskAction'

export const TodoForm = () => {
    const { register, handleSubmit, reset } = useForm()
    const {user} = useSelector((state)=>state.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = async (data) => {
        const task = {
            user: user.id,
            data,
            id: v4()
        }
        await dispatch(createTask(task))
        console.log(data.tarea)
        reset()
    }

    return (

        <Stack
            bg='white'
            w='100%'
            maxW='768px'
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <Flex justifyContent='space-between'>
                    <FormControl isRequired>
                        <Input
                            placeholder='Agregar tarea'
                            w='80%'
                            h='1.5em'
                            type='text'
                            border='none'
                            fontSize='1em'
                            ml='2%'
                            {...register("tarea", { required: true, maxLength: 20 })
                            } />
                    </FormControl>
                    <Button
                        border='none'
                        bg='white'
                        color='#61ABFF'
                        fontWeight='bold'
                        cursor='pointer'
                        w='20%'
                        type='submit' >Agregar</Button>
                </Flex>
            </form>
        </Stack>
    )
}
