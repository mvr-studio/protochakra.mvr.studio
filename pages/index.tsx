import React from 'react'
import type { NextPage } from 'next'
import { Button, HStack, Box, Container, SimpleGrid, Heading, Text, Icon, Center, Flex, Image } from '@chakra-ui/react'
import { CallToAction, Hero, Card } from '@mvr-studio/protochakra'
import Layout from '../components/Layout'
import { RiCodeSSlashFill, RiFlashlightLine, RiHeart2Fill, RiBook2Line, RiGithubLine } from 'react-icons/ri'
import Title from '../components/Title'
import HeroImage from '../public/hero.png'
import NextImage from 'next/image'

const DOCUMENTATION_URL = 'https://protochakra-docs.mvr.studio/'
const GITHUB_REPO_URL = 'https://github.com/mvr-studio/protochakra'

const Home: NextPage = () => {
  return (
    <Layout>
      <Title>Less Code components library</Title>
      <Hero
        heading="Prototype fast with Chakra"
        content="Use our Less Code & opinionated Chakra UI components to speed the Frontend Development with React up."
        marginTop="4rem"
        Addons={() => (
          <Flex display={['block', 'block', 'flex']}>
            <Button
              display="flex"
              as="a"
              href={DOCUMENTATION_URL}
              target="_blank"
              rel="noreferrer"
              size="lg"
              colorScheme="primary"
              leftIcon={<Icon as={RiBook2Line} />}
            >
              Documentation
            </Button>
            <Button
              display="flex"
              as="a"
              href={GITHUB_REPO_URL}
              target="_blank"
              rel="noreferrer"
              size="lg"
              leftIcon={<Icon as={RiGithubLine} />}
              marginLeft={[0, 0, '1rem']}
              marginTop={['1rem', '1rem', 0]}
            >
              GitHub Repository
            </Button>
          </Flex>
        )}
      >
        <NextImage src={HeroImage} width={360} height={360} alt="Hero Illustration" unoptimized />
      </Hero>
      <Box backgroundColor="primary.50" paddingY="6rem" marginTop="6rem">
        <Container maxWidth="container.xl">
          <SimpleGrid columns={[1, 1, 3]} gridGap="2rem">
            <Card backgroundColor="white" padding="1.5rem 1rem">
              <Center textAlign="center" flexDirection="column" height="100%">
                <HStack>
                  <Icon as={RiCodeSSlashFill} boxSize="1.5rem" />
                  <Heading size="md">Less Code</Heading>
                </HStack>
                <Text marginTop="1rem">
                  It&apos;s meant to easen up your daily work so you don&apos;t have to redevelop the repeating
                  components.
                </Text>
              </Center>
            </Card>
            <Card backgroundColor="white" padding="1.5rem 1rem">
              <Center textAlign="center" flexDirection="column" height="100%">
                <HStack>
                  <Icon as={RiFlashlightLine} boxSize="1.5rem" />
                  <Heading size="md">Rapid Development</Heading>
                </HStack>
                <Text marginTop="1rem">We focus on enabling people to ship Prooves of Concepts and MVPs faster</Text>
              </Center>
            </Card>
            <Card backgroundColor="white" padding="1.5rem 1rem">
              <Center textAlign="center" flexDirection="column" height="100%">
                <HStack>
                  <Icon as={RiHeart2Fill} boxSize="1.5rem" />
                  <Heading size="md">Chakra UI in its heart</Heading>
                </HStack>
                <Text marginTop="1rem">We created the library to live in a perfect balance with Chakra UI itself.</Text>
              </Center>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>
      <CallToAction
        heading="Give it a try"
        description="Create a new app with ProtoChakra or add it to existing Chakra UI app."
        paddingY="6rem"
      >
        <Button>Open Documentation</Button>
      </CallToAction>
    </Layout>
  )
}

export default Home
