'use client'
import { Box, Button, ButtonGroup, Container, Flex, FormControl, FormLabel, HStack, IconButton, Input, Select, Spacer, Text, useDisclosure, VStack } from '@chakra-ui/react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import { IconPencilPlus, IconPlus, IconTrashX } from '@tabler/icons-react'
import React, { BaseSyntheticEvent } from 'react'

type AtributoData = {
  nombre: string
  descripcion: string
  tipo: string
  categoria: string
}

type PropsAtributoContext = {
  atributos: AtributoData[],
  borrarAtributo: (e: BaseSyntheticEvent) => any | Promise<any>,
  crearAtributo: (e: BaseSyntheticEvent) => any | Promise<any>,
  modificarAtributo: (e: BaseSyntheticEvent, attIndex: number) => any | Promise<any>,
}

const atributosStore = React.createContext<PropsAtributoContext>({
  atributos: [],
  borrarAtributo: (e) => { },
  crearAtributo: (e) => { },
  modificarAtributo: (e) => { },
})

function useAtributos(): PropsAtributoContext {
  return React.useContext(atributosStore)
}



export default function CrearPage() {
  const [atributos, setAtributos] = React.useState([])

  const crearAtributo = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    const formulario = new FormData(e.target)
    const objeto = Object.fromEntries(formulario.entries())
    setAtributos([...atributos, objeto])
  }

  const modificarAtributo = (e: BaseSyntheticEvent, attIndex: number) => {
    e.preventDefault()
    const formulario = new FormData(e.target)
    const objeto = Object.fromEntries(formulario.entries())
    let nueva_lista = [...atributos]
    nueva_lista[attIndex] = objeto
    setAtributos(nueva_lista)
  }

  const borrarAtributo = (indice) => {
    console.log(indice)
    setAtributos(atributos.filter((item, index) => index != indice))
  }

  return (
    <atributosStore.Provider value={{ atributos, crearAtributo, borrarAtributo, modificarAtributo }}>
      <Container maxW={'6xl'}>
        <Box>
          <Text as='h1' fontSize={'3xl'}>Crear Entidad</Text>
          <p>Esto creara una nueva <b>entidad</b> en la base de datos.</p>
        </Box>

        <Flex gap={5} w={'full'} mt={5}>
          <Flex direction={'column'} gap={2}>
            <Text as='h3' fontSize={'xl'}>General</Text>
            <form action="">
              <VStack width={'300px'}>
                <FormControl>
                  <FormLabel fontSize={'sm'} m={0}>Nombre descriptivo</FormLabel>
                  <Input size={'sm'} borderRadius={'md'} />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={'sm'} m={0}>Nombre de tabla</FormLabel>
                  <Input size={'sm'} borderRadius={'md'} />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={'sm'} m={0}>Prefijo</FormLabel>
                  <Input size={'sm'} borderRadius={'md'} />
                </FormControl>

                <FormControl>
                  <FormLabel fontSize={'sm'} m={0}>Categoria</FormLabel>
                  <Input size={'sm'} borderRadius={'md'} />
                </FormControl>
              </VStack>
            </form>
          </Flex>
          <TablaCreacionAtributos />
        </Flex>

      </Container>
    </atributosStore.Provider>
  )
}

function TablaCreacionAtributos() {
  // const [listaAtributos, setlistaAtributos] = React.useState([])
  const { atributos } = useAtributos()


  return (
    <TableContainer w={'inherit'}>
      <HStack mb={1}>
        <Text as='h3' fontSize={'xl'}>Atributos</Text>
        <Spacer />
        <ButtonCrearAtributo />
      </HStack>
      <Table variant='simple' m={0}>
        <Thead >
          <Tr>
            <Th p={1}>Nombre</Th>
            <Th p={1}>Tipo</Th>
            <Th p={1}>Grupo</Th>
            <Th p={1}>Descripcion</Th>
            <Th p={1}>Accion</Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            atributos?.map((item, index) => (
              <NuevoAtributo data={item} key={index} arrayIndex={index} />
            ))
          }
        </Tbody>

      </Table>
    </TableContainer>
  )
}

function NuevoAtributo({ data, arrayIndex }: { data: AtributoData, arrayIndex: number }) {
  return (
    <Tr>
      <Td p={0}>{data.nombre}</Td>
      <Td p={0}>{data.descripcion}</Td>
      <Td p={0}>{data.tipo}</Td>
      <Td p={0}>{data.categoria}</Td>
      <Td p={0} w={'100px'}>
        <ButtonGroup variant={'ghost'} spacing='2'>
          <ButtonModificarAtributo dataAtributo={data} indexAtributo={arrayIndex} />
          <ButtonBorrarAtributo indexItem={arrayIndex} />
        </ButtonGroup>
      </Td>
    </Tr>
  )
}

function ButtonCrearAtributo() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { crearAtributo } = useAtributos()

  const handleForm = async (e: BaseSyntheticEvent) => {
    crearAtributo(e)
    onClose()
  }

  return (
    <>
      <Button leftIcon={<IconPlus />} onClick={onOpen} size={'sm'}>Nuevo atributo</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crear atributo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormAtributo accion={handleForm} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant='ghost' type='submit' form='creacion_att_form'>Crear</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function ButtonModificarAtributo({ dataAtributo, indexAtributo }) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { modificarAtributo } = useAtributos()

  const handleForm = async (e: BaseSyntheticEvent, indiceAtributo) => {
    modificarAtributo(e, indiceAtributo)
    onClose()
  }

  return (
    <>
      <IconButton aria-label='modificar' colorScheme='green' size={'sm'} onClick={onOpen}><IconPencilPlus /></IconButton>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modificar atributo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormAtributo data={dataAtributo} accion={(e) => handleForm(e, indexAtributo)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
            <Button variant='ghost' type='submit' form='creacion_att_form'>Editar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

function ButtonBorrarAtributo({ indexItem }) {
  const { borrarAtributo } = useAtributos()

  return (
    <IconButton aria-label='remove' colorScheme='red' size={'sm'} onClick={() => borrarAtributo(indexItem)}><IconTrashX /></IconButton>
  )
}


type TypeFormAtributo = {
  data?: AtributoData
  accion: (e: BaseSyntheticEvent) => any
}

function FormAtributo({ data, accion }: TypeFormAtributo) {
  return (
    <form id='creacion_att_form' onSubmit={accion}>
      <VStack mt={4}>
        <FormControl>
          <FormLabel fontSize={'sm'} m={0}>Nombre</FormLabel>
          <small>Es el que tendra en la base de datos</small>
          <Input size={'sm'} defaultValue={data?.nombre} name='nombre' />
        </FormControl>

        <FormControl>
          <FormLabel fontSize={'sm'} m={0}>Descripcion</FormLabel>
          <small>Es el que se mostrara al consultar la informacion</small>
          <Input size={'sm'} defaultValue={data?.descripcion} name='descripcion' />
        </FormControl>

        <FormControl>
          <FormLabel fontSize={'sm'} m={0}>Tipo de dato</FormLabel>
          <small>La informacion que sera guardada en este campo</small>
          <Select placeholder='...' defaultValue={data?.tipo} name='tipo'>
            <option value='int'>Numero</option>
            <option value='str'>Texto</option>
          </Select>
        </FormControl>

        <FormControl>
          <FormLabel fontSize={'sm'} m={0}>Grupo</FormLabel>
          <small>Grupo de campo</small>
          <Input size={'sm'} defaultValue={data?.categoria} name='categoria' />
        </FormControl>
      </VStack>
    </form>
  )
}