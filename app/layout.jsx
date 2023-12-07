"use client"

import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react"
import NavBar from "@/components/NavBar"

// Configuration of chakra
import { config, styles } from "@/lib/theme"

export default function RootLayout({ children }) {
  const theme = extendTheme({ styles, config })

  return (
    <html lang="en">
      <body>
        <ChakraProvider theme={theme}>
          <Container maxW="xl" pt="1rem">
            <NavBar />
            {children}
          </Container>
        </ChakraProvider>
      </body>
    </html>
  )
}
