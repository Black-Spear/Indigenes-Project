import {
  Box,
  Button,
  Skeleton,
  SkeletonText,
  Center,
  Image,
  Grid,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  LightMode,
  Stack,
  Text,
  useColorModeValue as mode,
  Modal,
  ModalContent,
  Tag,
  TagLabel,
  TagRightIcon,
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
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import React, { useEffect, useState } from 'react';
import img from '../assets/img/projects/test.png';
import { Header } from '../components/Header/Header';
import axios from 'axios';
import './style.css';
import data from '../sections/Landing/Map/data.json';
//Icons
import { FiSearch } from 'react-icons/fi';
import { FiUsers } from 'react-icons/fi';

const SkeletonCard = () => {
  return (
    <Center py={6}>
      <Box
        w={'full'}
        maxW={{ base: '20em', sm: '26em' }}
        h={'30em'}
        bg={mode('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={{ base: '3', sm: '6' }}
        overflow={'hidden'}
      >
        <Skeleton w="full" h="50%" my="1rem"></Skeleton>
        <Box>
          <Stack>
            <SkeletonText noOfLines={2}>
              <Text
                color={'green.500'}
                textTransform={'uppercase'}
                fontWeight={800}
                fontSize={'sm'}
                letterSpacing={1.1}
                minH={{ base: '4.5em', sm: '3em' }}
              ></Text>
            </SkeletonText>
            <Skeleton>
              <Heading
                color={mode('gray.700', 'white')}
                height="1rem"
                fontFamily={'body'}
              ></Heading>
            </Skeleton>
          </Stack>

          <Stack direction={'column'} spacing={0} fontSize={'sm'} my="1rem">
            <SkeletonText>
              <Text color={'gray.500'} pt="0.3em" pb={'1em'}></Text>
            </SkeletonText>
          </Stack>
          <Skeleton w="10rem">
            <Button colorScheme="yellow" mx={3} right="0.8em"></Button>
          </Skeleton>
        </Box>
      </Box>
    </Center>
  );
};

const PageProjects = () => {
  const { t } = useTranslation();

  const navigate = useNavigate();

  const OverlayOne = () => (
    <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px)" />
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const [gouv, setGouv] = useState([]);
  const [proj, setProj] = useState([]);
  const [SearchTerm, SetSearchTerm] = useState('');
  const [idd, setidd] = useState('');
  const [details, setdetails] = useState([]);

  const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
  });

  const { id } = useParams();

  // * hethi tejbed projects list
  useEffect(() => {
    api.get('/getproject').then(response => {
      setProj(response.data);
    });
  }, []);

  console.log('leee', proj);

  console.log('details', details);

  let dataid = data.find(e => {
    //bg img fi koll wileya
    if (e.id === id) {
      return e.img;
    }
  });
  console.log('dataid', dataid.img);

  let x = proj.filter(val => val.libelle === id.toLowerCase());

  let z = x.filter(a => {
    if (idd === '') {
      return a;
    } else if (idd === a.libelle_d) {
      return a;
    }
  });
  console.log('eyy', x);

  console.log('ma3tamdeya', z);
  let r = z.filter(a => {
    if (SearchTerm === '') {
      return a;
    } else if (a.titre.toLowerCase().includes(SearchTerm.toLowerCase())) {
      return a;
    }
  });

  console.log('search', r);
  console.log('idddd', idd);
  useEffect(() => {
    api.get('/getDelegation').then(response => {
      setGouv(response.data);
      console.log(response.data);
    });
  }, []);

  let gouvv = gouv.filter(gouv => gouv.libelle === id.toLowerCase());
  console.log('gouv', gouvv);

  return (
    <>
      <Box overflowX={'hidden'}>
        <Header />
        <Flex direction="column" alignSelf="center" justifySelf="center">
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
            bgImage={dataid.img} // sa7a rayen
            bgSize="cover"
            mx={{ md: 'auto' }}
            className={useColorModeValue('back-light', 'back-dark')}
          ></Box>
          <Flex
            direction="column"
            textAlign="center"
            justifyContent="center"
            align="center"
            mt="5.5rem"
            mb="30px"
          >
            <Text
              fontSize="5rem"
              color="white"
              fontWeight="extrabold"
              textTransform={'capitalize'}
            >
              {id}
            </Text>
            <Text
              fontSize="1.5rem"
              color="white"
              fontWeight="extrabold"
              textTransform={'capitalize'}
            >
              {idd}
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
                  <Text>{t("projects.districtButton")}</Text>
                  {console.log(
                    gouv
                      .filter(gouv => gouv.libelle === id.toLowerCase())
                      .map(deleg => deleg.libelle_d)
                  )}

                  <FaArrowRight />
                </Button>
              </LightMode>
            </Stack>
          </Flex>

          <Flex alignItems="center" justifyContent="center" mb="5px" mt="5px">
            <Flex // the container  holding the grid with the cards
              mb="15vh"
              direction="column"
              w={{ base: '100%', sm: '90%' }}
              background="transparent"
              borderRadius="15px"
              p={{ base: '0', sm: '20px', lg: '20px' }}
              pt={{ base: '10em', sm: '0' }}
              mx={{ base: '0', sm: '100px' }}
              bg="#f0f0f0"
              _dark={{ bg: 'gray.800' }}
              boxShadow="0px 0px 20px 20px rgb(0 0 0 / 5%)"
              position={'relative'}
            >
              <InputGroup
                mt={{ base: '-28vh', sm: '-8.8vh' }}
                maxW={{
                  base: '90%',
                  sm: '100%',
                }}
                w="full"
                display={'flex'}
                alignSelf="center"
              >
                <InputRightElement color="gray.400" w="auto" justify="center">
                  <Button bg="transparent">
                    <FiSearch />
                  </Button>
                </InputRightElement>
                <Input
                  borderRadius="8px"
                  bg={mode('white', 'gray.700')}
                  onChange={event => {
                    SetSearchTerm(event.target.value);
                  }}
                  placeholder="Search for project"
                />
              </InputGroup>
              <Box py="10px">
                <Grid //!el grid elli fih el cardsss
                  position="relative"
                  templateColumns={{
                    base: 'repeat(1, 1fr)',
                    sm: 'repeat(1, 1fr)',
                    md: 'repeat(1, 1fr)',
                    lg: 'repeat(2, 1fr)',
                    xl: 'repeat(3, 1fr)',
                  }}
                  gap={6}
                >
                  {/* Skeleton placeholder */}
                  {r.length === 0 && (
                    <>
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                      <SkeletonCard />
                    </>
                  )}
                  {/* Actual cards for projects */}
                  {r.length !== 0 &&
                    r.map((a, key) => {
                      return (
                        <Center py={6} key={key}>
                          <Box
                            w={'full'}
                            maxW={{ base: '20em', sm: '24em', lg: '26em' }}
                            h={'30em'}
                            bg={mode('white', 'gray.900')}
                            boxShadow={'2xl'}
                            rounded={'md'}
                            p={{ base: '3', sm: '6' }}
                            overflow={'hidden'}
                          >
                            <Box //box el taswiraaaa
                              mt={-6}
                              mx={-6}
                              mb={6}
                              pos={'relative'}
                              bgGradient={'linear(to-r, green.200, pink.500)'}
                              maxHeight="15em"
                              h="15em"
                              w={{ base: '30em', sm: '26em' }}
                              overflow={'hidden'}
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <Image
                                src={a.img_p}
                                objectFit={'cover'} //hethi heya elli keeps aspect ratio
                                flexShrink="0"
                                minWidth="100%"
                                minHeight="100%"
                              />
                            </Box>
                            <Box>
                              <Stack>
                                <Flex justifyContent={'space-between'}>
                                  <Text
                                    color={'green.500'}
                                    textTransform={'uppercase'}
                                    fontWeight={800}
                                    fontSize={'sm'}
                                    letterSpacing={1.1}
                                    minH={{ base: '4.5em', sm: '3em' }}
                                  >
                                    {a.subtitle}
                                  </Text>
                                  <Tag
                                    size={'md'}
                                    variant="subtle"
                                    colorScheme="yellow"
                                    height="fit-content"
                                    py="2"
                                  >
                                    <TagLabel>
                                      <Text
                                        fontWeight="semibold"
                                        color={mode('#a3814b', '#c7c073')}
                                      >
                                        {a.somme_membres + 1}/25
                                      </Text>
                                    </TagLabel>
                                    <TagRightIcon boxSize="12px" as={FiUsers} />
                                  </Tag>
                                </Flex>
                                <Heading
                                  color={mode('gray.700', 'white')}
                                  fontSize={'2xl'}
                                  fontFamily={'body'}
                                >
                                  {a.titre}
                                </Heading>
                              </Stack>

                              <Stack
                                direction={'column'}
                                spacing={0}
                                fontSize={'sm'}
                              >
                                <Text fontWeight={600} py="0.1em">
                                  {a.nom_c}
                                </Text>
                                <Text color={'gray.500'} pt="0.3em" pb={'1em'}>
                                  Feb 08, 2021 · Agriculture
                                </Text>
                              </Stack>
                              <Button
                                colorScheme="yellow"
                                mx={3}
                                right="0.8em"
                                onClick={() => {
                                  setdetails(a);
                                  navigate(
                                    { pathname: `/project_Details/${id}` },
                                    { state: { details: a } }
                                  );
                                }}
                              >
                                {t("projects.detailsButton")}
                              </Button>
                            </Box>
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
                <SimpleGrid columns={{ base: 1, lg: 3 }}>
                  {gouvv.map(deleg => (
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
                          <Image src={img} layout={'cover'} />
                        </Box>
                        <Box // el card elli feha  ktiba ta7t taswira kebili
                          bg={mode('white', '#4a5568')}
                          mt={-6}
                          mx={-6}
                          p="8%"
                          pos={'relative'}
                          textAlign="center"
                          zIndex={100}
                        >
                          <Heading
                            color={mode('gray.700', 'white')}
                            fontSize={'md'}
                            fontFamily={'body'}
                            m="1vh"
                          >
                            10 Available Projects
                          </Heading>

                          {console.log('rayen', deleg.libelle_d)}

                          <Button
                            my="1vh"
                            onClick={() => {
                              setidd(deleg.libelle_d);
                              onClose();
                            }}
                          >
                            Explore
                          </Button>
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
      </Box>
    </>
  );
};

export default PageProjects;
