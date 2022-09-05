import React from 'react';
import { chakra, Box, Flex, SimpleGrid, Icon, Image } from '@chakra-ui/react';

import { FiExternalLink } from 'react-icons/fi';

export function About3() {
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} py="10vh">
      <Flex bg="brand.400">
        <Image
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
          alt="3 women looking at a laptop"
          fit="cover"
          w="full"
          h={{ base: 64, md: 'full' }}
          bg="gray.100"
          loading="lazy"
          opacity={0.4}
          borderRadius='2vh'
        />
      </Flex>
      <Flex
        direction="column"
        alignItems="start"
        justifyContent="center"
        px={{ base: 4, md: 8, lg: 20 }}
        py={24}
        zIndex={3}
      >
        <chakra.span
          color="brand.600"
          _dark={{ color: 'gray.300' }}
          fontSize="lg"
          textTransform="uppercase"
          fontWeight="extrabold"
        >
          Award winning support
        </chakra.span>
        <chakra.h1
          mb={4}
          fontSize={{ base: '4xl', md: '4xl', lg: '5xl' }}
          fontWeight="bold"
          color="brand.600"
          _dark={{ color: 'gray.300' }}
          lineHeight="shorter"
          textShadow="2px 0 currentcolor"
        >
          We&apos;re here to help
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color="brand.600"
          _dark={{ color: 'gray.400' }}
          letterSpacing="wider"
        >
          We are a platform that does all the heavy lifting for you. With just a
          few taps, you can invest in projects all around Tunisia by reaching
          out to them and provide insights or ask pre-sales questions through
          our chat function.
        </chakra.p>
        <Box display="inline-flex" rounded="md" shadow="lg">
          <chakra.a
            mt={2}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            px={5}
            py={3}
            border="solid transparent"
            fontWeight="bold"
            w="full"
            rounded="md"
            bg="brand.600"
            _light={{ color: 'blackAlpha.500' }}
            _dark={{ color: 'whiteAlpha.800', bg: 'yellow.500' }}

            
            
            _hover={{
              bg: 'brand.700',
              _dark: { bg: 'brand.600' },
            }}
          >
            Visit the Help Centre
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
