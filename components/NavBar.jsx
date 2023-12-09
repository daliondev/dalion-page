"use client"

// Chakra components
import {
  Flex,
  Box,
  Spacer,
  Heading,
  Button,
  Text,
  useColorMode,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Image,
  Stack,
} from "@chakra-ui/react"

// Icons
import { MoonIcon, SunIcon, HamburgerIcon } from "@chakra-ui/icons"
import { IoLogoGithub } from "react-icons/io"
import Link from "next/link"

function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode()

  const titleColor = useColorModeValue("#232524", "white")

  return (
    <Flex alignItems="center" mb="2rem">
      <Box>
        <Flex alignItems="center" gap="2">
          <Image
            src="https://avatars.githubusercontent.com/u/111100025?v=4"
            borderRadius="full"
            boxSize="50px"
            alt="daliondev"
          />
          <Link href="/" prefetch={false}>
            <Heading size="md">
              <Flex color="#fb8500">
                <Text color={titleColor}>Dalion</Text>
                <p>.dev</p>
              </Flex>
            </Heading>
          </Link>
        </Flex>
      </Box>
      <Spacer />

      <Box display={{ sm: "inherit", base: "none" }}>
        <Stack>
          <Link href="/works" prefetch={false}>
            Works
          </Link>
          <Link href="/about" prefetch={false}>
            About
          </Link>

          <Button>
            <Link href="https://github.com/daliondev" target="_blank">
              <Flex alignItems="center" gap="2">
                <IoLogoGithub />
                <Text>Source</Text>
              </Flex>
            </Link>
          </Button>
        </Stack>
        <Spacer />
        <Button
          onClick={toggleColorMode}
          bg={colorMode === "dark" ? "#ff9f32" : "#373B39"}
          ml="2rem"
          _hover=""
        >
          {colorMode === "dark" ? (
            <SunIcon color="white" />
          ) : (
            <MoonIcon color="white" />
          )}
        </Button>
      </Box>

      <Box display={{ sm: "none" }}>
        <Button
          onClick={toggleColorMode}
          bg={colorMode === "dark" ? "#ff9f32" : "#373B39"}
          mr="1rem"
          _hover=""
          size="sm"
        >
          {colorMode === "dark" ? (
            <SunIcon color="white" />
          ) : (
            <MoonIcon color="white" />
          )}
        </Button>
        <Menu isLazy id="navbar-menu">
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
            size="sm"
            color="white"
            bg="#353434"
          />

          <MenuList color="white" bg="#353434">
            <MenuItem
              as={Link}
              href="/works"
              bg="transparent"
              mb="2"
              prefetch={false}
            >
              Works
            </MenuItem>
            <MenuItem
              as={Link}
              href="/about"
              bg="transparent"
              mb="2"
              prefetch={false}
            >
              About
            </MenuItem>
            <MenuItem
              as={Link}
              href="https://github.com/daliondev"
              bg="transparent"
              prefetch={false}
            >
              <Flex alignItems="center" gap="2">
                Source
                <IoLogoGithub />
              </Flex>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  )
}

export default NavBar
