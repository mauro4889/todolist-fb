import { ArrowBackIcon } from '@chakra-ui/icons'
import { Heading, Icon, Stack, Image, Box } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import notfound from '../../assets/img/notfound.svg'

export const NotFound = () => {
    return (
        <Stack alignItems='center' mt='5%' maxW='95vw'>
            <Box w='100%' pl='5%'>
                <NavLink to='/' 
                style={{textDecoration:'none',
                color:'#3F3D56',
                fontSize:'15px',
                fontWeight:'bold'}} >
                    <Icon as={ArrowBackIcon} />
                    Volver al inicio
                </NavLink>
            </Box>
            <Heading
                color='white'
                textAlign='center'
                fontSize='35px'>
                Pagina no encontrada
            </Heading>
            <Image
                src={notfound}
                maxW='80vw'
            />
        </Stack>
    )
}
