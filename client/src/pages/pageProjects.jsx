
import { Avatar, background, Box, Button, Center,Image,Grid, Checkbox, CheckboxGroup, Flex, Heading, Input, InputGroup, InputRightElement, LightMode, Select, Stack, Text, useColorModeValue, VStack, Modal, ModalContent, ModalHeader, HStack, Divider, ModalCloseButton, ModalBody, List, ModalFooter, Badge, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import { Link as RLink, useLocation, useParams } from 'react-router-dom'
import {FaArrowRight} from 'react-icons/fa'
import '../sections/Projects/Banner/style.css'
import React from 'react'
import { FiSearch } from 'react-icons/fi'
import img from '../assets/img/projects/test.png';
import Map from '../sections/Landing/Map/Map'
// import './style.css'


const PageProjects = () => {

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px)'
    />
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)

const {id} = useParams();
  console.log('data', id )

  return (
    <Flex
      direction="column"
      alignSelf="center"
      justifySelf="center"
      overflow="hidden"
    >
      <Box
        position="absolute"
        minH={{ base: '100vh', md: '60vh' }}
        w='100%'
        left="0"
        right="0"
        bgRepeat="no-repeat"
        overflow="hidden"
        zIndex="-1"
        top="0"
        bgImage='https://upload.wikimedia.org/wikipedia/commons/c/c6/Ksiba%2C_Bizerte_1.jpg'
        bgSize="cover"
        mx={{ md: 'auto' }}
        className='back'
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
                  setOverlay(<OverlayOne />)
                  onOpen()}}
              >
                <Text>Choose a District</Text>
                <FaArrowRight />
              </Button>
            </LightMode>
          </Stack>
      </Flex>

      <Flex alignItems="center" justifyContent="center" mb="5px" mt="5px">
        <Flex
          direction="column"
          w="90%"
          h='500px'
          background="transparent"
          borderRadius="15px"
          p="40px"
          mx={{ base: '100px' }}
          bg='gray.800'
          boxShadow="0px 0px 20px 20px rgb(0 0 0 / 5%)"
        >
            <InputGroup mt='-8.8vh' borderRadius='100px'
              maxW={{
                md: 'auto',
              }}
              w="full"
              
            >
              <InputRightElement color="gray.400" w='auto' justify='center' >
                <Button bg='transparent'><FiSearch /></Button>
              
                <Select size='md'
                  bg='gray.600'
                  w='auto'
                  color='white'
                  placeholder='Mateur'
                  
                >
                  <option value='option1'>Option 1</option>
                  <option value='option2'>Option 2</option>
                  <option value='option3'>Option 3</option>
                </Select>
              </InputRightElement>
              <Input bg={useColorModeValue('white', 'gray.700')} placeholder="Search for project"/>
              
            </InputGroup>
            <Box my='10px'><CheckboxGroup colorScheme='green' defaultValue={['naruto', 'kakashi']} >
              <Stack spacing={[1, 5]} direction={['column', 'row']}>
                <Button value='naruto'  _checked={{
                    bg: '#dddfe2',
                    transform: 'scale(0.98)',
                    borderColor: '#bec3c9',
                  }}>Naruto</Button>
                <Button value='sasuke'>Sasuke</Button>
                <Button value='kakashi'>Kakashi</Button>
              </Stack>
            </CheckboxGroup></Box>
            <Box py='10px'><Grid position='absolute' templateColumns="repeat(3, 1fr)" gap={6} mx='50px'>
          <Center py={6}>
            <Box
              maxW={'445px'}
              w={'full'}
              bg={useColorModeValue('white', 'gray.900')}
              boxShadow={'2xl'}
              rounded={'md'}
              p={6}
              overflow={'hidden'}
            >
              <Box
                h={'210px'}
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={6}
                pos={'relative'}
              >
                <Image src={img} layout={'fill'} />
              </Box>
              <Stack>
                <Text
                  color={'green.500'}
                  textTransform={'uppercase'}
                  fontWeight={800}
                  fontSize={'sm'}
                  letterSpacing={1.1}
                >
                  Blog
                </Text>
                <Heading
                  color={useColorModeValue('gray.700', 'white')}
                  fontSize={'2xl'}
                  fontFamily={'body'}
                >
                  Boost your conversion rate
                </Heading>
                
              </Stack>
              <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
                <Avatar
                  src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
                  alt={'Author'}
                />
                <Stack direction={'column'} spacing={0} fontSize={'sm'}>
                  <Text fontWeight={600}>Achim Rolle</Text>
                  <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
                </Stack>
              </Stack>
            </Box>
          </Center>

        </Grid></Box>
            
        </Flex>
        
      </Flex>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size='xl'>
          {overlay}
          <ModalContent>
            <ModalHeader fontSize={28} textAlign='center'><Text py={3}>All Districts of <b><span color='E3BF3E' >{id}</span></b></Text>
            <HStack><Divider w='50%' size={5} /><Badge colorScheme='yellow'>Select one</Badge><Divider w='50%' size={5} /></HStack></ModalHeader>
            <ModalCloseButton />
            <ModalBody >
                <Center py={6}>
                <Box
                 className='card'
                 maxW={'256px'}
                  w={'100%'}
                  bg={useColorModeValue('white', 'gray.900')}
                  boxShadow={'2xl'}
                  rounded={'xl'}
                  px={6}
                  overflow={'hidden'}
                >
                  <Box
                  className='card-image'
                    h={'20%'}
                    bg={useColorModeValue('white','#E3BF3E')}
                    w={'100v'}
                    mx={-6}
                    mb={6}
                    p='5%'
                    pos={'relative'}
                    textAlign='center'
                  >
                    <Heading
                      color={useColorModeValue('gray.700', 'gray.800')}
                      fontSize={'2xl'}
                      fontFamily={'body'}
                      fontWeight={800}
                    >
                      Mateur
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
                    className='card-description'
                    bg={useColorModeValue('white','gray.600')}
                    mt={-6}
                    mx={-6}
                    p='8%'
                    pos={'relative'}
                    textAlign='center'
                    zIndex={100}
                    _hover={{h: '256px', top: '-100px'}}
                  >
                    <Heading
                      color={useColorModeValue('gray.700', 'white')}
                      fontSize={'md'}
                      fontFamily={'body'}
                    >
                      <span>10 </span>
                       Available Projects
                    </Heading>
                    <Text className="text-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</Text>
                  </Box>
                </Box>
              </Center>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
    </Flex>
  )
}


export default PageProjects


