"use client"

import { ChakraProvider, Container, extendTheme } from "@chakra-ui/react"
import NavBar from "@/components/NavBar"

// Configuration of chakra
import { config, styles } from "@/lib/theme"

export default function RootLayout({ children }) {
  const theme = extendTheme({ styles, config })

  return (
    <html lang="en" dir="ltr">
      <meta charSet="utf-8" />
      <meta name="author" content="Daliondev" />
      <meta
        name="description"
        content="portfolio of daliondev, works and more content about daliondev"
      />
      <meta
        name="keywords"
        content="daliondev, Daliondev, Dalion developer, daliondev.online, daliondev portfolio"
      />
      <link rel="icon" href="logo.png" sizes="any" />

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
