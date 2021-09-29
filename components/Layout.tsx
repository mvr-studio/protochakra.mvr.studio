import React from 'react'
import { Flex, Button, Box, HStack, Text, Link, Icon, Image } from '@chakra-ui/react'
import { Navbar, Footer } from '@mvr-studio/protochakra'
import { RiGithubLine, RiMailLine } from 'react-icons/ri'
import NextImage from 'next/image'
import LogoImage from '../public/logo.svg'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Navbar
        branding={
          <HStack>
            <NextImage src={LogoImage} width={28} height={28} alt="ProtoChakra Logo" unoptimized />
            <Text>ProtoChakra</Text>
          </HStack>
        }
      >
        <Button
          as="a"
          href="https://github.com/mvr-studio/protochakra"
          target="_blank"
          rel="noreferrer"
          variant="ghost"
          leftIcon={<Icon as={RiGithubLine} />}
        >
          Star
        </Button>
        <Button
          leftIcon={<Icon as={RiMailLine} />}
          as="a"
          href="mailto:team@mvr.studio?subject=ProtoChakra Contact"
          variant="outline"
        >
          Contact
        </Button>
      </Navbar>
      <Box flex={1}>{children}</Box>
      <Footer
        // @ts-ignore
        copyrightOwner={
          <Text as="span">
            ProtoChakra. Developed by{' '}
            <Link as="a" href="https://mvr.studio" target="_blank" rel="noreferrer" color="primary.600">
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
