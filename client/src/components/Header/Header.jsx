import {
  Box,
  Button,
  Flex,
  HStack,
  VisuallyHidden,
  LightMode,
  useColorModeValue
} from '@chakra-ui/react'
import * as React from 'react'
import { Logo } from './Logo'
import { MobileNav } from './MobileNav'
import { NavLink } from './NavLink'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'
import './nav.css'

export const Header = () => {
  function reveal() {
    var header = document.querySelectorAll(".header");
  
    for (var i = 0; i < header.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = header[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
          header[i].classList.add("active");
      } else {
        header[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  return (
    <Flex justify="space-between">
      
      <Flex as="header" className='header' style={{backdropFilter : 'blur(3px)'}} position='fixed'justify='center' rowGap={22} w='100vw'>
        <Box
          maxW="7xl"  
          mx="8"
          py="4"
          px={{
            base: '6 ',
            md: '8',
          }}
        >
          <Flex as="nav" gap='20vw'>
            <HStack spacing="8">
              <Box as="a" href="/" rel="home">
                <VisuallyHidden>Indigenes</VisuallyHidden>
                <Logo h="10"/>
              </Box>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              > 
              <NavLink.Desktop href="#"> About </NavLink.Desktop>
              <NavLink.Desktop href="#"> Features </NavLink.Desktop>
              <NavLink.Desktop href="#"> Pricing </NavLink.Desktop>
              <NavLink.Desktop href="#"> Contact </NavLink.Desktop>
              </HStack>
            
              </Flex>
              <Flex alignItems="center" justify="flex-end">
              <HStack
                spacing="3"
                display={{
                  base: "none",
                  md: "flex",
                }}>
                  <Box w='4vw'><NavLink.Desktop><Link to="/signin">Sign in</Link>  </NavLink.Desktop></Box>
                   
                <LightMode>
                <Link to="/signup"> <Button colorScheme="yellow" rounded="5" >
                  Sign up
                </Button></Link>
               
                </LightMode>
                <ColorModeSwitcher/>
                </HStack>
                <Box ml="5">
                <MobileNav />
              </Box>
              </Flex>
            </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
