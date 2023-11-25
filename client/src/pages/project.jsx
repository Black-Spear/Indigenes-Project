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
  Progress,
  Divider,
  HStack,
  Tag,
} from '@chakra-ui/react';
import { Header } from '../components/Header/Header';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
//Icons
import { MdLocationOn } from 'react-icons/md';
import { BiLogIn } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { useEffect } from 'react';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default function Simple() {
  let buttonBgColor = useColorModeValue('#E3BF3E', '#E3BF3E');
  let buttonColor = useColorModeValue('#ffffff', '#171717');

  const location = useLocation(); // sa7a rayen
  console.log('local', location);
  const data = location.state?.details;
  console.log('data', data);
  let current_user = JSON.parse(localStorage.getItem('current_user'));

  function handleInvestRequest(data) {
    //check if user data is valid
    let project_id = data.id_p;
    let project_lead_id = data.id_c;

    let user_id = JSON.parse(localStorage.getItem('current_user'))[0].id_c;
    console.log(
      '🚀 ~ file: project.jsx:46 ~ handleInvestRequest ~ user_id:',
      user_id
    );

    if (user_id === project_lead_id) {
      alert(
        'You are already a member.\nYou are the leader of this project, you cannot invest in it again, please try other projects.'
      );
      return;
    }

    //call endpoint to check if user is already member
    api
      .get('/isProjectMember', {
        params: {
          project_id: project_id,
          user_id: user_id,
        },
      })
      .then(response => {
        if (response.data.length > 0) {
          alert('You are already a member.');
          return;
        } else {
          //finally, handle user addition to the "membres" table
          api
            .post('/addProjectMember', {
              project_id: project_id,
              user_id: user_id,
            })
            .then(response => {
              console.log(response.data);
              alert('Congratulations !\nYou are now a member of this project.');
            })
            .catch(error => {
              console.error('post request error for adding user:', error);
            });
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <Header />

      {/* buffer for the header space consumed below  */}
      <Box h={'14vh'}></Box>

      <Container maxW={'6xl'}>
        <Heading
          align="center"
          py={4}
          lineHeight={1.1}
          fontWeight={700}
          fontSize={{ base: '2xl', sm: '4xl', lg: '6xl' }}
        >
          {data.titre}
        </Heading>
        <Heading
          align="center"
          py={4}
          lineHeight={1.1}
          fontWeight={500}
          fontSize={{ base: 'lg', sm: 'xl', lg: '2xl' }}
          textColor={useColorModeValue('yellow.500', 'yellow.300')}
        >
          - {data.subtitle} -
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
              src={data.img_p}
              fit={'cover'}
              align={'center'}
              w="100%"
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack ml="5vw" spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Tag
                variant={'subtle'}
                colorScheme="yellow"
                mt={'5vh'}
                fontSize={{ base: '14px', lg: '16px' }}
                fontWeight={'normal'}
                mb={'4'}
              >
                Project leader: {data.nom_c}
              </Tag>
            </Box>
            <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}>
              <Progress
                value={data.somme_membres + 1}
                max={50}
                h="1vh"
                colorScheme="yellow"
                mb={2}
              />
              <Box as={'header'}>
                <Text
                  align="left"
                  mb={'4vh'}
                  color={useColorModeValue('gray.900', 'gray.400')}
                  fontWeight={300}
                  fontSize={'2xl'}
                >
                  <span>
                    <b>{data.somme_membres * 1000 + 1000} TND</b>
                  </span>
                  / 50000 TND
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
                        {data.somme_membres + 1}
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
                        0
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
                    textTransform={'capitalize'}
                  >
                    Location:{' '}
                    <span>
                      {data.libelle}, {data.libelle_d}
                    </span>
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
                  {current_user !== null && (
                    <Button
                      size="lg"
                      height="50px"
                      width="100%"
                      px="8"
                      fontWeight="bold"
                      fontSize="lg"
                      bg={buttonBgColor}
                      color={buttonColor}
                      _hover={{
                        transform: 'translateY(1px)',
                        backgroundColor: '#E3BF3E98',
                      }}
                      onClick={() => handleInvestRequest(data)}
                    >
                      Invest Now
                    </Button>
                  )}

                  {current_user == null && (
                    <Link to="/signin">
                      <Button
                        rounded={'md'}
                        size={'md'}
                        px={'7'}
                        bg={buttonBgColor}
                        color={buttonColor}
                        _hover={{
                          transform: 'translateY(2px)',
                          boxShadow: 'sm',
                        }}
                      >
                        Sign in
                      </Button>
                    </Link>
                  )}
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
            <Text>{data.description}</Text>
            <Text>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias,
              libero reprehenderit labore sit recusandae quaerat nulla
              architecto aliquam unde commodi quis excepturi et dolorem
              consectetur placeat qui consequatur, autem voluptatem maiores
              officia voluptas. Laudantium voluptate harum nihil, eos, quo vel
              esse ipsa alias quod vero dolorem consequuntur ut ullam natus
            </Text>
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
          <VStack gap="2" align={'flex-start'}>
            <Text fontSize={'lg'}>
              Discover the features and specifications of our pioneering
              agricultural project, <span> TEST 1 </span> located in the fertile
              lands of{' '}
              {data.libelle_d.replace(
                /(^\w|\s\w)(\S*)/g,
                (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
              )}
              ,
              {data.libelle.replace(
                /(^\w|\s\w)(\S*)/g,
                (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase()
              )}
              .
            </Text>
            <Text fontSize={'lg'}>
              we're committed to driving sustainable agriculture forward, our
              project includes:
            </Text>
            <Text fontSize={'lg'}>
              <span>Crop Diversity:</span> We cultivate a wide range of crops,
              including wheat, to ensure diversity in production.
            </Text>
            <Text fontSize={'lg'}>
              {' '}
              <span>Advanced Technology:</span> We harness the latest
              agricultural technology, such as [mention specific technologies],
              to optimize yield and resource management.
            </Text>
            <Text fontSize={'lg'}>
              <span>Eco-Friendly Practices:</span> Sustainability is our core
              value. We employ eco-friendly practices, like [describe
              sustainable practices], to protect the environment.{' '}
            </Text>
            <Text fontSize={'lg'}>
              <span>Community Engagement:</span>
              We actively involve the local community, offering educational
              programs and creating job opportunities.{' '}
            </Text>
            <Text fontSize={'lg'}>
              <span>Research and Development:</span> Constant innovation is key.
              Our on-site R&D department focuses on IoT to improve agricultural
              techniques.
            </Text>
            <Text fontSize={'lg'}>
              <span>Quality Assurance:</span> We maintain the highest quality
              standards in our produce, ensuring they meet or exceed industry
              norms.
            </Text>
            <Text fontSize={'lg'}>
              <span>Partnerships:</span> We collaborate with like-minded
              organizations and stakeholders to strengthen the agricultural
              ecosystem.
            </Text>
          </VStack>
        </Box>

        {current_user == null && (
          <>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={'center'}
              mt="16"
            >
              <BiLogIn />
              {/*// TODO: baddalha b icon ma 5ir */}
              <Text>Sign in to access more information.</Text>
            </Stack>
            <Center my="4" mb="20">
              <Link to="/signin">
                <Button
                  rounded={'md'}
                  size={'md'}
                  px={'7'}
                  bg={'#E3BF3E'}
                  color={buttonColor}
                  _hover={{
                    transform: 'translateY(2px)',
                    boxShadow: 'sm',
                  }}
                >
                  Sign in
                </Button>
              </Link>
            </Center>
          </>
        )}
      </Container>
      <Footer />
    </>
  );
}
