import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Icon, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { abriCerrar } from '../../redux/btnmenuReducer/btnmenuReducer'


export const ButtonMenu = () => {
    const disptach = useDispatch()
    const {onOpen} = useDisclosure()
    return (
        <Icon 
        w={30} 
        h={30} 
        as={ArrowForwardIcon}
        bg='white'
        borderRadius='100%'
        color='#FF4C53'
        ml={30}
        onClick={()=>disptach(abriCerrar())}
        cursor='pointer'
        ></Icon>
    )
}
