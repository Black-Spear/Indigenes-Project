import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
  Center,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdPhoneIphone, MdMail, MdAddLocation } from 'react-icons/md';
import { FaGithub, FaDiscord, FaPersonBooth, FaFacebook } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';

export default function Contact() {
  const api = axios.create({
    baseURL: 'http://localhost:5000',
  });

  const toast = useToast();
  const [form, setform] = useState({
    fname: '',
    email: '',
    message: '',
  });

  const inputHandler = e => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = e => {
    e.preventDefault();
    console.log(form);

    if (form.fname === '' || form.email === '' || form.message === '') {
      toast({
        title: 'Please fill the form ! ',
        description: 'All field are obligation',
        status: 'warning',
        duration: 2000,
        isClosable: true,
        colorScheme: 'yellow',
      });
    } else {
      const request = {
        ...form,
      };
      const res = api.post('/contact', request);
      console.log(res);
      toast({
        title: 'Message Sent! ',
        description: 'We will responde as soon as possible.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        colorScheme: 'yellow',
      });
    }
  };
  return (
    <Container
      id="contact"
      bg={useColorModeValue('gray.50', 'gray.800')}
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="gray.700"
          _dark={{ bg: 'gray.900' }}
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Box m="2">
                    <Heading>Contact</Heading>
                    <Text mt="2" color="whiteAlpha.800">
                      Fill in the form below for questions
                    </Text>
                  </Box>
                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack px={'4vh'} spacing={3} alignItems="center">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdPhoneIphone color="#E3BF3E" size="20px" />}
                      >
                        +216 99 999 222
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdMail color="#E3BF3E" size="20px" />}
                      >
                        hello@indigenes.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: '2px solid #1C6FEB' }}
                        leftIcon={<MdAddLocation color="#E3BF3E" size="20px" />}
                      >
                        Tunis, Tunisia
                      </Button>

                      <HStack mt={{ lg: 10, md: 10 }} spacing={5} px={5}>
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#E3BF3E' }}
                          icon={<FaFacebook size="28px" />}
                        />
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#E3BF3E' }}
                          icon={<FaGithub size="28px" />}
                        />
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{ bg: '#E3BF3E' }}
                          icon={<FaDiscord size="28px" />}
                        />
                      </HStack>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="#E7E7E7" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl>
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<FaPersonBooth color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            id="fname"
                            name="fname"
                            onChange={inputHandler}
                            value={form.fname}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdMail color="gray.800" />}
                          />
                          <Input
                            type="text"
                            size="md"
                            id="email"
                            name="email"
                            onChange={inputHandler}
                            value={form.email}
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Message</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: 'gray.300',
                          }}
                          placeholder="message"
                          id="message"
                          name="message"
                          onChange={inputHandler}
                          value={form.message}
                        />
                      </FormControl>
                      <FormControl float="right">
                        <Button
                          variant="solid"
                          bg="#E3BF3E"
                          color="white"
                          _hover={{}}
                          onClick={submitButton}
                        >
                          Send Message
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
