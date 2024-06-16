'use client'

import { ChakraProvider, extendTheme,defineStyle } from '@chakra-ui/react'
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const theme = extendTheme({
    // config: {
    //     initialColorMode: 'dark',
    //     useSystemColorMode: false,
    // },
    styles: {
        global: {
            '*': {
                fontFamily: inter.style.fontFamily
            }
        }
    },

})

export function Providers({ children }: { children: React.ReactNode }) {
    return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}