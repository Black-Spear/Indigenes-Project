import React from 'react'
import { Hero } from '../sections/Landing/Hero/Hero'
import Map from '../sections/Landing/Map/Map'
import { Pricing } from '../sections/Landing/Pricing/Pricing'
import { About } from '../sections/Landing/About/About'
import { Feature } from '../sections/Landing/Features/Feature'
import { Box } from '@chakra-ui/react'
import Contact from '../sections/Landing/Contact/Contact'
const Landing = () => {
  const colors = "#1a202c"
  return (
    <>
      <Hero />
      <Box bg="gray.50" _dark={{ bg: colors }}>
      <Map />
      <About />
      <Feature />
      </Box>
      <Box bg="gray.100" _dark={{ bg: "blackAlpha.700" }}>
      <Pricing />
      <Contact />
      </Box>
    </>
  )
}

export default Landing