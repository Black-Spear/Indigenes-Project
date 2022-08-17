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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link as RLink } from 'react-router-dom';
// Assets
import signInImage from '../../assets/img/signInImage.png';
import axios from 'axios'

const baseURL = 'http://localhost:5000/getall';


function SignIn() {
  // Chakra color mode
  const titleColor = useColorModeValue('E3BF3E', 'E3BF3E');
  const textColor = useColorModeValue('gray.500', 'gray.400');
  let [users , setUsers] = useState([]);

  useEffect(() => {
    return () => {
      axios.get(baseURL)
     .then((res) => {
      setUsers(res.data)
      console.log(res.data)
     }
    )
    }
  }, [])
  

  const [form, setform] = useState({
    email: '',
    password: ''
  })

  const inputHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const submitButton = (e) => {
    console.log(users)
    e.preventDefault()
    console.log(form)
    const request = {
      ...form
    }
    const response = axios.get('/getUser', request)
    console.log(response)
    if (form.email === '' || form.password === '') {
      alert('Please fill all the fields')  
    }
    else if (users[3].email_c != form.email || users[3].mot_de_passe_c != form.password) {
      alert('wrong')
    }
    else {
      alert("Connected Successfully !!")
    }
  }

  return (
    <Flex position="relative" mb="40px">
      <RLink to='/'>  
      <Button
       leftIcon={<BsArrowReturnLeft />} 
       colorScheme="yellow"
        variant="outline" 
        size='md'
        position='absolute'
        ml="2em"
        mt='2em'
       >
        Go back
      </Button>
      </RLink>  

      <Flex
        h={{ sm: 'initial', md: '75vh', lg: '85vh' }}
        w="100%"
        maxW="1044px"
        mx="auto"
        ml="30vh"
        justifyContent="space-between"
        mb="auto"
        pt={{ sm: '100px', md: '0px' }}
      >
        <Flex
          alignItems="center"
          justifyContent="center"
          style={{ userSelect: 'none' }}
          w={{ base: '100%', md: '45%', lg: '40%' }}
        >
          <Flex
            direction="column"
            w="100%"
            background="transparent"
            p="5px"
            mt={{ md: '150px', lg: '100px' }}
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
              id='email'
                borderRadius="15px"
                mb="10px"
                fontSize="md"
                name='email'
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
              id='password'
                borderRadius="15px"
                mb="15px"
                fontSize="md"
                name='password'
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
                SIGN IN
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
          overflowX="hidden"
          h="100vh"
          w="50vw"
          position="absolute"
          right="0px"
        >
          <Box
            bgImage={signInImage}
            w="100%"
            h="100%"
            bgSize="cover"
            bgPosition="50%"
            position="absolute"
            //borderBottomLeftRadius="20px"
          ></Box>
        </Box>
      </Flex>
    </Flex>
  );
}
export default SignIn;
