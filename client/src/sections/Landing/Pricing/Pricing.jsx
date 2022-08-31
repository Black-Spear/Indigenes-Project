import { Box, Button, Flex, Heading, SimpleGrid, Stack, Text, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'



export const Pricing = () => {
  return (
    <Box as="section" py="20">
      <Box
        maxW={{
          base: 'xl',
          md: '7xl',
        }}
        mx="auto"
        px={{
          base: '6',
          md: '8',
        }}
      >
        <Heading
          as="h1"
          size="2xl"
          fontWeight="bold"
          textAlign={{
            sm: 'center',
          }}
        >
          Pricing <span>Plans</span>
        </Heading>
        <Text
          mt="4"
          maxW="xl"
          mx="auto"
          fontSize="xl"
          color={mode('gray.600', 'gray.400')}
          textAlign={{
            sm: 'center',
          }}
        >
          Start building for free, then add a site plan to go live. Account plans unlock additional
          features.
        </Text>
        <Box mt={8}>
            <Flex
              rounded="md"
              mx={10}
              bg={'white'}
              _dark={{bg : 'gray.900'}}
              shadow="xl"
              mb="100px"
              textAlign="left"
              direction={{
                base: "column",
                lg: "row",
              }}
            >
              <Stack spacing={8} p="45px" flex="0.7">
                <Text fontSize="3xl" fontWeight="bold" lineHeight="tight">
                  Lifetime Membership
                </Text>
                <Text
                  fontSize={["sm", , "md"]}
                  color="gray.600"
                  _dark={{
                    color: "gray.400",
                  }}
                >
                  One plan for any organization—from startups to Fortune 500s.
                  We offer 50% off of for all students and universities. Please
                  get in touch with us and provide proof of your status.
                </Text>
                <Flex align="center">
                  <Text
                    fontFamily="body"
                    whiteSpace="nowrap"
                    fontWeight="semibold"
                    textTransform="uppercase"
                    color="yellow.400"
                  >
                    What's included
                  </Text>
                  <Flex
                    ml="15px"
                    w="full"
                    borderTopWidth="1px"
                    h="3px"
                    
                  />
                </Flex>
                <SimpleGrid columns={[1, , 2, 1, 2]} spacingY={4}>
                  <Text>Unlimited Projects</Text>
                  <Text>Email Tracking and Analytics </Text>
                  <Text>Email APIs, SMTP Relay, and Webhooks</Text>
                  <Text>1 Dedicated IP (Foundation 100k and up)</Text>
                </SimpleGrid>
              </Stack>
              <Stack
                p="45px"
                flex="0.3"
                justify="center"
                align="center"
                bg="#F9FAFB"
                _dark={{
                  bg: "gray.900",
                }}
                borderRightRadius="md"
              >
                <Text fontSize="xl" fontWeight="semibold">
                  Pay once, use anytime
                </Text>
                <Flex
                  align="center"
                  fontSize="5xl"
                  fontWeight={["bold", , "extrabold"]}
                  lineHeight="tight"
                >
                  500
                  <span
                    ml={2}
                    fontSize="2xl"
                    fontWeight="medium"
                    color="gray.500"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    {" "}
                    DT
                  </span>
                </Flex>
                <Stack spacing={6}>
                  <Text
                    textDecor="underline"
                    color="gray.600"
                    _dark={{
                      color: "gray.400",
                    }}
                  >
                    Learn more about our membership
                  </Text>
                  <Button w="300px" colorScheme="yellow" py={6}>
                    Get Access
                  </Button>
                  <Text align="center" fontWeight="semibold">
                    Get a free sample
                    <span
                      ml={2}
                      color="gray.500"
                      _dark={{
                        color: "gray.400",
                      }}
                      fontWeight="medium"
                    >
                      (50MB)
                    </span>
                  </Text>
                </Stack>
              </Stack>
            </Flex>
          </Box>
      </Box>
    </Box>
  )
}
