// Chakra imports
import {
    Box,
    Button,
    Divider,
    Flex,
    Component,
    FormControl,
    FormLabel,
    HStack,
    Icon,
    Input,
    Link,
    Select,
    Stack,
    Switch,
    Text,
    Textarea,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { Link as RLink } from 'react-router-dom';
  import { ColorModeSwitcher } from '../../ColorModeSwitcher';
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
 
  import axios from 'axios'
  
  // Assets
  import BgSignUp from '../../assets/img/BgSignUp.png';
  import React from 'react';
  import { Header } from '../../components/Header/Header';
  import  Footer  from '../../components/Footer/Footer';
  import { FaApple, FaFacebook, FaGoogle } from 'react-icons/fa';
  import { BsArrowReturnLeft } from 'react-icons/bs';
  import { useState } from 'react';
  
  
  // ! Code starts here
  const api = axios.create({
    baseURL: 'http://localhost:5000'
  })
  
  
   let state = {
 
      // Initially, no file is selected
      selectedFile: null
    };
    
    // On file select (from the pop up)
    const onFileChange = event => {
    
      // Update the state
      this.setState({ selectedFile: event.target.files[0] });
    
    };
    
    // On file upload (click the upload button)
    const onFileUpload = () => {
    
      // Create an object of formData
      const formData = new FormData();
    
      // Update the formData object
      formData.append(
        "myFile",
        this.state.selectedFile,
        this.state.selectedFile.name
      );
    
      // Details of the uploaded file
      console.log(this.state.selectedFile);
    
      // Request made to the backend api
      // Send formData object
      axios.post("api/uploadfile", formData);
    };
  function SignUp() {
    const titleColor = useColorModeValue('#E3BF3E', '#E3BF3E');
    const textColor = useColorModeValue('gray.700', 'gray.200');
    const bgColor = useColorModeValue('white', 'gray.700');
    const bgIcons = useColorModeValue('#E3BF3E', 'rgba(255, 255, 255, 0.5)');
    
  
    const [form, setform] = useState({
      fname: '',
      lname: '',
      email: '',
      password: '',
      country: ''
    })
  
    const inputHandler = (e) => {
      setform({ ...form, [e.target.name]: e.target.value })
    }
  
    const submitButton = (e) => {
      e.preventDefault()
      console.log(form)
      onFileUpload();
      if (form.fname === '' || form.lname === '' || form.email === '' || form.password === '' || form.country === '') {
        alert('Please fill all the fields')  
      }
      else {
        const request = {
          ...form
        }
        const db_request = api.get('/createdb')
        console.log(db_request)
        const table_request = api.get('/createtable')
        console.log(table_request)
        const res = api.post('/createUser', request)
        console.log(res)
      }
    }
  
    return (
      <><Header/>
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
        >
          {/* <video className="gold" autoPlay loop>
            <source src={vid} type="video/mp4"></source>
          </video> */}
        </Box>
  
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
              <HStack  mt={'5vh'}mb={'5vh'}spacing={350} >
            <Text
            fontSize="xl"
            ml={'10vh'}
            mb={'5vh'}
            color="textColor"
            fontWeight="md"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
            <span fontWeight="semibold">Project title</span> <br/>
Write a clear, brief title and subtitle to help people quickly understand your project. Both will appear on your project and pre-launch pages.
<br/>
Potential backers will also see them if your project appears on category pages, search results, or in emails we send to our community.
          </Text>
          <Stack ml={'5vh'} spacing={{ base: 10, md: 5 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal"mt={'2vh'} mb={'-0.5vh'}>
              Title
              </FormLabel>
              <Input
              id='fname'
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                name='fname'
                placeholder="Your First name"
                mb="5vh"
                size="lg"
                width={'200%'}
                value={form.fname}
                onChange={inputHandler}
              /><FormLabel ms="4px" fontSize="md" fontWeight="normal" mt={'2vh'} mb={'-0.5vh'}>
              Subtitle
            </FormLabel> <Input
              id='fname'
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                name='fname'
                placeholder="Your First name"
                mb="24px"
                size="lg"
                width={'200%'}
                value={form.fname}
                onChange={inputHandler}
              /></Stack></HStack> <Divider />
               <HStack  mt={'5vh'}mb={'5vh'} spacing={350} >
            <Text
            fontSize="xl"
            ml={'10vh'}
            mb={'5vh'}
            color="textColor"
            fontWeight="md"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
<span fontWeight="semibold">Project category</span> <br/>
Choose a category and to help backers find your project.

You can change these anytime before and during your campaign.          </Text>
          <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Category
              </FormLabel>
              <Select placeholder='Select option'>
  <option value='option1'>Option 1</option>
  <option value='option2'>Option 2</option>
  <option value='option3'>Option 3</option>

</Select>
</Stack></HStack> <Divider />
               <HStack  mt={'5vh'}mb={'5vh'} spacing={350} >
            <Text
            fontSize="xl"
            mb={'5vh'}
            ml={'10vh'}
            color="textColor"
            fontWeight="md"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
            <span fontWeight="semibold">Project location</span> <br/>
            
Enter the location that best describes where your project is based.
          </Text>
          <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Project Location
              </FormLabel>
              <Input
              id='fname'
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                name='fname'
                placeholder="Your First name"
                mb="24px"
                size="lg"
                width={'225%'}
                value={form.fname}
                onChange={inputHandler}
              /></Stack>
              </HStack>
               <Divider />
               <HStack  mt={'5vh'}mb={'5vh'} spacing={350} >
            <Text
            fontSize="xl"
            mb={'5vh'}
            ml={'10vh'}
            color="textColor"
            fontWeight="md"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          >
            <span fontWeight="semibold">Project image</span> <br/>
            
Add an image that clearly represents your project. Choose one that looks good at different sizes—it’ll appear on your project page, across the Kickstarter website and mobile apps, and (when shared) on social channels.<br/><br/>

Your image should be at least 1024x576 pixels. It will be cropped to a 16:9 ratio.<br/><br/>

Avoid images with banners, badges, or text—they are illegible at smaller sizes, can be penalized by the Facebook algorithm, and decrease your chances of getting Kickstarter homepage and newsletter features.<br/><br/>
          </Text>
          <Stack  ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                Upload File
              </FormLabel>
              <Input
              id='fname'
                fontSize="sm"
                ms="4px"
                type="file"
                mb="24px"
                onChange={onFileChange}
              /></Stack></HStack> <Divider />
               <HStack  mt={'5vh'}mb={'5vh'} spacing={350} >
            <Text
            fontSize="xl"
            mb={'5vh'}
            ml={'10vh'}
            color="textColor"
            fontWeight="md"
            w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
          ><span fontWeight="semibold">Project video (optional)</span> <br/>
            
Add a video that describes your project.<br/>

Tell people what you’re raising funds to do, how you plan to make it happen, who you are, and why you care about this project.<br/>

After you’ve uploaded your video, use our editor to add captions and subtitles so your project is more accessible to everyone.<br/> 
          </Text>
          <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
              <FormLabel ms="4px" fontSize="md" fontWeight="normal">
                First Name
              </FormLabel>
              <Input
              id='fname'
                fontSize="sm"
                ms="4px"
                borderRadius="15px"
                type="text"
                name='fname'
                placeholder="Your First name"
                mb="24px"
                size="lg"
                width={'225%'}
                value={form.fname}
                onChange={inputHandler}
              /></Stack></HStack> <Divider /><HStack  mt={'5vh'}mb={'5vh'} spacing={350} >
              <Text
              fontSize="xl"
              mb={'5vh'}
              ml={'10vh'}
              color="textColor"
              fontWeight="md"
              w={{ base: '90%', sm: '60%', lg: '40%', xl: '30%' }}
            ><span fontWeight="semibold">Project description</span> <br/>
              
              
Describe what you're raising funds to do, why you care about it, how you plan to make it happen, and who you are.<br/> Your description should tell backers everything they need to know.<br/> If possible, include images to show them what your project is all about and what rewards look like.<br/>
            </Text>
            <Stack ml={'5vh'} spacing={{ base: 10, md: 2 }}>
                <Textarea size='lg'width={'225%'} placeholder='Here is a sample placeholder' /></Stack></HStack> <Divider />
            </FormControl>
            
          </Flex>
          <Footer/>
          </>
    );
  }
  
  export default SignUp;
  