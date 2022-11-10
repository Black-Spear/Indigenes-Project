import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Button,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem,
  InputRightElement,
  Input,
  Select,
  InputGroup,
  Progress,
  StatLabel,
  StatNumber,
  Stat,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Header } from '../components/Header/Header';
import { FiSearch } from 'react-icons/fi';
import Footer from '../components/Footer/Footer';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping, MdLocationOn } from 'react-icons/md';
import { ReactNode } from 'react';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { useState } from 'react';

function StatsCard(props) {
  const { title, stat, icon } = props;
  const [details, setdetails] = useState([]);
  console.log('dd', setdetails);
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}
        >
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Simple() {
  return (
    <>
      <Header />
      <Container maxW={'6xl'}>
        <Heading
          align="center"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
          mt="100px"
        >
          El Faouar Project
        </Heading>

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}
        >
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                'https://www.viaggiaresempre.it/wp-content/uploads/2017/12/16OasiMontagnaTamarza-1024x658.jpg'
              }
              fit={'cover'}
              align={'center'}
              w="100%"
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>

          <Stack ml="5vw" spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}></Box>

            <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}>
              <Progress value={20} h="1vh" colorScheme="yellow" mb={2} />

              <Box as={'header'}>
                <Text
                  align="left"
                  mb={'4vh'}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}
                >
                  <span>
                    <b>$350.00 USD</b>
                  </span>
                  /$5000.00 USD
                </Text>
                <HStack mb={'4vh'} spacing={2}>
                  <HStack spacing={2} mr={'10%'}>
                    <BsFillPersonFill size="40" color="#E3BF3E" />
                    <Text
                      align="left"
                      mb={'4vh'}
                      color={useColorModeValue('gray.900', 'gray.400')}
                      fontWeight={300}
                      fontSize={'2xl'}
                    >
                      {' '}
                      <span style={{ fontSize: '50px', fontWeight: 'bold' }}>
                        5
                      </span>
                      /12 Local
                    </Text>
                  </HStack>
                  <HStack spacing={2} mr={'5vw'}>
                    <BsFillPersonFill size="40" color="#E3BF3E" />
                    <Text
                      align="left"
                      mb={'4vh'}
                      color={useColorModeValue('gray.900', 'gray.400')}
                      fontWeight={300}
                      fontSize={'2xl'}
                    >
                      {' '}
                      <span style={{ fontSize: '50px', fontWeight: 'bold' }}>
                        7
                      </span>
                      /12 Overseas
                    </Text>
                  </HStack>
                </HStack>
                <HStack spacing={2}>
                  <MdLocationOn size="40" color="#E3BF3E" />
                  <Text
                    align="left"
                    color={useColorModeValue('gray.900', 'gray.400')}
                    fontWeight={300}
                    fontSize={'2xl'}
                  >
                    Location: <span>El Faouar, Tunisia</span>
                  </Text>
                </HStack>
              </Box>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Box
                  maxW="7xl"
                  mx={'auto'}
                  pt={5}
                  px={{ base: 2, sm: 12, md: 17 }}
                >
                  <Button
                    as="a"
                    href="#"
                    size="lg"
                    height="50px"
                    width="500px"
                    px="8"
                    fontWeight="bold"
                    fontSize="lg"
                    bg={useColorModeValue('#E3BF3E', '#E3BF3E')}
                    color={useColorModeValue('#ffffff', '#171717')}
                    _hover={{
                      transform: 'translateY(1px)',
                      backgroundColor: '#E3BF3E98',
                    }}
                  >
                    Invest Now
                  </Button>
                </Box>
              </VStack>
            </Stack>
          </Stack>
        </SimpleGrid>
        <Divider />
        <Box>
          <Text
            mt={'5vh'}
            fontSize={{ base: '16px', lg: '18px' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'500'}
            textTransform={'uppercase'}
            mb={'4'}
          >
            Features
          </Text>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <List spacing={2}>
              <ListItem>Chronograph</ListItem>
              <ListItem>Master Chronometer Certified</ListItem>{' '}
              <ListItem>Tachymeter</ListItem>
            </List>
            <List spacing={2}>
              <ListItem>Anti-magnetic</ListItem>
              <ListItem>Chronometer</ListItem>
              <ListItem>Small seconds</ListItem>
            </List>
          </SimpleGrid>
        </Box>
        <Box>
          <Text
            mt={'2vh'}
            fontSize={{ base: '16px', lg: '18px' }}
            color={useColorModeValue('yellow.500', 'yellow.300')}
            fontWeight={'500'}
            textTransform={'uppercase'}
            mb={'4'}
          >
            Product Details
          </Text>

          <List spacing={2}>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Between lugs:
              </Text>{' '}
              20 mm
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Bracelet:
              </Text>{' '}
              leather strap
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Case:
              </Text>{' '}
              Steel
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Case diameter:
              </Text>{' '}
              42 mm
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Dial color:
              </Text>{' '}
              Black
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Crystal:
              </Text>{' '}
              Domed, scratch-resistant sapphire crystal with anti-reflective
              treatment inside
            </ListItem>
            <ListItem>
              <Text as={'span'} fontWeight={'bold'}>
                Water resistance:
              </Text>{' '}
              5 bar (50 metres / 167 feet){' '}
            </ListItem>
          </List>
        </Box>
        <Button
          rounded={'none'}
          w={'full'}
          mt={8}
          size={'lg'}
          py={'7'}
          bg={useColorModeValue('#E3BF3E', '#E3BF3E')}
          color={useColorModeValue('#ffffff', '#171717')}
          textTransform={'uppercase'}
          _hover={{
            transform: 'translateY(2px)',
            boxShadow: 'sm',
          }}
        >
          Invest Now
        </Button>

        <Stack direction="row" alignItems="center" justifyContent={'center'}>
          <MdLocalShipping />
          <Text>2-3 business days delivery</Text>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
