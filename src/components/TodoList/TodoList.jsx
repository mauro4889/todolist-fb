import { CheckIcon, CloseIcon } from '@chakra-ui/icons'
import { Box, Button, Flex, Icon, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export const TodoList = () => {
    return (
        <Stack 
        bg='white' 
        align='center' 
        w='100%'
        maxW='768px' 
        placeItems='center'>
            <Box borderBottom='1px solid #61ABFF' w='90%'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Stack direction='row'>
                        <Button
                            border='none'
                            h='1.5em'
                            bg='white'
                            color='green'
                            cursor='pointer'>
                                <Icon as={CheckIcon} />
                                </Button>
                        <Button
                            border='none'
                            h='1.5em'
                            bg='white'
                            color='red'
                            cursor='pointer'
                        ><Icon as={CloseIcon} /></Button>
                    </Stack>
                    <Text>Tarea para hacer larga</Text>
                </Flex>
            </Box>
            <Box borderBottom='1px solid #61ABFF' w='90%'>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Stack direction='row'>
                        <Button
                            border='none'
                            borderRadius='10%'
                            h='1.5em'
                            bg='white'
                            color='green'><Icon as={CheckIcon} /></Button>
                        <Button
                            border='none'
                            borderRadius='10%'
                            h='1.5em'
                            bg='white'
                            color='red'
                        ><Icon as={CloseIcon} /></Button>
                    </Stack>
                    <Text>Tarea para hacer corta</Text>
                </Flex>
            </Box>
            <Box>
                <Button
                    bg='#FF5C7D'
                    color='white'
                    border='none'
                    h='25px'
                    fontWeight='bold'
                    borderRadius='5px'
                    my='1em'
                    cursor='pointer'
                >
                    Limpiar todo
                </Button>
            </Box>
        </Stack>
    )
}
