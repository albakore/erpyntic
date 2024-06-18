'use client'
import { Box, Button, Divider, Flex, IconButton, Input, InputGroup, InputRightElement, Link, Text, VStack } from '@chakra-ui/react'
import { IconChevronRight, IconPlugConnectedX, IconZoom } from '@tabler/icons-react'
import type { ItemEntidadSidebar } from './SidebarEntidadesTypes'
import React from 'react'

import css from './SidebarStyle.module.css'

export default function Sidebar({lista_entidades} : {lista_entidades : ItemEntidadSidebar[]}) {
  const [entidades, setEntidades] = React.useState(Map.groupBy(lista_entidades, ({ categoria }) => categoria))

  const onChangeHandler = (e) => {
    const nueva_lista = lista_entidades.filter((item) => item.nombre.toLowerCase().includes(e.target.value.toLowerCase()))
    setEntidades(Map.groupBy(nueva_lista, ({ categoria }) => categoria))
  }

  return (
    <VStack bg={'white'} _dark={{ bg: 'gray.900' }}>
      <VStack w={'240px'} h={'calc(100svh - 60px)'} p={3} align={'stretch'}>
        <Box>
          <InputGroup h={'100%'}>
            <Input size={'sm'} borderRadius={8} onChange={onChangeHandler}/>
            <InputRightElement w={'auto'} h={'inherit'}>
              <IconButton aria-label='buscar' size={'xs'} right={1} variant={'ghost'}>
                <IconZoom size={'15px'} />
              </IconButton>
            </InputRightElement>

          </InputGroup>
        </Box>
        <Box
          overflowY={'auto'}
          mt={2}
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
              Array.from(entidades).map(([key, value]) => (
                <>
                  <Box bg={'white'} _dark={{bg:'gray.900'}} position={'sticky'} top={0} zIndex={1000}>
                    <Text fontSize={'12px'} fontWeight={600}>{key}</Text>
                    <Divider />
                  </Box>
                  {
                    value.map((item, index) => {

                      if (item.generada){
                        return (
                          <Button as={Link} href={'/admin/entidades/'+item.id} className={css.sidebarItem} key={index} justifyContent={'space-between'} size={'xs'} variant={'ghost'}>
                            <Text fontWeight={400}>{item.nombre}</Text>
                            <IconChevronRight className={css.IconChevronRight_sidebar} size={'12px'} />
                            
                          </Button>
                        )
                      }

                      return (
                        <Button className={css.sidebarItem} key={index} justifyContent={'space-between'} size={'xs'} variant={'ghost'} colorScheme={'red'}>
                          <Text fontWeight={400}>{item.nombre}</Text>
                          <IconPlugConnectedX size={'12px'} />
                        </Button>
                      )
                    })
                  }
                  <br/>
                </>
              ))

            }

          </Flex>
        </Box>
      </VStack>
    </VStack>
  )
}
