import {
  IconButton,
  Avatar,
  Box,
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

const UserComponent = props => {
  return (
    <Box
      minWidth={'17vw'}
      mx={'1vw'}
      bgColor={useColorModeValue('#f0f0f0', '#1a202c')}
      borderRadius="xl"
      display="flex"
      justifyContent={'center'}
      pr='1vw'
    >
      <HStack spacing={{ base: '0', md: '6' }}>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}
            >
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://scontent.ftun10-1.fna.fbcdn.net/v/t39.30808-6/274480513_1179989572537674_7273953419814914029_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iHSc5-5mfQsAX8zA6q8&_nc_ht=scontent.ftun10-1.fna&oh=00_AfAzRyUsAZgK0EQcmsEl70DOwqmCmCfnvIqC3IkaNaj_cA&oe=63B79C31'
                  }
                />
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
                <Box display={{ base: 'none', md: 'flex' }} color={useColorModeValue('#b08a00', '#faf089')}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              <MenuItem>Profile</MenuItem>
              <MenuItem>Projects</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
};

export { UserComponent };
