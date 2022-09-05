import React from 'react';
import {
  chakra,
  Box,
  GridItem,
  Button,
  Center,
  Flex,
  Icon,
  SimpleGrid,
  VisuallyHidden,
  Input,
  useColorModeValue
} from '@chakra-ui/react';
import { Features2 } from '../Features2/Features2';

export function About2() {
  return (
    <Box px={8} py={24} mx="auto">
      <SimpleGrid
        alignItems="center"
        w={{ base: 'full', xl: 11 / 12 }}
        columns={{ base: 1, lg: 11 }}
        gap={{ base: 0, lg: 24 }}
        mx="auto"
      >
        <GridItem
          colSpan={{ base: 'auto', lg: 7 }}
          textAlign={{ base: 'center', lg: 'left' }}
        >
          <chakra.h1
            mb={4}
            fontSize={{ base: '3xl', md: '4xl' }}
            fontWeight="bold"
            lineHeight={{ base: 'shorter', md: 'none' }}
            color="gray.900"
            _dark={{ color: 'gray.200' }}
            letterSpacing={{ base: 'normal', md: 'normal' }}
          >
            What does it mean to be part of Indigenes™ ?
          </chakra.h1>
          <chakra.p
            mb={{ base: 10, md: 4 }}
            fontSize={{ base: 'lg', md: 'xl' }}
            fontWeight="thin"
            color={useColorModeValue('blackAlpha.600', 'whiteAlpha.800')}
            letterSpacing="wider"
          >
            Reaching out to a project is simple and can be done in just a few
            minutes !<br />
            Plus, we help you make more money by reducing risk using analysis of
            projects and guidance from our specialized unit.
          </chakra.p>
        </GridItem>
        <GridItem colSpan={{ base: 'auto', md: 4 }}>
          <Box>
            <Features2 />
          </Box>
        </GridItem>
      </SimpleGrid>
    </Box>
  );
}
