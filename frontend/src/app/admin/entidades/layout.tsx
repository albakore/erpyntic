import Sidebar from '@/components/sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import mockentidad from '../../../components/sidebar/mockSidebarEntidades.json'

export default function layout({children}) {
  return (
    <Flex pos={'relative'} w={'100%'}>
        <Sidebar lista_entidades={mockentidad}/>
        {children}
    </Flex>
  )
}
