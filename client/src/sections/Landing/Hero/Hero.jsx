import {
  Box,
  Button,
  Heading,
  Stack,
  Text,
  LightMode,
  Flex,
  Center,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { Stats } from './Stats';
import vid from '../../../assets/video/cover_small.mp4';
import img from '../../../assets/img/Video_Placeholder.jpg';

import '../Map/style.css';

import { useTranslation } from 'react-i18next';

export const Hero = () => {
  const { t, i18n } = useTranslation();

  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);

  // const animation = useAnimation();
  // const { ref, inView } = useInView({ threshold: 0.1 }); //variable of useInView declaration
  // useEffect(() => {
  //   if (inView) {
  //     animation.start({});
  //   }
  //   if (!inView) {
  //     animation.start({
  //       x: '-100vw',
  //     });
  //   }
  // }, [animation, inView]);

  // ! #FOUFOUUUUUUU KESA77777777777
  const line1 = t('hero.paragraphline1');
  const line2 = t('hero.paragraphline2');

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

  //! RETURN IS HERE
  return (
    <Box>
      <img
        src={img}
        alt=""
        srcset=""
        style={{
          position: 'absolute',
          aspectRatio: '16/9',
          height: '100vh',
          width: '100%',
          zIndex: '-10',
        }}
      />
      <video autoPlay muted loop playsinline>
        <source src={vid} type="video/mp4"></source>
      </video>

      <Flex as="section">
        <Center h="100vh" w="100%" pt={{ base: '8em', xl: '3em' }}>
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
            <Center>
              <Stack direction="row" spacing="1">
                <Button
                  size="sm"
                  onClick={() => {
                    i18n.changeLanguage('en');
                    window.localStorage.setItem('lang', 'en');
                  }}
                >
                  EN
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    i18n.changeLanguage('fr');
                    window.localStorage.setItem('lang', 'fr');
                  }}
                >
                  FR
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    i18n.changeLanguage('ar');
                    window.localStorage.setItem('lang', 'ar');
                  }}
                >
                  AR
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    i18n.changeLanguage('jp');
                    window.localStorage.setItem('lang', 'jp');
                  }}
                >
                  JP
                </Button>
                <Button
                  size="sm"
                  onClick={() => {
                    i18n.changeLanguage('cn');
                    window.localStorage.setItem('lang', 'cn');
                  }}
                >
                  CN
                </Button>
              </Stack>
            </Center>
            <Box textAlign="center">
              <MotionHeading
                as="h1"
                color="white"
                size={{ base: '2xl', sm: '3xl' }}
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
                {t('hero.header.first')}{' '}
                <span className="gradientspan">{t('hero.header.second')}</span>{' '}
                {t('hero.header.third')}{' '}
                <span className="gradientspan">{t('hero.header.fourth')}</span>
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
                  size="lg"
                  color="blackAlpha.900"
                  colorScheme="yellow"
                  px="8"
                  mt="1.5rem"
                  fontWeight="bold"
                  rounded="xl"
                  whileHover={{ scale: 1.1 }} // these two don't work
                  whileTap={{ scale: 0.9 }} //¯\_(ツ)_/¯
                  initial={{ opacity: 0, y: '0', scale: 0.9 }} //animation inizaiale lel ktiba main
                  animate={{ opacity: 1, y: 0, scale: 1 }} //#foufou_kesa7 -- hethi heya animate
                  transition={{ duration: 1.5, delay: 3 }}
                  viewport={{ once: true }}
                >
                  <RLink to="#">{t('hero.button')}</RLink>
                </MotionButton>
              </LightMode>
            </Stack>
          </Box>
        </Center>
      </Flex>
      {/* statistics component under the hero */}
      <Stats />
    </Box>
  );
};
