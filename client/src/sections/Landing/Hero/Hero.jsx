import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  LightMode,
  Flex,
  SimpleGrid,
  Center,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as RLink } from 'react-router-dom';

import '../Map/style.css';
import vid from '../../../assets/video/cover.mp4';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

export const Hero = () => {
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
    <Box>
      <video autoPlay loop>
        <source src={vid} type="video/mp4"></source>
      </video>
      <Flex as="section" color="white">
        <Center h="100vh" w="100%">
          <Box
            ref={ref}
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
            <Box textAlign="center">
              <MotionHeading
                as="h1"
                size="3xl"
                fontWeight="bold"
                maxW="48rem"
                mx="auto"
                lineHeight="1.2"
                letterSpacing="tight"
                initial={{ opacity: 0, x: '-10vw', scale: 0.5 }} //animation inizaiale lel ktiba main
                animate={{ opacity: 1, x: 0, scale: 1 }} //#foufou_kesa7
                transition={{ duration: 1.2, bounce: 0.2 }}
              >
                Earn <span>Benefits</span> from investing in projects in{' '}
                <span>Tunisia</span>
              </MotionHeading>
              <motion.div
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2.5 }}
              >
                <Text fontSize="xl" mt="4" maxW="xl" mx="auto" opacity={0.5}>
                  Our mission is to help you invest for a better future and
                  guaranteed profits.
                </Text>
              </motion.div>
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
                <MotionButton
                  as="a"
                  href="#"
                  size="lg"
                  color="blackAlpha.900"
                  colorScheme="yellow"
                  px="8"
                  fontWeight="bold"
                  fontSize="md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration:0.1 }}

                >
                  <RLink to="/projects">Get started</RLink>
                </MotionButton>
              </LightMode>
            </Stack>
          </Box>
        </Center>
      </Flex>
    </Box>
  );
};
