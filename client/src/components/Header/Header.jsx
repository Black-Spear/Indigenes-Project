import {
  Box,
  Button,
  Flex,
  HStack,
  VisuallyHidden,
  LightMode,
  useColorModeValue,
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Image,
  MenuDivider,
} from '@chakra-ui/react';
import * as React from 'react';
import { Logo } from './Logo';
import { MobileNav } from './MobileNav';
import { NavLink } from './NavLink';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import './nav.css';
import { useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import logoLight from '../../logoLight.svg';
import logoDark from '../../logoDark.svg';

export const Header = () => {
  const theme = useColorModeValue('light', 'dark');
  const logoImg = useColorModeValue(logoLight, logoDark);
  var user = JSON.parse(localStorage.getItem('current_user'));
  useEffect(() => {
    return () => {
      console.log(user);
    };
  }, []);
  var Status;
  if (user != null) {
    Status = (
      <>
        <Button
          variant={'solid'}
          colorScheme={'yellow'}
          size={'sm'}
          mr={4}
          leftIcon={<AddIcon />}
        >
          Add Project
        </Button>
        <Menu>
          <MenuButton
            as={Button}
            rounded={'full'}
            variant={'link'}
            cursor={'pointer'}
            minW={0}
          >
            <Avatar
              size={'sm'}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>{user[0].nom_c + ' ' + user[0].prenom_c}</MenuItem>
            <MenuDivider />
            <MenuItem>My Profile</MenuItem>
            <MenuItem>My Projects</MenuItem>
            <MenuDivider />
            <MenuItem
              onClick={() => {
                localStorage.clear();
                window.location.reload(true);
              }}
            >
              Sign out
            </MenuItem>
          </MenuList>
          <ColorModeSwitcher />
        </Menu>
      </>
    );
  } else {
    Status = (
      <>
        <HStack
          spacing="3"
          display={{
            base: 'none',
            md: 'flex',
          }}
        >
          <Box w="4vw">
            <NavLink.Desktop>
              <Link to="/signin">Sign in</Link>{' '}
            </NavLink.Desktop>
          </Box>

          <LightMode>
            <Link to="/signup">
              {' '}
              <Button colorScheme="yellow" rounded="5">
                Sign up
              </Button>
            </Link>
          </LightMode>
          <ColorModeSwitcher />
        </HStack>
      </>
    );
  }

    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
       if(window.scrollY >= 80){
         setColorchange(true);
       }
       else{
         setColorchange(false);
       }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <Flex justify="space-between">
      <Flex
        as="header"
        className={colorChange ? `navbar colorChange ${theme}` : 'navbar'}
        style={{ backdropFilter: 'blur(3px)' }}
        position="fixed"
        justify="center"
        rowGap={22}
        w="100vw"
      >
        <Box
          maxW="7xl"
          mx="8"
          py="4"
          px={{
            base: '6 ',
            md: '8',
          }}
        >
          <Flex as="nav" gap="17vw">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home" w='20vh' >
                {/* <VisuallyHidden>Indigenes</VisuallyHidden> */}
                <Image src={colorChange ? logoImg : logoDark}  />
                
              </Box>
            </HStack>
            <Flex align="center">
              <HStack
                spacing="8"
                display={{
                  base: 'none',
                  md: 'flex',
                }}
              >
                <NavLink.Desktop href="#about"> About </NavLink.Desktop>
                <NavLink.Desktop href="#stats"> Statistics </NavLink.Desktop>
                <NavLink.Desktop href="#feature"> Features </NavLink.Desktop>
                <NavLink.Desktop href="#contact"> Contact </NavLink.Desktop>
              </HStack>
            </Flex>
            <Flex alignItems="center" justify="flex-end">
              {Status}
              <Box ml="5">
                <MobileNav />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
