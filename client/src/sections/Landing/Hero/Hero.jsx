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
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import * as React from 'react';
import { Link as RLink } from 'react-router-dom';

import '../Map/style.css';
import vid from '../../../assets/video/cover.mp4';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import CountUp from 'react-countup';

export const Hero = () => {
  const MotionGrid = motion(SimpleGrid);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const MotionGridItem = motion(GridItem);
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

  // ! #FOUFOUUUUUUU KESA77777777777
  const line1 = 'Our mission is to help you invest intelligently,';
  const line2 = 'for a better Tunisia.';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 1.6,
        delay: 0.5, //This does nothing, i dont know why exactly xD
        staggerChildren: 0.07,
      },
    },
  };
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  //! RETURN IS HERE :
  return (
    <Box>
      <video autoPlay loop>
        <source src={vid} type="video/mp4"></source>
      </video>
      <Flex as="section" color="white">
        <Center h="100vh" w="100%">
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
            <Box textAlign="center">
              <MotionHeading
                as="h1"
                size="3xl"
                fontWeight="bold"
                maxW="48rem"
                mx="auto"
                pb="2rem"
                lineHeight="1.2"
                letterSpacing="tight"
                initial={{ opacity: 0, y: '0', scale: 0.9 }} //animation inizaiale lel ktiba main
                whileInView={{ opacity: 1, y: 0, scale: 1 }} //#foufou_kesa7 -- hethi heya animate
                transition={{ duration: 2 }}
                viewport={{ once: true }}
              >
                Earn <span>Benefits</span> from investing in projects in{' '}
                <span>Tunisia</span>
              </MotionHeading>

              <MotionText
                fontSize="xl"
                mt="4"
                maxW="xl"
                mx="auto"
                // opacity={0.5} //this doesnt' work for some reason
                variants={sentence}
                initial="hidden"
                animate="visible"
              >
                {line1.split('').map((char, index) => {
                  return (
                    <motion.span
                      className="animText"
                      key={char + '-' + index}
                      variants={letter}
                    >
                      {char}
                    </motion.span>
                  );
                })}
                <br />
                {line2.split('').map((char, index) => {
                  return (
                    <motion.span
                      className="animText"
                      key={char + '-' + index}
                      variants={letter}
                    >
                      {char}
                    </motion.span>
                  );
                })}
              </MotionText>
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
                  mt='1.5rem'
                  fontWeight="bold"
                  fontSize="md"
                  whileHover={{ scale: 1.1 }} // these two don't work
                  whileTap={{ scale: 0.9 }} //¯\_(ツ)_/¯
                  initial={{ opacity: 0, y: '0', scale: 0.9 }} //animation inizaiale lel ktiba main
                  animate={{ opacity: 1, y: 0, scale: 1 }} //#foufou_kesa7 -- hethi heya animate
                  transition={{ duration: 2, delay: 5.5 }}
                  viewport={{ once: true }}
                >
                  <RLink to="/projects">Invest now</RLink>
                </MotionButton>
              </LightMode>
            </Stack>
          </Box>
        </Center>
      </Flex>
      <Container py={5} maxW={'container.lg'}>
        <Grid
          id="stats"
          paddingTop={'10vh'}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          mb="5vh"
          gap={6}
        >
          <MotionGridItem
            w="100%"
            colSpan={{ base: 1, sm: 2, md: 2 }}
            mr={'5vw'}
            initial={{ opacity: 0, x: '-25vw', scale: 1 }} //animation inizaiale lel ktiba main
            whileInView={{ opacity: 1, x: 0, scale: 1 }} //#foufou_kesa7
            transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
            viewport={{ once: true }}
          >
            <Heading width={'150%'} mb={3}>
              Safe <span fontWeight="">Investment</span>
              <br />
            </Heading>
            <Heading width={'150%'}>Accessible to everyone</Heading>
          </MotionGridItem>
          <MotionGridItem
            w="100%"
            ml={'4vw'}
            initial={{ opacity: 0, x: '25vw', scale: 1 }} //animation inizaiale lel ktiba main
            whileInView={{ opacity: 1, x: 0, scale: 1 }} //#foufou_kesa7
            transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
            viewport={{ once: true }}
          >
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                <CountUp start={0} end={25} duration={2} delay={0.6} />
                <span>%</span>
              </Text>
              <Box fontSize={'sm'}>
                Description for the number. People always pay attention to
                numbers.
              </Box>
            </Flex>
          </MotionGridItem>
          <MotionGridItem
            w="100%"
            ml={'4vw'}
            initial={{ opacity: 0, x: '25vw', scale: 1 }} //animation inizaiale lel ktiba main
            whileInView={{ opacity: 1, x: 0, scale: 1 }} //#foufou_kesa7
            transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
            viewport={{ once: true }}
          >
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                <CountUp start={0} end={55} duration={3} />
                <span>%</span>
              </Text>
              <Box fontSize={'sm'}>
                Description for the number. People always pay attention to
                numbers.
              </Box>
            </Flex>
          </MotionGridItem>
        </Grid>
      </Container>
    </Box>
  );
};
