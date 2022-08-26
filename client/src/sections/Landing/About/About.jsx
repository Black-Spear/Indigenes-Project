import React from 'react';
import { Box, Button, chakra, Heading, SimpleGrid } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
export const About = () => {
  const MotionGrid = motion(SimpleGrid);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const { ref, inView } = useInView({ threshold: 0.1 }); //variable of useInView declaration
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({});
    }

    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  }, [animation, inView]);

  return (
    <Box ref={ref} maxW={'7xl'} px={8} mx="auto" id='about'>
      <MotionHeading
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
        About <span>us</span>
      </MotionHeading>
      <MotionGrid
        alignItems="start"
        columns={{ base: 1, md: 2 }}
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
        initial={{ opacity: 0, x: '-150vw', scale: 0.5 }} //First box animation
        animate={{ opacity: 1, x: 0, scale: 1 }} //foufou kesa7 #t3alm ya balti
        transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
      >
        <Box>
          <chakra.h2
            mb={4}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            textAlign={{ base: 'center', md: 'left' }}
            color="gray.900"
            _dark={{ color: 'gray.400' }}
            lineHeight={{ md: 'shorter' }}
          >
            Clear overview for efficient tracking
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: 'center', sm: 'left' }}
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            fontSize={{ md: 'lg' }}
          >
            Handle your subscriptions and transactions efficiently with the
            clear overview in Dashboard. Features like the smart search option
            allow you to quickly find any data youâ€™re looking for.
          </chakra.p>
          <MotionButton
            w={{ base: 'full', sm: 'auto' }}
            size="lg"
            bg="gray.900"
            _dark={{ bg: 'gray.700' }}
            _hover={{ bg: 'gray.700', _dark: { bg: 'gray.600' } }}
            color="gray.100"
            as="a"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More
          </MotionButton>
        </Box>
        <Box
          w="full"
          h="full"
          py={48}
          bg="gray.200"
          _dark={{ bg: 'gray.700' }}
        ></Box>
      </MotionGrid>

      <MotionGrid
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        flexDirection="column-reverse"
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
        initial={{ opacity: 0, x: '-150vw', scale: 0.5 }} //second box animation
        animate={{ opacity: 1, x: 0, scale: 1 }} //foufou kesa7 #t3alm ya balti
        transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
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
            Decide how you integrate Payments
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: 'center', sm: 'left' }}
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            fontSize={{ md: 'lg' }}
          >
            Love to code? Next to our ready-made and free plugins you can use
            our expansive yet simple API; decide how you integrate Payments and
            build advanced and reliable products yourself from scratch.
          </chakra.p>
          <MotionButton
            w={{ base: 'full', sm: 'auto' }}
            size="lg"
            bg="gray.900"
            _dark={{ bg: 'gray.700' }}
            _hover={{ bg: 'gray.700', _dark: { bg: 'gray.600' } }}
            color="gray.100"
            as="a"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            Learn More
          </MotionButton>
        </Box>
        <Box
          w="full"
          h="full"
          py={48}
          bg="gray.200"
          _dark={{ bg: 'gray.700' }}
        ></Box>
      </MotionGrid>
    </Box>
  );
};
