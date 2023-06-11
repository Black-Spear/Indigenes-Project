import {
  Box,
  Text,
  Button,
  Center,
  Flex,
  Portal,
  SimpleGrid,
  useBoolean,
  useFocusOnShow,
  VStack,
  Image,
  useColorModeValue as mode,
} from '@chakra-ui/react';
import {
  HiBookOpen,
  HiCloudDownload,
  HiCurrencyDollar,
  HiOutlineMenu,
  HiOutlineX,
  HiQuestionMarkCircle,
} from 'react-icons/hi';
import { motion } from 'framer-motion';
import * as React from 'react';
import FocusLock from 'react-focus-lock';
import { RemoveScroll } from 'react-remove-scroll';
import logoLight from '../../logoLight.svg';
import logoDark from '../../logoDark.svg';
import { NavLink } from './NavLink';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { UserComponentMobile } from './UserComponentMobile';

const variants = {
  show: {
    display: 'revert',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

const Backdrop = ({ show }) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? 'show' : 'hide'}
      transition={{
        duration: 0.1,
      }}
      variants={{
        show: {
          opacity: 1,
          display: 'revert',
        },
        hide: {
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        },
      }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        background: 'rgba(0,0,0,0.2)',
        inset: 0,
      }}
    />
  </Portal>
);

const Transition = props => {
  const { in: inProp, ...rest } = props;
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? 'show' : 'hide'}
      style={{
        transformOrigin: 'top right',
        position: 'absolute',
        width: 'calc(100% - 32px)',
        top: '24px',
        left: '16px',
        margin: '0 auto',
        zIndex: 1,
      }}
    />
  );
};

export const MobileNav = props => {
  const [show, { toggle, off }] = useBoolean();
  const ref = React.useRef(null);
  useFocusOnShow(ref, {
    visible: show,
    shouldFocus: true,
  });

  const Logo = mode(logoLight, logoDark);

  return (
    <>
      <Box>
        <Box
          as="button"
          type="button"
          p="1"
          fontSize="2xl"
          color="white"
          // _dark={{ color: 'white' }}
          onClick={toggle}
          display={{
            base: 'block',
            lg: 'none',
          }}
        >
          <HiOutlineMenu />
        </Box>

        <Transition in={show}>
          <RemoveScroll enabled={show}>
            <Backdrop show={show} />
          </RemoveScroll>
          <FocusLock disabled={!show} returnFocus>
            <Box
              bg={mode('white', 'gray.700')}
              shadow="lg"
              rounded="lg"
              ref={ref}
              tabIndex={0}
              outline={0}
            >
              <Box pt="5" pb="6" px="5">
                <Flex justify="space-between" align="center">
                  <Image src={Logo} h="10" />
                  <Box mt="-2">
                    <Center
                      as="button"
                      type="button"
                      onClick={off}
                      rounded="base"
                      p="1"
                      color={mode('gray.600', 'gray.400')}
                      _hover={{
                        bg: mode('gray.100', 'gray.600'),
                      }}
                    >
                      <Box srOnly>Close menu</Box>
                      <HiOutlineX aria-hidden fontSize="1.5rem" />
                    </Center>
                  </Box>
                </Flex>
                <SimpleGrid
                  as="nav"
                  gap="6"
                  mt="8"
                  columns={{
                    base: 1,
                    sm: 2,
                  }}
                >
                  <NavLink.Mobile icon={HiCloudDownload}>
                    {' '}
                    <Text
                      fontWeight={'normal'}
                      textColor={mode('black', 'white.900')}
                    >
                      About
                    </Text>{' '}
                  </NavLink.Mobile>
                  <NavLink.Mobile icon={HiCurrencyDollar}>
                    <Text
                      fontWeight={'normal'}
                      textColor={mode('black', 'white.900')}
                    >
                      Articles
                    </Text>
                  </NavLink.Mobile>
                  <NavLink.Mobile icon={HiBookOpen}>
                    <Text
                      fontWeight={'normal'}
                      textColor={mode('black', 'white.900')}
                    >
                      Pricing
                    </Text>
                  </NavLink.Mobile>
                  <NavLink.Mobile icon={HiQuestionMarkCircle}>
                    <Text
                      fontWeight={'normal'}
                      textColor={mode('black', 'white.900')}
                    >
                      Contact us
                    </Text>
                  </NavLink.Mobile>

                  {/* If there us no user signed in, show this element */}
                  {props.user == null && (
                    <VStack mt="8" spacing="4">
                      <Link to="/signin">
                        <Button
                          w="full"
                          colorScheme="yellow"
                          onClick={CloseEvent}
                        >
                          <Text
                            fontWeight={'bold'}
                            textColor={mode('gray.900', 'white.900')}
                          >
                            Sign in
                          </Text>
                        </Button>
                      </Link>

                      <Box textAlign="center" fontWeight="medium">
                        Don't have an account?{' '}
                        <Link to="/signup">
                          {' '}
                          <Box as="a">
                            <Text
                              fontWeight={'extrabold'}
                              textColor={mode('black', 'white.900')}
                            >
                              Sign up
                            </Text>
                          </Box>
                        </Link>
                      </Box>
                    </VStack>
                  )}
                  {/* If there IS a user signed in, show this instead */}
                  {props.user !== null && (
                    <UserComponentMobile user={props.user} />
                  )}
                  <ColorModeSwitcher />
                </SimpleGrid>
              </Box>
            </Box>
          </FocusLock>
        </Transition>
      </Box>
    </>
  );
};
