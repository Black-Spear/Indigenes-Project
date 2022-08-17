// Chakra imports
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Select,
  Switch,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';
import { Logo } from './Logo';
import viddark from '../../assets/video/gold2.png';
import vidlight from '../../assets/video/gold.png';
import './vid.css';
import axios from 'axios'

// Assets
import BgSignUp from '../../assets/img/BgSignUp.png';
import React from 'react';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useState } from 'react';

// ! Code starts here
const api = axios.create({
  baseURL: 'http://localhost:5000'
})

function SignUp() {
  const titleColor = useColorModeValue('#E3BF3E', '#E3BF3E');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const bgColor = useColorModeValue('white', 'gray.700');
  const bgIcons = useColorModeValue('#E3BF3E', 'rgba(255, 255, 255, 0.5)');
  const vid = useColorModeValue(viddark, vidlight);

  const [form, setform] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    country: ''
  })

  const inputHandler = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const submitButton = (e) => {
    e.preventDefault()
    console.log(form)

    if (form.fname === '' || form.lname === '' || form.email === '' || form.password === '' || form.country === '') {
      alert('Please fill all the fields')  
    }
    else {
      const request = {
        ...form
      }

      const db_request = api.get('/createdb')
      console.log(db_request)
      const table_request = api.get('/createtable')
      console.log(table_request)
      const response = api.post('/createUser', request)
      console.log(response)
    }
  }

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      
      <Box
        position="absolute"
        minH={{ base: '70vh', md: '50vh' }}
        w={{ md: 'calc(100vw - 50px)' }}
        borderRadius={{ md: '15px' }}
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage={vid}
        bgSize="cover"
        mx={{ md: 'auto' }}
        mt={{ md: '14px' }}
      >
        {/* <video className="gold" autoPlay loop>
          <source src={vid} type="video/mp4"></source>
        </video> */}
      </Box>

      <Flex
        direction="column"
        textAlign="center"
        justifyContent="center"
        align="center"
        mt="6.5rem"
        mb="30px"
      >
        
        <Text
          fontSize="6xl"
          color="textColor"
          fontWeight="extrabold"
          textShadow="Black"
        >
          Welcome!
        </Text>

        <Text
          fontSize="xl"
          color="textColor"
          fontWeight="semibold"
          mt="10px"
          mb="26px"
          w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
        >
          Enter the required information and become a member
        </Text>
      </Flex>

      <Flex alignItems="center" justifyContent="center" mb="60px" mt="20px">
        <Flex
          direction="column"
          w="445px"
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: '100px' }}
          bg={bgColor}
          boxShadow="0 20px 27px 0 rgb(0 0 0 / 5%)"
        >
          
          <Flex
            justify="center"
            align="center"
            w="100%"
            h="4em"
            borderRadius="15px"
          >
            <ColorModeSwitcher />
          </Flex>

          <Text
            fontSize="xl"
            color={textColor}
            fontWeight="bold"
            textAlign="center"
            mb="22px"
          >
            Register With
          </Text>

          <HStack spacing="15px" justify="center" mb="22px">
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaFacebook}
                  w="30px"
                  h="30px"
                  _hover={{ filter: 'brightness(120%)' }}
                />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
            >
              
              <Link href="#">
                <Icon
                  as={FaApple}
                  w="30px"
                  h="30px"
                  _hover={{ filter: 'brightness(120%)' }}
                />
              </Link>
            </Flex>
            <Flex
              justify="center"
              align="center"
              w="75px"
              h="75px"
              borderRadius="15px"
              border="1px solid lightgray"
              cursor="pointer"
              transition="all .25s ease"
              _hover={{ filter: 'brightness(120%)', bg: bgIcons }}
            >
              <Link href="#">
                <Icon
                  as={FaGoogle}
                  w="30px"
                  h="30px"
                  _hover={{ filter: 'brightness(120%)' }}
                />
              </Link>
            </Flex>
          </HStack>
          <HStack my={5}>
            <Divider w="50%" />
            <Text
              fontSize="lg"
              color="gray.400"
              fontWeight="bold"
              textAlign="center"
              mb="22px"
            >
              or
            </Text>
            <Divider w="50%" />
          </HStack>

          <FormControl>
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              First Name
            </FormLabel>
            <Input
            id='fname'
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="text"
              name='fname'
              placeholder="Your First name"
              mb="24px"
              size="lg"
              value={form.fname}
              onChange={inputHandler}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Last Name
            </FormLabel>
            <Input
            id='lname'
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="text"
              name='lname'
              placeholder="Your Last name"
              mb="24px"
              size="lg"
              value={form.lname}
              onChange={inputHandler}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Email
            </FormLabel>
            <Input
            id='email'
              fontSize="sm"
              ms="4px"
              name='email'
              borderRadius="15px"
              type="email"
              placeholder="Your email address"
              mb="24px"
              size="lg"
              value={form.email}
              onChange={inputHandler}
            />
            <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
              Password
            </FormLabel>
            <Input
            id='password'
              fontSize="sm"
              ms="4px"
              borderRadius="15px"
              type="password"
              name='password'
              placeholder="Your password"
              mb="24px"
              size="lg"
              value={form.password}
              onChange={inputHandler}
            />
            <Select placeholder='Select option' name='country' value={form.country}
              onChange={inputHandler}>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
            <FormControl display="flex" alignItems="center" mb="24px">
              <Switch id="remember-login" colorScheme="yellow" me="10px" />
              <FormLabel htmlFor="remember-login" mb="0" fontWeight="normal">
                Remember me
              </FormLabel>
            </FormControl>

            <Popover>
              <PopoverTrigger>
                <Button
                  type="submit"
                  bg="#E3BF3E"
                  fontSize="10px"
                  color="white"
                  fontWeight="bold"
                  w="100%"
                  h="45"
                  mb="24px"
                  _hover={{
                    bg: '#FFE27D',
                  }}
                  _active={{
                    bg: '#A38F4A',
                  }}
                  onClick={submitButton}
                >
                  SIGN UP
                </Button>
              </PopoverTrigger>
            </Popover>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColor} fontWeight="medium">
              Already have an account?
              <Link
                color={titleColor}
                as="span"
                ms="5px"
                href="#"
                fontWeight="bold"
              >
                <RLink to="/signin">Sign in</RLink>
              </Link>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default SignUp;
