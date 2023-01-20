import {
  Box,
  Text,
  Button,
  Flex,
  HStack,
  LightMode,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import './nav.css';
import { MobileNav } from './MobileNav';
import { NavLink } from './NavLink';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { UserComponent } from './UserComponent';
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
      <Box
        display={{
          base: 'none',
          lg: 'flex',
        }}
        alignItems="center"
      >
        <Box size="md">
          <Link to={'/create_project'}>
            <Button
              variant={'solid'}
              colorScheme={'yellow'}
              size={'md'}
              leftIcon={<AddIcon color={'blackAlpha.800'} />}
              borderRadius="11px"
            >
              <Text
                fontSize="sm"
                color="blackAlpha.800"
                fontWeight={'medium'}
                textAlign="left"
              >
                Add Project
              </Text>
            </Button>{' '}
          </Link>
        </Box>

        {/* //! Here goes the old implementation */}
        {/* <Menu>
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
                <Text
                  textColor={'Black'}
                  _dark={{ textColor: '#ececec' }}
                  fontSize="md"
                >
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
        </Menu> */}
        <UserComponent user={user} />
        <ColorModeSwitcher />
      </Box>
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
              <Button colorScheme="yellow" rounded="xl" px="2rem" mr="1rem">
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
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener('scroll', changeNavbarColor);
  return (
    <Flex>
      <Flex
        as="header"
        className={colorChange ? `navbar colorChange ${theme}` : 'navbar'}
        style={{ backdropFilter: 'blur(3px)' }}
        justify="center"
        w="100%"
        position={'fixed'}
      >
        <Box
          py="4"
          px={{
            base: '6',
            md: '8',
          }}
        >
          <Flex as="nav" gap="17vw">
            <HStack spacing="7">
              <Box
                rel="home"
                w={{
                  base: '9em',
                  sm: '12em',
                }}
                ml="1vw"
              >
                <Link to="/">
                  <Image src={colorChange ? logoImg : logoDark} />
                </Link>
              </Box>
            </HStack>
            <Flex>
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
              <Box>
                <MobileNav user={user} />
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};
