import React from 'react'
import { Flex, Button, Box, HStack, Text, Link, Icon, Image } from '@chakra-ui/react'
import { Navbar, Footer } from '@mvr-studio/protochakra'
import { RiGithubLine } from 'react-icons/ri'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Navbar
        branding={
          <HStack>
            <Image src="/logo.svg" width="1.5rem" height="1.5rem" alt="ProtoChakra Logo" />
            <Text>ProtoChakra</Text>
          </HStack>
        }
      >
        <Button
          as="a"
          href="https://github.com/mvr-studio/protochakra"
          target="_blank"
          rel="noreferrer"
          variant="outline"
          leftIcon={<Icon as={RiGithubLine} />}
        >
          Star
        </Button>
        <Button as="a" href="mailto:team@mvr.studio?subject=ProtoChakra Contact" variant="outline">
          Contact
        </Button>
      </Navbar>
      <Box flex={1}>{children}</Box>
      <Footer
        // @ts-ignore
        copyrightOwner={
          <Text as="span">
            ProtoChakra. Developed by{' '}
            <Link as="a" href="https://mvr.studio" target="_blank" rel="noreferrer" color="blue.600">
              MVR Studio
            </Link>
            .
          </Text>
        }
        marginTop="4rem"
      />
    </Flex>
  )
}

export default Layout
