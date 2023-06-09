import React from 'react';
import { Box, chakra, Heading, SimpleGrid, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 1,
      bounce: 0.3,
    },
  },
  closed: { opacity: 0, scale: 0.5 },
};

export const About = () => {
  const MotionGrid = motion(SimpleGrid);
  const { t } = useTranslation();

  return (
    <Box maxW={'7xl'} px={8} mx="auto" id="about">
      <Heading
        as="h1"
        size="3xl"
        fontWeight="bold"
        maxW="48rem"
        mx="auto"
        lineHeight="1.2"
        letterSpacing="tight"
        textAlign="center"
        py={10}
      >
        {t('about.about')} <span>{t('about.us')}</span>
      </Heading>
      <MotionGrid
        alignItems="start"
        columns={{ base: 1, md: 2 }}
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
        initial="closed"
        whileInView="open"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
      >
        <Box mt={'12vh'}>
          <chakra.h2
            mb={4}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            textAlign={{ base: 'center', md: 'left' }}
            color="gray.900"
            _dark={{ color: 'gray.400' }}
            lineHeight={{ md: 'shorter' }}
          >
            {t('about.investmentTitle')}
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: 'center', sm: 'left' }}
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            fontSize={{ md: 'lg' }}
          >
            {t('about.investmentText')}
          </chakra.p>
        </Box>
        <Box
          // ! this is the picture number 1
          w="full"
          h="full"
        >
          <Image
            src="https://media.istockphoto.com/videos/farmer-shaking-hands-with-an-executive-video-id647270542?s=640x640"
            objectFit="cover"
            borderRadius={'2xl'}
          ></Image>
        </Box>
      </MotionGrid>

      <MotionGrid
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        flexDirection="column-reverse"
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
        initial="closed" //second box animation
        whileInView="open"
        viewport={{ once: true }}
        variants={variants}
      >
        <Box order={{ base: 'initial', md: 2 }}>
          <chakra.h2
            mb={4}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            letterSpacing="tight"
            textAlign={{ base: 'center', md: 'left' }}
            color="gray.900"
            _dark={{ color: 'gray.400' }}
            lineHeight={{ md: 'shorter' }}
          >
            {t('about.technologyTitle')}
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: 'center', sm: 'left' }}
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            fontSize={{ md: 'lg' }}
          >
            {t('about.technologyText')}
          </chakra.p>
        </Box>
        <Box
          // ! this is the picture number 2
          w="full"
          h="full"
        >
          <Image
            src="https://chinaobservers.eu/wp-content/uploads/2022/03/germany.jpg"
            objectFit="cover"
            borderRadius={'2xl'}
          ></Image>
        </Box>
      </MotionGrid>
    </Box>
  );
};
