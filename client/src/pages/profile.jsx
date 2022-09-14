import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  ButtonGroup,
  useColorModeValue,
} from '@chakra-ui/react';
import { Header } from './components/Header/Header';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import Footer from './components/Footer/Footer';


export default function SocialProfileWithImage() {
  return (
    <>
    <Header/>
    <Center py={6}>
      <Stack
        direction={'column'}
        justify={'center'}
        alignItems="center"
        spacing={6}
        w="full"
        h="full"
        py={6}
      >
        <Box
          maxW={'100%'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
        >
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'3xl'}
              src={
                'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Ahmed Balti
              </Heading>
              <Text color={'gray.500'}>FullStak Developer</Text>
            </Stack>

            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Personal Projects
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>23k</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Investments
                </Text>
              
              </Stack>
            </Stack>
            <Stack spacing={0} align={'center'} mb={5}>
            <Button
              // w={'full'}
              size={'lg'}
              position="center"
              alignSelf={'center'}
              mt={8}
              background={'#e3bf3e'}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                
                boxShadow: 'lg',
              }}
            >
              Follow
            </Button>

            </Stack>
          </Box>
        







        {/* // !le box number deux */}
        <Stack
        direction={'row'}
        justify={'center'} 
        w={'full'}
        >
          
          <Box
            maxW={'35%'}
            w={'full'}
            // boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
           // bgColor="lightblue"
          >
            <h6>
              <b>Profile Information</b>
            </h6>
            
            <h3>
              <b>Full Name : Ahmed Balti</b>
            </h3>
            
            <h5>
              <b>Phone Number :</b>
            </h5>
            
            <h5>
              <b>Email :</b>
            </h5>
            
          </Box>
        </Stack>
        </Box>
      </Stack>
      
    </Center>
    <Footer/>
    
    </>
    
  );
}
