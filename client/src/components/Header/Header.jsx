import {
  Box,
  Text,
  Button,
  Flex,
  HStack,
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
import './nav.css';
import * as React from 'react';
import { MobileNav } from './MobileNav';
import { NavLink } from './NavLink';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import logoLight from '../../logoLight.svg';
import logoDark from '../../logoDark.svg';

export const Header = () => {
  const theme = useColorModeValue('light', 'dark');
  const logoImg = useColorModeValue(logoLight, logoDark);
  let user = JSON.parse(localStorage.getItem('current_user'));
  useEffect(() => {
    return () => {
      console.log(user);
    };
  }, []);
  let Status;
  if (user !== null) {
    Status = (
      <>
        <Button
          variant={'solid'}
          colorScheme={'yellow'}
          size={'sm'}
          mr={4}
          leftIcon={<AddIcon color={'blackAlpha.800'} />}
        >
          <Link to={'/create_project'}>
            <Text fontSize='sm' color='blackAlpha.800' >Add Project</Text>
            </Link>
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
                'https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/274480513_1179989572537674_7273953419814914029_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iHSc5-5mfQsAX8zA6q8&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAzRyUsAZgK0EQcmsEl70DOwqmCmCfnvIqC3IkaNaj_cA&oe=63B79C31'
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem> {user[0].nom_c + ' ' + user[0].prenom_c} </MenuItem>
            <MenuDivider />
            <Link to="/profile">
              <MenuItem>
                <Text textColor={'Black'} _dark={{ textColor: '#ececec' }} fontSize='md' >
                  My Profile
                </Text>
              </MenuItem>
            </Link>

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
  } //!end check user sign in static

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
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
        justify="center"
        rowGap={22}
        w="100%"
        position={'fixed'}
      >
        <Box
          maxW="100%"
          // mx="8"
          py="4"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex as="nav" gap="17vw">
            <HStack spacing="8">
              <Box as="a" href="/" rel="home" w="20vh">
                <Image src={colorChange ? logoImg : logoDark} />
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
                <NavLink.Desktop href="/#"> About </NavLink.Desktop>
                <NavLink.Desktop href="/#stats"> Statistics </NavLink.Desktop>
                <NavLink.Desktop href="/#features"> Features </NavLink.Desktop>
                <NavLink.Desktop href="/#contact"> Contact </NavLink.Desktop>
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
