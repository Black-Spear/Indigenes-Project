import { Box, chakra, Flex, Icon, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

const DesktopNavLink = (props) => {
  const { active,href, ...rest } = props
  return (
    <chakra.a
      href={href}
      aria-current={active ? 'page' : undefined}
      fontWeight="semibold"
      color={mode('gray.700', 'gray.300')}
      _hover={{color: "yellow.400"}}
      {...rest}
      _activeLink={{
        color: mode('yellow.400', 'yellow.300'),
        fontWeight: 'bold',
      }}
    />
  )
}

const MobileNavLink = (props) => {
  const { icon, children, href } = props
  return (
    <Flex
      as="a"
      href={href}
      m="-3"
      p="3"
      align="center"
      rounded="md"
      cursor="pointer"
      _hover={{
        bg: mode('gray.50', 'gray.600'),
      }}
    >
      <Icon as={icon} color={mode('yellow.400', 'yellow.400')} fontSize="xl" />
      <Box marginStart="3" fontWeight="medium">
        {children}
      </Box>
    </Flex>
  )
}

export const NavLink = {
  Desktop: DesktopNavLink,
  Mobile: MobileNavLink,
}
