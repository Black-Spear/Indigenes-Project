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

const UserComponentMobile = props => {
  const toast = useToast();
  return (
    <Box
      mx={'1vw'}
      mt="1"
      bgColor={useColorModeValue('#f0f0f0', '#1a202c')}
      borderRadius="xl"
      display="flex"
      justifyContent={'flex-start'}
    >
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
          onClick={() =>
            toast({
              title: 'No new notifications.',
              description: 'You have no new notifications.',
              position: 'bottom-left',
              status: 'warning',
              variant: 'subtle',
              duration: 2000,
              isClosable: true,
            })
          }
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={3}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  mx="1"
                  h={'2.7rem'}
                  w={'2.7rem'}
                  src={
                    'https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-1/274480513_1179989572537674_7273953419814914029_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=xDTFmiBn02IAX-TQ0h7&_nc_ht=scontent.ftun10-1.fna&oh=00_AfDaA33CR6H2fWOVHdu4V-FJxvggrwqlVwzI1R09PWUFaQ&oe=63CDE473'
                  }
                />
                <VStack alignItems="flex-start">
                  <Text
                    fontSize="sm"
                    fontWeight="medium"
                    color={useColorModeValue('#b08a00', '#faf089')}
                  >
                    {props.user[0].nom_c + ' ' + props.user[0].prenom_c}
                  </Text>
                  <Text
                    fontSize="xs"
                    color={useColorModeValue('gray.700', 'gray.100')}
                  >
                    Admin
                  </Text>
                </VStack>
                <Box color={useColorModeValue('#b08a00', '#faf089')}>
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
                  {' '}
                  <Text fontSize={'md'}>Profile</Text>{' '}
                </MenuItem>
              </Link>

              <MenuItem>
                <Text fontSize={'md'}>Projects</Text>
              </MenuItem>
              <MenuItem>
                <Text fontSize={'md'}>Settings</Text>
              </MenuItem>
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
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
};

export { UserComponentMobile };
