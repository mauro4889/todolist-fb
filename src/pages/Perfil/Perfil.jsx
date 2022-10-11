import { Box, CircularProgress, CircularProgressLabel, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import React from 'react'


export const Perfil = () => {
    return (
        <Stack w='100vw'>
            <Heading
                w='100%'
                fontSize='1.5em'
                color='white'
                textAlign='center' >
                Ve el progreso de tus tareas!
            </Heading>
            <Flex
                wrap='wrap'
                direction='row'
                gap='2%'
                justifyContent='space-evenly'
                alignItems='center'>
                <Box mb='5%' w='100%'>
                    <Text
                        color='white'
                        fontSize='20px'
                        textAlign='center'>
                        Tareas totales 100
                    </Text>
                </Box>
                <Box>
                    <CircularProgress
                        value={50}
                        size={'3.5em'}
                        color='#61ABFF'>
                        <CircularProgressLabel 
                        mt='-5px' 
                        w='70%' 
                        fontSize='15px'
                        color='white' 
                        textAlign='center'>
                            Tareas finalizadas
                            50%
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
                <Box>
                    <CircularProgress
                        value={25}
                        size='3.5em'
                        color='#61ABFF'>
                        <CircularProgressLabel
                            mt='-5px'
                            w='70%'
                            fontSize='15px'
                            color='white'
                            textAlign='center'>
                            Tareas pendientes
                            25%
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
                <Box>
                    <CircularProgress 
                    value={25} 
                    size='3.5em'
                    color='#61ABFF'>
                        <CircularProgressLabel mt='-5px' w='70%' fontSize='15px' color='white' textAlign='center'>
                            Tareas canceladas
                            25%
                        </CircularProgressLabel>
                    </CircularProgress>
                </Box>
            </Flex>
        </Stack>
    )
}
