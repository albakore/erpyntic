import { Box, Button, Flex, IconButton, Input, InputGroup, InputRightElement, Link, Text, VStack } from '@chakra-ui/react'
import { IconChevronRight, IconZoom } from '@tabler/icons-react'
import React from 'react'
import mockentidad from './mockSidebarEntidades.json'
import css from './SidebarStyle.module.css'

export default function Sidebar() {
  return (
    <VStack bg={'white'} _dark={{ bg: 'gray.900' }}>
      <VStack w={'260px'} h={'calc(100svh - 60px)'} p={3} align={'stretch'}>
        <Box>
          <InputGroup h={'100%'}>
            <Input size={'sm'} borderRadius={5} />
            <InputRightElement w={'auto'} h={'inherit'}>
              <IconButton aria-label='buscar' size={'xs'} right={1} variant={'ghost'}>
                <IconZoom size={'15px'} />
              </IconButton>
            </InputRightElement>

          </InputGroup>
        </Box>
        <Box
          overflowY={'auto'}
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray',
              borderRadius: '24px',
            },
          }}
        >
          <Flex direction='column' gap={1} w={'full'}
          >
            {
              mockentidad.map((item, index) => (
                <Button as={Link} href={'#'} className={css.sidebarItem} key={index} justifyContent={'space-between'} size={'sm'} variant={'ghost'}>
                  <Text fontWeight={300}>{item.nombre}</Text>
                  <IconChevronRight className={css.IconChevronRight_sidebar} size={'12px'} />
                </Button>
              ))
            }
          </Flex>
        </Box>
      </VStack>
    </VStack>
  )
}
