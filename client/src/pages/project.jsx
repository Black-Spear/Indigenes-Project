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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Header } from '../components/Header/Header';
import { FiSearch } from 'react-icons/fi';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { ReactNode } from 'react';
import { BsPerson } from 'react-icons/bs';
import { FiServer } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';

function StatsCard(props) {
  const { title, stat, icon } = props;
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
      <Header /> {/* navbar*/}
      {/* THIS IS OUR CODE start */}
      <Container maxW={'7xl'}>
        {/* searchbar start */}
        <Box mt="12vh" mb="5vh">
          <InputGroup
            mt="-8.8vh"
            borderRadius="100px"
            maxW={{
              md: 'auto',
            }}
            w="78vw"
          >
            <InputRightElement color="gray.400" w="auto" justify="center">
              <Button bg="transparent">
                <FiSearch />
              </Button>
            </InputRightElement>
            <Input
              bg={useColorModeValue('white', 'gray.700')}
              placeholder="Search for project"
            />
          </InputGroup>
          {/* end searchbar */}
        </Box>

        <Heading
          align="center"
          lineHeight={1.1}
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
        >
          Automatic Watch
        </Heading>
        <Box as={'header'}>
          <Text
            align="center"
            color={useColorModeValue('gray.900', 'gray.400')}
            fontWeight={300}
            fontSize={'2xl'}
          >
            $350.00 USD
          </Text>
        </Box>
          {/* grid start */}
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
                'https://ksr-ugc.imgix.net/assets/037/295/698/64846d87c792e21faed34c536a75dc3f_original.jpg?ixlib=rb-4.0.2&crop=faces&w=1024&h=576&fit=crop&v=1652452581&auto=format&frame=1&q=92&s=a3d8a82b82b7b21374dfc3b052692f93'
              }
              fit={'cover'}
              align={'center'}
              w="100%"
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>

          <Stack ml="5vw" spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}></Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }
            >
              <Progress value={20} size="xs" colorScheme="yellow" />

              <VStack spacing={{ base: 4, sm: 6 }}>
                <Box
                  maxW="7xl"
                  mx={'auto'}
                  pt={5}
                  px={{ base: 2, sm: 12, md: 17 }}
                >
                  <SimpleGrid
                    mr="10vw"
                    columns={{ base: 3, md: 1 }}
                    spacing={{ base: 5, lg: 8 }}
                  >
                    <StatsCard
                      title={'Users'}
                      stat={'5,000'}
                      icon={<BsPerson size={'3em'} />}
                    />
                    <StatsCard
                      title={'Servers'}
                      stat={'1,000'}
                      icon={<FiServer size={'3em'} />}
                    />
                    <StatsCard
                      title={'Datacenters'}
                      stat={'7'}
                      icon={<GoLocation size={'3em'} />}
                    />
                    <Button
                      as="a"
                      href="#"
                      size="lg"
                      color="blackAlpha.900"
                      colorScheme="yellow"
                      px="8"
                      fontWeight="bold"
                      fontSize="md"
                    >
                      Get started free
                    </Button>
                  </SimpleGrid>
                </Box>
              </VStack>
              <Box>
                <Text
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
                    Domed, scratch‑resistant sapphire crystal with
                    anti‑reflective treatment inside
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Water resistance:
                    </Text>{' '}
                    5 bar (50 metres / 167 feet){' '}
                  </ListItem>
                </List>
              </Box>
            </Stack>

            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}
            >
              Add to cart
            </Button>

            <Stack
              direction="row"
              alignItems="center"
              justifyContent={'center'}
            >
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </>
  );
}
