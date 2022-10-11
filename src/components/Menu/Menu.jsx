import { Box, Button, Drawer, DrawerBody, Flex, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard, faUser } from '@fortawesome/free-regular-svg-icons'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Menu = () => {


    return (
        <Drawer >
            <DrawerBody>
                <Box>
                    <Button
                        border='none'
                        w='8em'
                        h='2.5em'
                        borderRadius='5%'
                        bg='white'
                        leftIcon={<FontAwesomeIcon icon={faClipboard}
                        />} >
                        <NavLink to='/'>Tareas</NavLink></Button>
                </Box>
                <Box>
                    <Button
                        border='none'
                        w='8em'
                        h='2.5em'
                        borderRadius='5%'
                        bg='white'
                        leftIcon={<FontAwesomeIcon icon={faUser} />}>
                        <NavLink to='/perfil'>Perfil</NavLink></Button></Box>
                <Box>
                    <Button
                        border='none'
                        w='8em'
                        h='2.5em'
                        borderRadius='5%'
                        bg='white'
                        leftIcon={<FontAwesomeIcon icon={faRightFromBracket} />} >
                        Salir</Button>
                </Box>
            </DrawerBody>
        </Drawer>
    )
}
