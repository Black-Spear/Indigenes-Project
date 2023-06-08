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

import { useTranslation } from 'react-i18next';

export const Header = () => {
  const { t } = useTranslation();

  const theme = useColorModeValue('light', 'dark');
  const logoImg = useColorModeValue(logoLight, logoDark);
  let user = JSON.parse(localStorage.getItem('current_user'));
  useEffect(() => {
    return () => {
      console.log(user);
    };
  });
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
                {t('header.addProject')}
              </Text>
            </Button>{' '}
          </Link>
        </Box>
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
          <NavLink.Desktop>
            <Link to="/signin">{t('header.signIn')}</Link>{' '}
          </NavLink.Desktop>

          <LightMode>
            <Link to="/signup">
              <Button colorScheme="yellow" rounded="xl" px="2rem" mr="1rem">
                {t('header.signUp')}
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
        py={'1vh'}
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
                <NavLink.Desktop href="/#">{t('header.about')}</NavLink.Desktop>
                <NavLink.Desktop href="/#stats">
                  {t('header.articles')}
                </NavLink.Desktop>
                <NavLink.Desktop href="/#features">
                  {t('header.features')}
                </NavLink.Desktop>
                <NavLink.Desktop href="/#contact">
                  {t('header.contact')}
                </NavLink.Desktop>
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
