import React, { useEffect, useState } from 'react';
// Chakra imports
import { BsArrowReturnLeft } from 'react-icons/bs';

import {
  Box,
  Flex,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  HStack,
  useColorModeValue,
  useToast,
  Spinner,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as RLink, Navigate, useNavigate } from 'react-router-dom';
// Assets
import signInImage from '../../assets/img/signInImage.png';
import axios from 'axios';

import Wave from 'react-wavify';
import styled from '@emotion/styled';
import Footer from '../../components/Footer/Footer';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const baseURL = import.meta.env.VITE_API_URL;

function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue('E3BF3E', 'E3BF3E');
  const textColor = useColorModeValue('gray.500', 'gray.400');
  let [users, setUsers] = useState([]);
  let [user, setUser] = useState([]);
  let [press, setPress] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      axios.get(baseURL + '/getall').then(res => {
        setUsers(res.data);
        console.log(res.data);
      });
    };
  }, []);

  const [form, setform] = useState({
    email: '',
    password: '',
  });
  const spinner = (
    <>
      <Spinner />
    </>
  );
  const inputHandler = e => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = async e => {
    e.preventDefault();
    setPress(true);
    console.log(users);
    console.log(form);
    const request = {
      ...form,
    };
    const response = axios.get('/getUser', request);
    console.log(response);
    const verif = users.filter(obj => {
      return obj.email_c === form.email && obj.mot_de_passe_c === form.password;
    });

    console.log(verif);

    if (form.email === '' || form.password === '') {
      alert('Please fill all the fields');
    } else if (verif == null) {
      alert('wrong');
    } else {
      localStorage.setItem('current_user', JSON.stringify(verif));
      setUser(verif);

      setTimeout(() => {
        toast({
          title: 'Connected!',
          description: 'Have a nice day.',
          status: 'success',
          duration: 2000,
          isClosable: true,
        });
        navigate('/');
      }, 3000);
    }
  };

  const WaveContainer = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 75vh;
    height: ${props => props.level + 'vh'};
    display: flex;
    z-index: -1;
    transform: rotate(360deg);
  `;

  const MotionBox = motion(Box);

  const line1 = " 'and the abyss gazes back...' ";
  const line2 = " gazes into you...'";

  //! RETURN IS HERE :
  return (
    <>
      <Flex position="relative" mb="40px">
        {/* // ! these are the waves */}
        <WaveContainer level={90}>
          <Wave
            fill="#E3BF3E"
            paused={false}
            opacity="0.30"
            options={{
              height: 25,
              amplitude: 15,
              speed: 0.3,
              points: 3,
            }}
          />
        </WaveContainer>
        <WaveContainer level={90}>
          <Wave
            fill="#E3BF3E"
            opacity="0.80"
            paused={false}
            options={{
              height: 80,
              amplitude: 25,
              speed: 0.4,
              points: 2,
            }}
          />
        </WaveContainer>
        <WaveContainer level={90}>
          <Wave
            fill="#E3BF3E"
            paused={false}
            opacity="0.5"
            options={{
              height: 50,
              amplitude: 35,
              speed: 0.2,
              points: 4,
            }}
          />
        </WaveContainer>
        <Flex
          h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
          w="100%"
          maxW="1044px"
          mx="auto"
          px={{ base: '10%', md: '0%', lg: '0%' }}
          ml={{ sm: '5%', md: '10%', lg: '13%' }}
          justifyContent="space-between"
          mt={{ base: '13%', md: '0%', lg: '0%' }}
          mb="auto"
          pt={{ sm: '100px', md: '0px' }}
        >
          <Flex
            alignItems="center"
            justifyContent="center"
            style={{ userSelect: 'none' }}
            w={{ base: '100%', md: '45%', lg: '40%' }}
          >
            <RLink to="/">
              <Button
                leftIcon={<BsArrowReturnLeft />}
                colorScheme="yellow"
                variant="outline"
                size="md"
                position="absolute"
                top="2vh"
                left="2vh"
              >
                Go back
              </Button>
            </RLink>
            <Flex
              direction="column"
              w="100%"
              background="transparent"
              p="5px"
              mt={{ md: '150px', lg: '100px', xl: '40px' }}
            >
              <Heading
                color={titleColor}
                fontSize="50px"
                mb="5px"
                textAlign="center"
              >
                Welcome Back
              </Heading>
              <Text
                textAlign="center"
                font
                mb="30px"
                color={textColor}
                fontWeight="medium"
                fontSize="16px"
              >
                Enter your email and password to sign in
              </Text>

              <FormControl>
                <FormLabel ms="4px" fontSize="md" fontWeight="semibold">
                  Email
                </FormLabel>
                <Input
                  id="email"
                  borderRadius="15px"
                  mb="10px"
                  fontSize="md"
                  name="email"
                  type="text"
                  placeholder="Your email adress"
                  size="lg"
                  value={form.email}
                  onChange={inputHandler}
                />
                <FormLabel ms="4px" fontSize="md" fontWeight="semibold">
                  Password
                </FormLabel>
                <Input
                  id="password"
                  borderRadius="15px"
                  mb="15px"
                  fontSize="md"
                  name="password"
                  type="password"
                  placeholder="Your password"
                  size="lg"
                  value={form.password}
                  onChange={inputHandler}
                />
                <FormControl display="flex" alignItems="center">
                  <Switch id="remember-login" colorScheme="yellow" me="10px" />
                  <FormLabel
                    htmlFor="remember-login"
                    mb="0"
                    ms="1"
                    fontWeight="semibold"
                  >
                    Remember me
                  </FormLabel>
                </FormControl>
                <Button
                  fontSize="15px"
                  type="submit"
                  bg="#E3BF3E"
                  w="100%"
                  h="45"
                  mb="20px"
                  color="white"
                  mt="20px"
                  _hover={{
                    bg: '#FFE27D',
                  }}
                  _active={{
                    bg: '#A38F4A',
                  }}
                  onClick={submitButton}
                >
                  {press ? spinner : 'SIGN IN'}
                </Button>
              </FormControl>
              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
              >
                <Text color={textColor} fontWeight="medium">
                  Don't have an account?
                  <Link color={titleColor} as="span" ms="5px" fontWeight="bold">
                    <RLink to="/signup">Sign Up</RLink>
                  </Link>
                </Text>
              </Flex>
              <HStack spacing="15px" justify="center" mb="10px">
                <Flex
                  justify="center"
                  align="center"
                  w="75px"
                  h="75px"
                  borderRadius="15px"
                >
                  <Text
                    fontSize="md"
                    color={textColor}
                    fontWeight="bold"
                    textAlign="center"
                    mb="0px"
                  >
                    Light/Dark:
                  </Text>
                </Flex>
                <Flex
                  justify="center"
                  align="center"
                  w="20px"
                  h="20px"
                  borderRadius="15px"
                >
                  <ColorModeSwitcher />
                </Flex>
              </HStack>
            </Flex>
          </Flex>
          <Box
            display={{ base: 'none', md: 'block' }}
            // overflowX="hidden"
            h="100vh"
            w="50vw"
            position="absolute"
            right="0px"
          >
            <MotionBox
              bgImage={signInImage}
              top="5vh"
              left="10vh"
              w="70%"
              h="70%"
              bgSize="cover"
              bgPosition="50%"
              position="absolute"
              borderRadius={'50px'}
              drag
              dragConstraints={{
                top: -5,
                left: -5,
                right: 5,
                bottom: 5,
              }}
            ></MotionBox>
          </Box>
        </Flex>
      </Flex>

      <Footer />
    </>
  );
}
export default SignIn;
