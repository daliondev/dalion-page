"use client"

import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react"
import NavBar from "@/components/NavBar"
import { mode } from "@chakra-ui/theme-tools"

export default function RootLayout({ children }) {
  const styles = {
    global: (props) => ({
      body: {
        // Mode --> light, Dark
        bg: mode("#e9e9e3", "#232524")(props),
      },
    }),
  }

  const theme = extendTheme({ styles })

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
