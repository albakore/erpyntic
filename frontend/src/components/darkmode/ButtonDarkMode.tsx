import { Button, IconButton, useColorMode } from "@chakra-ui/react"
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react"
import React from "react"

export default function ButtonDarkMode() {
    const { colorMode, toggleColorMode } = useColorMode()
    return (
      <header>
        <IconButton onClick={toggleColorMode} aria-label={colorMode}>
          {colorMode === 'light' ? <IconMoonFilled/> : <IconSunFilled/>}
        </IconButton>
      </header>
    )
  }