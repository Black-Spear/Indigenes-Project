import { Link } from 'react-router-dom';
import {
  IconButton,
  Avatar,
  Box,
  useToast,
  Flex,
  HStack,
  VStack,
  useColorModeValue,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import img from '../../assets/img/avatars/ashref.jpg';
import { useTranslation } from 'react-i18next';

const UserComponent = props => {
  const { t } = useTranslation();

  const toast = useToast();
  let textColor = useColorModeValue('black', 'white');

  return (
    <Box
      minWidth={'17vw'}
      mx={'1vw'}
      bgColor={useColorModeValue('#f0f0f0', '#1a202c')}
      borderRadius="xl"
      display="flex"
      justifyContent={'center'}
      pr="1vw"
    >
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
          onClick={() =>
            toast({
              title: t('userComponent.notifications.noNewNotifications'),
              description: t(
                'userComponent.notifications.youHaveNoNotifications'
              ),
              position: 'top-right',
              status: 'warning',
              variant: 'subtle',
              duration: 2000,
              isClosable: true,
              containerStyle: {
                marginTop: '90px',
                marginRight: '6.7vw',
              },
            })
          }
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar size={'sm'} src={img} />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('#b08a00', '#faf089')}
                  >
                    {props.user[0].nom_c + ' ' + props.user[0].prenom_c}
                  </Text>
                  <Text
                    fontSize="sm"
                    color={useColorModeValue('gray.700', 'gray.100')}
                  >
                    Admin
                  </Text>
                </VStack>
                <Box
                  display={{ base: 'none', md: 'flex' }}
                  color={useColorModeValue('#b08a00', '#faf089')}
                >
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <Link to="/profile">
                <MenuItem>
                  <Text fontSize={'md'} color={textColor}>
                    {t('userComponent.menu.profile')}
                  </Text>
                </MenuItem>
              </Link>
              <MenuItem>
                <Text fontSize={'md'} color={textColor}>
                  {t('userComponent.menu.projects')}
                </Text>
              </MenuItem>
              <MenuItem>
                <Text fontSize={'md'} color={textColor}>
                  {t('userComponent.menu.settings')}
                </Text>
              </MenuItem>
              <MenuDivider />
              <MenuItem
                onClick={() => {
                  localStorage.removeItem('current_user');
                  window.location.reload(true);
                }}
              >
                <Text fontSize={'md'} color={textColor}>
                  {t('userComponent.menu.signOut')}
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
};
export { UserComponent };
