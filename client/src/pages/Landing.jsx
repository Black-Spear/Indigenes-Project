import React from 'react'
import { Hero } from '../sections/Landing/Hero/Hero'
import Map from '../sections/Landing/Map/Map'
import { Pricing } from '../sections/Landing/Pricing/Pricing'
import { About } from '../sections/Landing/About/About'
import { Feature } from '../sections/Landing/Features/Feature'
import { Box, Divider, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import Contact from '../sections/Landing/Contact/Contact'
const Landing = () => {
  const colors = "#1a202c"
  return (
    <>
      <Hero />
      <Box bg="gray.50" _dark={{ bg: colors }} mt='3%'>
      <Map />
      <HStack align={'center'} justify='center' spacing={6}>
          <Divider w={'40%'}></Divider><Text color={useColorModeValue('gray.500','gray.600')}>Who we are ?</Text><Divider w={'40%'}></Divider>
      </HStack>
      <About />
      <HStack align={'center'} justify='center' spacing={6}>
          <Divider w={'40%'}></Divider><Text color={useColorModeValue('gray.500','gray.600')}>What do we do ?</Text><Divider w={'40%'}></Divider>
      </HStack>
      <Feature />

      </Box>
      <Box bg="gray.50" _dark={{ bg: "gray.800" }}>
      <HStack align={'center'} justify='center' spacing={6}>
          <Divider w={'30%'}></Divider><Text color={useColorModeValue('gray.500','gray.600')}>Do you want to be a member?</Text><Divider w={'30%'}></Divider>
      </HStack>
      <Pricing />
      <HStack align={'center'} justify='center' spacing={6}>
          <Divider w={'40%'}></Divider><Text color={useColorModeValue('gray.500','gray.600')}>Need Help ?</Text><Divider w={'40%'}></Divider>
      </HStack>
      <Contact />
      </Box>
    </>
  )
}

export default Landing