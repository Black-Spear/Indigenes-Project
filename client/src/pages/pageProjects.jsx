import {
  Avatar,
  Box,
  Button,
  Center,
  Image,
  Grid,
  CheckboxGroup,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  LightMode,
  Select,
  Stack,
  Text,
  useColorModeValue as mode,
  Modal,
  ModalContent,
  ModalHeader,
  HStack,
  Divider,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Badge,
  ModalOverlay,
  useDisclosure,
  SimpleGrid,
} from '@chakra-ui/react';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../sections/Projects/Banner/style.css';
import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import img from '../assets/img/projects/test.png';

import { Header } from '../components/Header/Header';
import axios from 'axios';
import './style.css';

const PageProjects = () => {
  const navigate = useNavigate();

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [gouv, setGouv] = useState([]);
  const [proj, setProj] = useState([]);
  const [SearchTerm, SetSearchTerm] = useState('');
  const [idd, setidd] = useState();
  const api = axios.create({
    baseURL: 'http://localhost:5000',
  });

  const { id } = useParams();
  console.log(id);
  console.log('leee', proj);

  let x = proj.filter(val => val.libelle == id.toLowerCase());
  console.log('eyy', x);

  useEffect(() => {
    return () => {
      api.get('/getDelegation').then(response => {
        setGouv(response.data);
        console.log(response.data);
      });
    };
  }, []);
  // hethi tejbed donee
  useEffect(() => {
    return () => {
      api.get('/getproject').then(response => {
        setProj(response.data);
        console.log(response.data);
      });
    };
  }, []);
  return (
    <>
      <Header />
      <Flex
        direction="column"
        alignSelf="center"
        justifySelf="center"
        overflow="hidden"
      >
        <Box
          position="absolute"
          minH={{ base: '100vh', md: '60vh' }}
          w="100%"
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="0"
          bgImage="https://upload.wikimedia.org/wikipedia/commons/c/c6/Ksiba%2C_Bizerte_1.jpg"
          bgSize="cover"
          mx={{ md: 'auto' }}
          className="back"
        ></Box>

        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          align="center"
          mt="5.5rem"
          mb="30px"
        >
          <Text fontSize="5rem" color="white" fontWeight="extrabold">
            {id}
          </Text>

          <Stack
            justify="center"
            direction={{
              base: 'column',
              md: 'row',
            }}
            mt="3"
            mb="10"
            spacing="4"
          >
            <LightMode>
              <Button
                as="a"
                href="#"
                size="lg"
                color="blackAlpha.900"
                colorScheme="yellow"
                px="8"
                fontWeight="bold"
                fontSize="md"
                onClick={() => {
                  setOverlay(<OverlayOne />);
                  onOpen();
                }}
              >
                <Text>Choose a District</Text>
                {console.log(
                  gouv
                    .filter(gouv => gouv.libelle == id.toLowerCase())
                    .map(deleg => deleg.libelle_d)
                )}

                <FaArrowRight />
              </Button>
            </LightMode>
          </Stack>
        </Flex>

        <Flex alignItems="center" justifyContent="center" mb="5px" mt="5px">
          <Flex
            mb="15vh"
            direction="column"
            w="90%"
            h="500px"
            background="transparent"
            borderRadius="15px"
            p="40px"
            mx={{ base: '100px' }}
            bg="#f0f0f0"
            _dark={{ bg: 'gray.800' }}
            boxShadow="0px 0px 20px 20px rgb(0 0 0 / 5%)"
            position={'relative'}
          >
            <InputGroup
              mt="-8.8vh"
              borderRadius="100px"
              maxW={{
                md: 'auto',
              }}
              w="full"
            >
              <InputRightElement color="gray.400" w="auto" justify="center">
                <Button bg="transparent">
                  <FiSearch />
                </Button>

                <Select
                  size="md"
                  bg={mode('gray.100', 'gray.800')}
                  w="auto"
                  color={mode('gray.800', 'gray.100')}
                >
                  {gouv
                    .filter(gouv => gouv.libelle == id.toLowerCase())
                    .map(deleg => (
                      <option value={deleg.libelle_d}>{deleg.libelle_d}</option>
                    ))}
                </Select>
              </InputRightElement>
              <Input
                bg={mode('white', 'gray.700')}
                onChange={event => {
                  SetSearchTerm(event.target.value);
                }}
                placeholder="Search for project"
              />
            </InputGroup>

            <Box py="10px">
              <Grid
                position="relative"
                templateColumns="repeat(3, 1fr)"
                gap={6}
              >
                {x
                  .filter(e => {
                    if (SearchTerm == '') {
                      return e;
                    } else if (
                      e.titre.toLowerCase().includes(SearchTerm.toLowerCase())
                    ) {
                      return e;
                    }
                  })
                  .map((e, key) => {
                    return (
                      <Center py={6} key={key}>
                        <Box
                          maxW={'445px'}
                          w={'full'}
                          bg={mode('white', 'gray.900')}
                          boxShadow={'2xl'}
                          rounded={'md'}
                          p={6}
                          overflow={'hidden'}
                        >
                          <Box
                            h={'30%'}
                            bg={'gray.100'}
                            mt={-6}
                            mx={-6}
                            mb={6}
                            pos={'relative'}
                          >
                            <Image src={e.img_P} layout={'fill'} />
                          </Box>
                          <Stack>
                            <Text
                              color={'green.500'}
                              textTransform={'uppercase'}
                              fontWeight={800}
                              fontSize={'sm'}
                              letterSpacing={1.1}
                            >
                              {e.subtitle}
                            </Text>
                            <Heading
                              color={mode('gray.700', 'white')}
                              fontSize={'2xl'}
                              fontFamily={'body'}
                            >
                              {e.titre}
                            </Heading>
                          </Stack>

                          <Stack
                            direction={'column'}
                            spacing={0}
                            fontSize={'sm'}
                          >
                            <Text fontWeight={600}>{e.nom_c}</Text>
                            <Text color={'gray.500'}>
                              Feb 08, 2021 · 6min read
                            </Text>
                          </Stack>
                          <Button
                            colorScheme="yellow"
                            mx={3}
                            onClick={() => {
                              navigate({ pathname: `/project_Details/${id}` });
                            }}
                          >
                            See details
                          </Button>
                        </Box>
                      </Center>
                    );
                  })}
              </Grid>
            </Box>
          </Flex>
        </Flex>
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          size="xxl"
          scrollBehavior="inside"
        >
          {overlay}
          <ModalContent>
            <ModalHeader fontSize={28} textAlign="center">
              <Text py={3}>
                All Districts of{' '}
                <b>
                  <span color="E3BF3E">{id}</span>
                </b>
              </Text>
              <HStack>
                <Divider w="50%" size={5} />
                <Badge colorScheme="yellow">Select one</Badge>
                <Divider w="50%" size={5} />
              </HStack>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <SimpleGrid columns={{ base: 10, lg: 3 }}>
                {gouv
                  .filter(gouv => gouv.libelle == id.toLowerCase())
                  .map(deleg => (
                    <Center py={6}>
                      <Box
                        mr={2}
                        ml={2}
                        className="card"
                        maxW={'256px'}
                        w={'100%'}
                        bg={mode('#ecc94b', '#4a5568')}
                        boxShadow={'2xl'}
                        rounded={'xl'}
                        px={6}
                        overflow={'hidden'}
                      >
                        <Box
                          className="card-image"
                          h={'20%'}
                          bg={mode('#ecc94b', '#E3BF3E')}
                          w={'100v'}
                          mx={-6}
                          mb={6}
                          p="5%"
                          pos={'relative'}
                          textAlign="center"
                        >
                          <Heading
                            color={mode('gray.700', 'gray.800')}
                            fontSize={'2xl'}
                            fontFamily={'body'}
                            fontWeight={800}
                          >
                            {deleg.libelle_d}
                          </Heading>
                        </Box>
                        <Box
                          h={'80%'}
                          bg={'gray.100'}
                          mt={-6}
                          mx={-6}
                          pos={'relative'}
                        >
                          <Image src={img} layout={'fill'} />
                        </Box>
                        <Box
                          className="card-description"
                          bg={mode('white', '#4a5568')}
                          mt={-6}
                          mx={-6}
                          p="8%"
                          pos={'relative'}
                          textAlign="center"
                          zIndex={100}
                          //_hover={{h: '256px', top: '-100px'}}
                        >
                          <Heading
                            color={mode('gray.700', 'white')}
                            fontSize={'md'}
                            fontFamily={'body'}
                            mt="1vh"
                            mb="5vh"
                          >
                            <span>10 </span>
                            Available Projects
                          </Heading>
                          <Text className="text-body">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor.
                          </Text>
                          <Button mt="5vh">See more</Button>
                        </Box>
                      </Box>
                    </Center>
                  ))}
              </SimpleGrid>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
};

export default PageProjects;
