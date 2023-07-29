// Chakra imports
import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RLink } from 'react-router-dom';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react';

import axios from 'axios';

// Assets
import BgSignUp from '../../assets/img/BgSignUp.png';
import React, { useEffect } from 'react';
import { Header } from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { useState } from 'react';

// ! Code starts here
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

function CreateProject() {
  var user = JSON.parse(localStorage.getItem('current_user'));
  const titleColor = useColorModeValue('#E3BF3E', '#E3BF3E');
  const textColor = useColorModeValue('gray.700', 'gray.200');
  const bgColor = useColorModeValue('white', 'gray.700');
  const bgIcons = useColorModeValue('#E3BF3E', 'rgba(255, 255, 255, 0.5)');

  const [selectedFile, setSelectedFile] = useState(null);
  const [gouvernorat, setGouvernorat] = useState([]);

  const [form, setform] = useState({
    titre: '',
    subtitle: '',
    category: '',
    gouv: '',
    deleg: '',
    img: '',
    description: '',
  });

  const inputHandler = e => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = e => {
    e.preventDefault();

    if (
      form.titre === '' ||
      form.subtitle === '' ||
      form.category === '' ||
      form.gouv === '' ||
      form.deleg === '' ||
      form.img === '' ||
      form.description === ''
    ) {
      alert('Please fill all the fields');
    } else {
      const request = {
        ...form,
      };

      console.log('this is the request');
      console.log(request);

      const res = api.post('/createProject', request);
    }
  };
  // On file select (from the pop up)
  const onFileChange = e => {
    // Update the state
    setform({ ...form, img: e.target.files[0] });
  };

  const onFileUpload = async e => {
    let body = new FormData();
    body.set('key', 'be2c37dfc0a7461c1318889df51967a1');
    body.append('image', e.target.files[0]);

    const res = await axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: body,
    });
    setform({ ...form, img: res.data.data.url });
  };

  const uniqueBy = (arr, prop) => {
    return [...new Map(arr.map(m => [m[prop], m])).values()];
  };

  useEffect(() => {
    return () => {
      api.get('/getDelegation').then(response => {
        setGouvernorat(response.data);
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
          minH={{ base: '70vh', md: '50vh' }}
          w={{ md: 'calc(100vw - 50px)' }}
          borderRadius={{ md: '15px' }}
          left="0"
          right="0"
          bgRepeat="no-repeat"
          overflow="hidden"
          zIndex="-1"
          top="0"
          bgSize="cover"
          mx={{ md: 'auto' }}
          mt={{ md: '14px' }}
        ></Box>
        <Flex
          direction="column"
          textAlign="center"
          justifyContent="center"
          align="center"
          mt="6.5rem"
          mb="30px"
        >
          <Text
            fontSize="6xl"
            color="#E3BF3E"
            fontWeight="extrabold"
            textShadow="Black"
          >
            Create Project
          </Text>

          <Text
            fontSize="xl"
            color="textColor"
            fontWeight="semibold"
            mt="10px"
            mb="26px"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
            Enter the required information
          </Text>
        </Flex>

        <FormControl>
          <HStack mt={'5vh'} mb={'5vh'} spacing={350}>
            <Text
              fontSize="xl"
              ml={'10vh'}
              mb={'5vh'}
              color="textColor"
              fontWeight="md"
              w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
            >
              <span fontWeight="semibold">Project title</span> <br />
              Write a clear, brief title and subtitle to help people quickly
              understand your project. Both will appear on your project and
              pre-launch pages.
              <br />
              Potential backers will also see them if your project appears on
              category pages, search results, or in emails we send to our
              community.
            </Text>
            <Stack ml={'5vh'} spacing={{ base: 10, md: 5 }}>
              <FormLabel
                ms="4px"
                fontSize="md"
                fontWeight="normal"
                mt={'2vh'}
                mb={'-0.5vh'}
              >
                Title
              </FormLabel>
              <Input
                id="titre"
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                name="titre"
                placeholder="Your First name"
                mb="5vh"
                size="lg"
                width={'200%'}
                value={form.titre}
                onChange={inputHandler}
              />
              <FormLabel
                ms="4px"
                fontSize="md"
                fontWeight="normal"
                mt={'2vh'}
                mb={'-0.5vh'}
              >
                Subtitle
              </FormLabel>{' '}
              <Input
                id="subtitle"
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                name="subtitle"
                placeholder="Your First name"
                mb="24px"
                size="lg"
                width={'200%'}
                value={form.subtitle}
                onChange={inputHandler}
              />
            </Stack>
          </HStack>{' '}
          <Divider />
          <HStack mt={'5vh'} mb={'5vh'} spacing={350}>
            <Text
              fontSize="xl"
              ml={'10vh'}
              mb={'5vh'}
              color="textColor"
              fontWeight="md"
              w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
            >
              <span fontWeight="semibold">Project category</span> <br />
              Choose a category and to help backers find your project. You can
              change these anytime before and during your campaign.{' '}
            </Text>
            <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Category
              </FormLabel>
              <Select
                placeholder="Select option"
                value={form.category}
                onChange={inputHandler}
                name="category"
              >
                <option value="agriculture">Agriculture</option>
              </Select>
            </Stack>
          </HStack>{' '}
          <Divider />
          <HStack mt={'5vh'} mb={'5vh'} spacing={350}>
            <Text
              fontSize="xl"
              mb={'5vh'}
              ml={'10vh'}
              color="textColor"
              fontWeight="md"
              w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
            >
              <span fontWeight="semibold">Project location</span> <br />
              Enter the location that best describes where your project is
              based.
            </Text>
            <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Location
              </FormLabel>
              <HStack align="center" justify="center">
                <Select
                  placeholder="Select option"
                  value={form.gouv}
                  onChange={inputHandler}
                  name="gouv"
                  className="gouvernoratSelect"
                >
                  {uniqueBy(gouvernorat, 'id_g').map(deleg => (
                    <option value={deleg.libelle}>
                      gouvernorat {deleg.libelle}
                    </option>
                  ))}
                </Select>
                <Select
                  placeholder="Select delegation"
                  value={form.deleg}
                  onChange={inputHandler}
                  name="deleg"
                >
                  {gouvernorat
                    .filter(gouv => gouv.libelle === form.gouv)
                    .map(deleg => (
                      <option value={deleg.libelle_d}>
                        delegation {deleg.libelle_d}
                      </option>
                    ))}
                </Select>
              </HStack>
            </Stack>
          </HStack>
          <Divider />
          <HStack mt={'5vh'} mb={'5vh'} spacing={350}>
            <Text
              fontSize="xl"
              mb={'5vh'}
              ml={'10vh'}
              color="textColor"
              fontWeight="md"
              w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
            >
              <span fontWeight="semibold">Project image</span> <br />
              Add an image that clearly represents your project. Choose one that
              looks good at different sizes—it will appear on your project page,
              across the Kickstarter website and mobile apps, and (when shared)
              on social channels.
              <br />
              <br />
              Your image should be at least 1024x576 pixels. It will be cropped
              to a 16:9 ratio.
              <br />
              <br />
              Avoid images with banners, badges, or text—they are illegible at
              smaller sizes, can be penalized by the Facebook algorithm, and
              decrease your chances of getting Kickstarter homepage and
              newsletter features.
              <br />
              <br />
            </Text>
            <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Upload File
              </FormLabel>
              <Input
                id="img"
                fontSize="sm"
                ms="4px"
                type="file"
                mb="24px"
                onChange={onFileUpload}
              />
            </Stack>
          </HStack>{' '}
          <Divider />
          <HStack mt={'5vh'} mb={'5vh'} spacing={350}>
            <Text
              fontSize="xl"
              mb={'5vh'}
              ml={'10vh'}
              color="textColor"
              fontWeight="md"
              w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
            >
              <span fontWeight="semibold">Project description</span> <br />
              Describe what you're raising funds to do, why you care about it,
              how you plan to make it happen, and who you are.
              <br /> Your description should tell backers everything they need
              to know.
              <br /> If possible, include images to show them what your project
              is all about and what rewards look like.
              <br />
            </Text>
            <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <Textarea
                name="description"
                value={form.description}
                onChange={inputHandler}
                size="lg"
                width={'225%'}
                placeholder="Here is a sample placeholder"
              />
            </Stack>
          </HStack>{' '}
          <Divider />
        </FormControl>
        <Button
          type="submit"
          width={'40%'}
          bg="#E3BF3E"
          fontSize="10px"
          color="white"
          fontWeight="bold"
          h="45"
          mb="24px"
          _hover={{
            bg: '#FFE27D',
          }}
          _active={{
            bg: '#A38F4A',
          }}
          onClick={submitButton}
        >
          Add Project
        </Button>
      </Flex>
      <Footer />
    </>
  );
}

export default CreateProject;
