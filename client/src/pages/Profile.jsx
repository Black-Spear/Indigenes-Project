import {
  Center,
  Box,
  Flex,
  HStack,
  Grid,
  Image,
  Text,
  Skeleton,
  SkeletonText,
  Stack,
  Button,
  Badge,
  Heading,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
// Icon imports
import { HiOutlineBriefcase, HiLocationMarker, HiMail } from 'react-icons/hi';

const SkeletonCard = () => {
  return (
    <Center py={6}>
      <Box
        w={'full'}
        maxW={{ base: '20em', sm: '26em' }}
        h={'30em'}
        bg={useColorModeValue('white', 'gray.800')}
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
                color={useColorModeValue('gray.700', 'white')}
                height="1rem"
                fontFamily={'body'}
              ></Heading>
            </Skeleton>
          </Stack>

          <Stack direction={'column'} spacing={0} fontSize={'sm'} my="1rem">
            <SkeletonText>
              <Text color={'gray.500'} pt="0.3em" pb={'1em'}>
                Feb 08, 2021 · Agriculture
              </Text>
            </SkeletonText>
          </Stack>
          <Skeleton w="10rem">
            <Button colorScheme="yellow" mx={3} right="0.8em">
              See details
            </Button>
          </Skeleton>
        </Box>
      </Box>
    </Center>
  );
};
export const Profile = () => {
  return (
    <>
      <Box bg="#f7fafc" _dark={{ bg: 'gray.700' }}>
        <Header />
        <Flex
          p={{ base: '1rem', sm: '5rem' }}
          mt="3rem"
          w="100%"
          bg="#f7fafc"
          _dark={{ bg: 'gray.700' }}
          alignItems="center"
          justifyContent="center"
        >
          <Flex
            //card body
            w="100%"
            shadow="lg"
            borderRadius={'3xl'}
            pb="2rem"
            bg="#edf3f8"
            _dark={{
              bg: 'gray.800',
            }}
            mb={8}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Box
              bg="#edf3f8"
              _dark={{
                bg: '#3e3e3e',
              }}
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1666795599746-0f62dfa29a07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
              height="100%"
              width="100%"
              borderRadius={'3xl'}
              p={8}
              display="flex"
              justifyContent={'space-between'}
            >
              <Image
                src=""
                alt="Profile Picture"
                borderRadius="full"
                boxSize="150px"
                shadow="lg"
                border="5px solid"
                mb={-20}
                borderColor="gray.800"
                _dark={{
                  borderColor: 'gray.200',
                }}
              />
              <ColorModeSwitcher h="6.5vh" w="4vw" />
            </Box>
            <HStack spacing={5} alignSelf={'flex-start'} mt={10} ml="2rem">
              <Text
                mt={'1rem'}
                fontSize={{ base: 'xl', md: 'lg', lg: '4xl' }}
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
              >
                Mohamed Ashref Ben Abdallah{' '}
                <Badge ml="1" colorScheme="yellow">
                  Verified
                </Badge>
              </Text>
            </HStack>
            <HStack
              spacing={1}
              color="gray.700"
              _dark={{
                color: 'gray.200',
              }}
              alignSelf="start"
              ml={{ base: '2rem', md: '2.2rem' }}
            >
              <HiMail size="1rem" color="#6e767f" />
              <Text
                fontSize={{ base: 'xs', lg: 'lg' }}
                fontWeight={'light'}
                textColor="gray.400"
              >
                MohamedAshrefBna@gmail.com
              </Text>{' '}
            </HStack>
            <Center>
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  sm: 'repeat(1, 1fr)',
                  md: 'repeat(1, 1fr)',
                  lg: 'repeat(2, 1fr)',
                }}
                gap={4}
                py={{ base: '8', sm: '8' }}
              >
                <Button
                  h="4rem"
                  minW={'30vw'}
                  variant="outline"
                  rounded={'lg'}
                  boxShadow={'md'}
                  bgColor="#ffffff"
                  _dark={{ bgColor: '#1a202c' }}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  <HStack
                    my={'1rem'}
                    spacing={3}
                    color="gray.800"
                    _dark={{
                      color: 'gray.200',
                    }}
                  >
                    <HiOutlineBriefcase
                      size={24}
                      color={useColorModeValue('#E3BF3E', 'yellow')}
                    />
                    <Text
                      fontSize="lg"
                      fontWeight="normal"
                      color="gray.800"
                      _dark={{
                        color: 'gray.200',
                      }}
                    >
                      Tech Entrepreneur
                    </Text>
                  </HStack>
                </Button>
                <Button
                  h="4rem"
                  minW={'30vw'}
                  variant="outline"
                  rounded={'lg'}
                  bgColor="#ffffff"
                  _dark={{ bgColor: '#1a202c' }}
                  boxShadow={'md'}
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                  }}
                >
                  <HStack
                    my={'1rem'}
                    spacing={3}
                    color="gray.700"
                    _dark={{
                      color: 'gray.200',
                    }}
                  >
                    <HiLocationMarker
                      size={24}
                      color={useColorModeValue('#E3BF3E', 'yellow')}
                    />
                    <Text fontSize="lg" fontWeight={'normal'}>
                      Tunis, Tunisia
                    </Text>
                  </HStack>
                </Button>
              </Grid>
            </Center>
            <Box
              w="92%"
              display={'flex'}
              flexDir="row"
              justifyContent="space-between"
              alignItems={'center'}
            >
              <Text
                my={'1.5rem'}
                fontSize="4xl"
                fontWeight="bold"
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
              >
                Your ongoing projects
              </Text>
              <Text
                my={'1'}
                fontSize="md"
                fontWeight="light"
                color="gray.800"
                _dark={{
                  color: 'white',
                }}
              >
                <Link
                  mx={2}
                  textDecor="underline"
                  my={'1'}
                  fontSize="md"
                  fontWeight="light"
                  color="gray.900"
                  _dark={{
                    color: 'white',
                  }}
                >
                  <Text
                    _hover={{
                      textColor: '#E3BF3E',
                    }}
                  >
                    finished projects
                  </Text>
                </Link>
              </Text>
            </Box>
            <Grid //!el grid elli fih el cardsss
              w="100%"
              templateColumns={{
                base: 'repeat(1, 1fr)',
                sm: 'repeat(1, 1fr)',
                md: 'repeat(1, 1fr)',
                lg: 'repeat(3, 1fr)',
              }}
              gap={6}
            >
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </Grid>
          </Flex>
        </Flex>
      </Box>
      <Footer />
    </>
  );
};
