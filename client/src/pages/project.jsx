import {
  Box,
  Container,
  Center,
  Stack,
  Text,
  Button,
  Image,
  Flex,
  VStack,
  Heading,
  SimpleGrid,
  useColorModeValue,
  List,
  ListItem,
  Progress,
  Divider,
  HStack,
} from '@chakra-ui/react';
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { MdLocationOn } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';
import { BsFillPersonFill, BsPerson } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

export default function Simple() {
  const location = useLocation(); // sa7a rayen
  console.log('local', location);
  const data = location.state?.details;
  console.log('data', data);
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
          {data.titre}
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
              src={data.img_P}
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
                    Location:{' '}
                    <span>
                      {data.libelle}, {data.libelle_d}
                    </span>
                  </Text>
                  p{' '}
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
                    width="100%"
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
              <ListItem>Anti‑magnetic</ListItem>
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
              Domed, scratch‑resistant sapphire crystal with anti‑reflective
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
        <Center>
          <Button
            rounded={'3xl'}
            mt={8}
            size={'md'}
            px={'7'}
            bg={useColorModeValue('#E3BF3E', '#E3BF3E')}
            color={useColorModeValue('#ffffff', '#171717')}
            textTransform={'capitalize'} //!hethi heya elli majus awel 7arf
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'sm',
            }}
          >
            Sign in
          </Button>
        </Center>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent={'center'}
          mb="2vh"
        >
          <BiLogIn />
          {/*// TODO: baddalha b icon ma 5ir */}
          <Text>Sign in to access more information.</Text>
        </Stack>
      </Container>
      <Footer />
    </>
  );
}
