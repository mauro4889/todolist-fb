import { Box, Button, FormControl, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useForm } from "react-hook-form"
import { createUser } from '../../firebase/firebase-utils'
import { useRedirect } from '../../hook/useRedirect'


const ERROR_CODES ={
    EMAIL_IN_USE: 'auth/email-already-in-use'
}

export const CreateAcount = () => {
    const {register, handleSubmit, reset} = useForm()
    useRedirect('/')

    const formStyle = {
        width: '90%',
        minHeight: '80%'        
    }
    const onSubmit = async (values) =>{
        const {email, name, password} = values
        try {
            await createUser(email, password, name)
        } catch (error) {
            console.log(error)
            if (error.code === ERROR_CODES.EMAIL_IN_USE){
            alert('Ya existe una cuenta con ese email')
            reset()
        }}
    }

    return (
        <Stack
            bg='white'
            maxW='21em'
            minH='40vh'
            maxH='60vh'
            margin='auto'
            align='center'
            justify='center'
            mt='10%'
            borderRadius='5px'>
            <Text
                fontWeight='bold'
                textAlign='center'
            >
                Create tu cuenta para guardar tus tareas
            </Text>
            <form onSubmit={handleSubmit(onSubmit)} style={formStyle}>
                <VStack gap='15%' h='100%'>
                    <FormControl w='90%'>
                        <Input
                            placeholder='Ingrese nombre'
                            border='none'
                            borderBottom='1px solid black'
                            w='100%'
                            {...register('name', {required: true})}
                        />
                    </FormControl>
                    <FormControl w='90%'>
                        <Input
                            placeholder='Ingrese email'
                            type='email'
                            border='none'
                            borderBottom='1px solid black'
                            w='100%'
                            {...register('email',{required: true})}
                        />
                    </FormControl>
                    <FormControl w='90%'>
                        <Input
                            placeholder='Ingrese contraseña'
                            type='password'
                            border='none'
                            borderBottom='1px solid black'
                            w='100%'
                            {...register('password',{requiered: true})}
                        />
                    </FormControl>
                    <Box>
                        <Button
                            m='auto'
                            mt='2em'
                            h='2em'
                            w='10em'
                            border='1px solid #FF5A79'
                            borderRadius='5%'
                            p='3%'
                            bg='white'
                            color='#FF5A79'
                            fontWeight='bold'
                            cursor='pointer'
                            transition='.5s'
                            _hover={{ bg: '#FF5A79', color: 'white' }}
                            type='submit'>Registrarse
                        </Button>
                    </Box>
                </VStack>
            </form>

        </Stack>
    )
}
