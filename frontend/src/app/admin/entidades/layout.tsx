import Sidebar from '@/components/sidebar/Sidebar'
import { Box, Flex } from '@chakra-ui/react'
import React from 'react'

export default function layout({children}) {
  return (
    <Flex pos={'relative'} w={'100%'}>
        <Sidebar/>
        {children}
    </Flex>
  )
}
