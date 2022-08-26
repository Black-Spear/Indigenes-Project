import {
  Box,
  Button,
  createIcon,
  Flex,
  List,
  ListItem,
  Text,
  useColorModeValue as mode,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
const CheckIcon = createIcon({
  viewBox: '0 0 17 12',
  d: 'M0 5.82857L1.64571 4.11429L5.48571 7.2L14.8114 0L16.4571 1.71429L5.48571 12L0 5.82857Z',
})

const PricingDetail = (props) => {
  const { children, ...rest } = props
  return (
    <ListItem display="flex" alignItems="flex-start" fontWeight="medium" maxW="260px" {...rest}>
      <CheckIcon mr="4" mt="1" color={mode('yellow.500', 'yellow.300')} />
      <Text as="span" display="inline-block" color={useColorModeValue('gray.800','gray.100')}>
        {children}
      </Text>
    </ListItem>
  )
}

const PopularBadge = (props) => (
  <Box
    whiteSpace="nowrap"
    top="-4"
    left="50%"
    transform="translateX(-50%)"
    pos="absolute"
    rounded="md"
    fontWeight="bold"
    fontSize="sm"
    px="4"
    py="1"
    textTransform="uppercase"
    bg="yellow.500"
    color="white"
    {...props}
  />
)

const PriceDisplay = (props) => {
  const { currency, price } = props
  return (
    <Flex w="100%" align="center" justify="center" my="5" fontWeight="bold">
      <Text fontSize="72px" lineHeight="1" letterSpacing="tight">
        {price}
      </Text>
      <Text fontSize="4xl" mr="0" color="yellow.400">
        {currency}
      </Text>
    </Flex>
  )
}

const PricingWrapper = (props) => {
  const { highlight, ...rest } = props
  const popularStyles = {
    borderWidth: '2px',
    borderColor: 'yellow.500',
    zIndex: 1,
    px: '8',
    pt: '12',
    pb: '10',
    top: {
      lg: '-8',
    },
  }
  const styles = highlight ? popularStyles : null
  return (
    <Box
      w="full"
      maxW="md"
      mx="auto"
      bg={mode('white', 'gray.700')}
      px="10"
      pt="8"
      pb="8"
      rounded="lg"
      shadow="base"
      position="relative"
      {...styles}
      {...rest}
    />
  )
}

export const PricingCard = (props) => {
  const { onClick, features, name, description, price, popular, ...rest } = props
  return (
    <PricingWrapper highlight={popular} {...rest}>
      {popular && <PopularBadge>Most Popular</PopularBadge>}

      <Flex direction="column" justify="center">
        <Text align="center" fontSize="2xl" fontWeight="bold">
          {name}
        </Text>
        <Text align="center" mt="2" color={mode('gray.600', 'gray.400')} maxW="16rem" mx="auto">
          {description}
        </Text>
        <PriceDisplay currency="DT" price={price} />
      </Flex>

      <List stylePosition="outside" mt="8" spacing={4}>
        {features.map((feature, idx) => (
          <PricingDetail key={idx}>{feature}</PricingDetail>
        ))}
      </List>

      <Button
        minH="3.5rem"
        rounded="lg"
        fontWeight="bold"
        colorScheme={popular ? 'yellow' : 'gray'}
        mt="8"
        w="100%"
        onClick={onClick}
      >
        Get Started
      </Button>
    </PricingWrapper>
  )
}
