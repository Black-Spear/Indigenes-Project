import {
  Box,
  Button,
 
  Heading,

  Stack,
  Text,

  
  LightMode,
  Flex,
  Center,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react'
import * as React from 'react'
import { Link as RLink }  from 'react-router-dom'

import "../Map/style.css"
import vid from "../../../assets/video/cover.mp4"

export const Hero = () => {
  return (

    <Box>
      <video
            autoPlay
            loop
          >
            <source src={vid} type="video/mp4" ></source>
          </video>
      <Flex as="section" color="white" >
        <Center h="100vh" w='100%'>
        <Box
          maxW={{
            base: 'xl',
            md: '7xl',
          }}
          mx="auto"
          px={{
            base: '6',
            md: '8',
          }}
        >
          
          <Box textAlign="center" >
          
            <Heading
              as="h1"
              size="3xl"
              fontWeight="bold"
              maxW="48rem"
              mx="auto"
              lineHeight="1.2"
              letterSpacing="tight"
            >
              Earn <span>Benefits</span> from investing in projects in <span>Tunisia</span>
            </Heading>
            <Text fontSize="xl" mt="4" maxW="xl" mx="auto" opacity={0.5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore
            </Text>
          </Box>

          <Stack
            justify="center"
            direction={{
              base: 'column',
              md: 'row',
            }}
            mt="10"
            mb="20"
            spacing="4"
          >
            <LightMode>
              <Button
                as="a"
                href="#"
                size="lg"
                color="blackAlpha.900"
                colorScheme="yellow"
                px="8"
                fontWeight="bold"
                fontSize="md"
              >
                <RLink to='/projects'>Get started free</RLink>
                
              </Button>
            </LightMode>
          </Stack>
          </Box>
        </Center>
        </Flex>
        <Container py={5} maxW={'container.lg'}>
      <Grid id="stats" paddingTop={'10vh'}
        templateColumns={{
          base: 'repeat(1, 1fr)',
          sm: 'repeat(2, 1fr)',
          md: 'repeat(4, 1fr)',
        }}
        mb='5vh'
        gap={6}>
        <GridItem w="100%" colSpan={{ base: 1, sm: 2, md: 2 }}mr={'5vw'} >
          <Heading width={'150%'} mb={3} >Safe <span fontWeight=''>Investment</span><br/></Heading>
          <Heading width={'150%'} >Accessible to everyone</Heading>
        </GridItem>
        <GridItem w="100%"  ml={'4vw'}>
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
             <span>20%</span> 
            </Text>
            <Box fontSize={'sm'}>
              Description for the number. People always pay attention to
              numbers.
            </Box>
          </Flex>
        </GridItem>
        <GridItem w="100%"  ml={'4vw'}>
          <Flex flexDirection={'column'}>
            <Text fontSize={'4xl'} fontWeight={'bold'}>
            <span>20%</span> 
            </Text>
            <Box fontSize={'sm'}>
              Description for the number. People always pay attention to
              numbers.
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Container>
    </Box>

  )
}
