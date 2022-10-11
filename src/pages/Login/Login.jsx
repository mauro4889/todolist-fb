import { FormControl, VStack, Text, Box, Input, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { NavLink, useLocation } from "react-router-dom"
import { createUserProfile, signIn } from "../../firebase/firebase-utils"
import { useRedirect } from "../../hook/useRedirect"

const ERROR_CODE = {
    WRONG_PASSWORD: 'auth/wrong-password',
    NOT_FOUND: 'auth/user-not-found'
}

export const Login = () => {
    const {state} = useLocation()
    useRedirect(state?.checkout ? 'checkout' : '/')
    const {reset, register, handleSubmit} = useForm()


    const onSubmit = async values =>{
        const {email, password} = values;
        try {
            const {user} = await signIn(email, password)
            createUserProfile(user)
            console.log(user)
        } catch (error) {
            const {code} = error
            switch(code){
                case ERROR_CODE.WRONG_PASSWORD:
                    return alert('Contraseña incorrecta')
                case ERROR_CODE.NOT_FOUND:
                    return alert('Usuario incorrecto')
                default:
                    return console.log(error)
            }
        }
        reset()
    }


    return (
        <VStack bg='white' w='22em' m='auto' mt='5%' borderRadius='5%'>
            <Text fontWeight='bold' color='#61ABFF'>Inicia sesión</Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box>
                    <FormControl>
                        <Input
                        placeholder='Ingrese su email'
                        border='none'
                        borderBottom='1px solid black'
                        {...register('email',{requiered: true})}
                        />
                    </FormControl>
                    <FormControl>
                        <Input
                        placeholder='Ingrese su contraseña'
                        border='none'
                        borderBottom='1px solid black'
                        mt='5%'
                        type='password'
                        {...register('password',{requiered: true})}
                        />
                    </FormControl>
                    <NavLink><Text fontSize='10px' textDecoration='none' mt='10%'>¿Olvidates la contraseña?</Text></NavLink>
                    <NavLink to='/createacount'><Text fontSize='10px'>¿No tenes usuario?</Text></NavLink>
                    <Button 
                    my='10%'
                    mx='auto'
                    border='1px solid #FF5A79'
                    borderRadius='5%'
                    p='3%'
                    bg='white'
                    color='#FF5A79'
                    fontWeight='bold'
                    cursor='pointer'
                    transition='.5s'
                    _hover={{bg:'#ff5a79', color:'#fff'}}
                    type='submit'>
                        Ingresar
                    </Button>
                </Box>
            </form>
        </VStack>
    )
}
