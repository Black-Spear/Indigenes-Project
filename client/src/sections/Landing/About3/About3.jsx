import React from 'react';
import {
  chakra,
  Grid,
  Box,
  Flex,
  SimpleGrid,
  Icon,
  Image,
} from '@chakra-ui/react';
import { FiExternalLink } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';

export function About3() {
  const { t } = useTranslation('en');

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0} py="10vh">
      <Grid
        alignItems="start"
        columns={{ base: 1, md: 2 }}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
      >
        <Box
          display={'flex'}
          alignContent="center"
          alignItems={'center'}
          flexDirection="column"
        >
          <Image
            src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80"
            alt="3 women looking at a laptop"
            fit="cover"
            w={{ base: '90%', md: 'full' }}
            h={{ base: 64, md: 'full' }}
            bg="gray.100"
            loading="lazy"
            opacity={1}
            borderRadius="2vh"
          />
        </Box>
      </Grid>

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
          {t('about3.supportText')}
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
          {t('about3.helpTitle')}
        </chakra.h1>
        <chakra.p
          pr={{ base: 0, lg: 16 }}
          mb={4}
          fontSize="lg"
          color="brand.600"
          _dark={{ color: 'gray.400' }}
          letterSpacing="wider"
        >
          {t('about3.helpText')}
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
            rounded="xl"
            bg="brand.600"
            _light={{ color: 'blackAlpha.500' }}
            _dark={{ color: 'whiteAlpha.800', bg: 'yellow.500' }}
            _hover={{
              bg: 'brand.700',
              _dark: { bg: 'brand.600' },
            }}
          >
            {t('about3.helpButton')}
            <Icon as={FiExternalLink} ml={2} />
          </chakra.a>
        </Box>
      </Flex>
    </SimpleGrid>
  );
}
