'use client'
import { Box, Button, Flex, Heading, HStack, Spacer, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/next-js'
import React from 'react'
import ButtonDarkMode from '../darkmode/ButtonDarkMode'

export default function Header() {
  return (
    <Box as='header' pos={'sticky'} top={0}  boxShadow={'sm'}>
        <Flex as='nav' align={'center'} paddingInline={5} height={'60px'}>
            <Text as={'h1'} fontSize={'xl'} fontWeight={700}>ERPyntic</Text>
            <Spacer/>
            <HStack gap={5}>
                <Link href={'#'}>Entidades</Link>
                <Button as={Link} href={'#'}>Crear</Button>
                <ButtonDarkMode/>
            </HStack>
        </Flex>
    </Box>
  )
}
