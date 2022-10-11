import { Button, Flex, FormControl, Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from "react-hook-form"

export const TodoForm = () => {
    const { register, handleSubmit, reset } = useForm()

    const onSubmit = (data) => {
        console.log(data)
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
