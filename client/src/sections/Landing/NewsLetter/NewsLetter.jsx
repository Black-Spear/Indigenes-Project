import {
  Box,
  chakra,
  Container,
  Button,
  Heading,
  Input,
  Link,
  Text,
  HStack,
  VStack,
  Flex,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaRegNewspaper } from 'react-icons/fa';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const articles = [
  {
    id: 1,
    categories: ['Agriculture'],
    title: 'What will Ukrainian agriculture look like in 2023?',
    content: `The amount of grain in 2023 is projected to be 37% less than 2022 and 60% less than 2021. A gross harvest of 19.3 million tons is expected for oilseeds...`,
    created_at: 'January 29, 2023',
  },
  {
    id: 2,
    categories: ['Agriculture'],
    title: 'Tunisia milk market collapsing as feed prices soar',
    content: `The dairy sector's woes in Tunisia have been exacerbated by years of drought. The North African country's farming union says the price of cattle ...`,
    created_at: 'January 28, 2023',
  },
];

const Card = ({ title, categories, content, created_at }) => {
  return (
    <HStack
      p={{ base: 3, sm: 6 }}
      bg={useColorModeValue('gray.100', 'gray.700')}
      spacing={5}
      rounded="lg"
      alignItems="center"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue(
          '#edf2f6',
          '#2d3748'
        )} transparent`,
        borderStyle: 'solid',
        borderWidth: '15px 15px 15px 0',
        position: 'absolute',
        left: '-15px',
        display: 'block',
      }}
    >
      <Icon as={FaRegNewspaper} w={12} h={12} color="#e3bf3e" />
      <Box>
        <HStack spacing={2} mb={2}>
          {categories.map(cat => (
            <Text fontSize="sm" key={cat}>
              {cat}
            </Text>
          ))}
        </HStack>
        <VStack spacing={0} mb={3} textAlign="left">
          <chakra.h1
            as={Link}
            _hover={{ color: '#e3bf3e' }}
            // fontSize="2xl"
            fontSize={{ base: 'lg', md: '2xl' }}
            lineHeight={1.2}
            fontWeight="bold"
            w="100%"
          >
            {title}
          </chakra.h1>
          <Text fontSize="md" noOfLines={2}>
            {content}
          </Text>
        </VStack>
        <Text fontSize="sm">{created_at}</Text>
      </Box>
    </HStack>
  );
};

const LineWithDot = () => {
  return (
    <Flex pos="relative" alignItems="center" mr="40px">
      <chakra.span
        position="absolute"
        left="50%"
        height="calc(100% + 10px)"
        border="1px solid"
        borderColor={useColorModeValue('gray.200', 'gray.700')}
        top="0px"
      ></chakra.span>
      <Box pos="relative" p="10px">
        <Box
          pos="absolute"
          width="100%"
          height="100%"
          bottom="0"
          right="0"
          top="0"
          left="0"
          backgroundSize="cover"
          backgroundRepeat="no-repeat"
          backgroundPosition="center center"
          backgroundColor="rgb(255, 255, 255)"
          borderRadius="100px"
          border="3px solid #e3bf3e"
          backgroundImage="none"
          opacity={1}
        ></Box>
      </Box>
    </Flex>
  );
};

const NewsLetter = () => {
  return (
    <>
      <Container maxWidth="4xl" p={{ base: 2, sm: 10 }}>
        <Box my="16">
          <Heading
            fontSize={{ base: '4xl', md: '5xl' }}
            mb="15px"
            textAlign={{ base: 'center', sm: 'left' }}
          >
            The best <span>investors</span> know the news, <br />
            join our <span>newsletter</span>.
          </Heading>
          <Text
            color="gray.400"
            mb="8"
            fontSize={'md'}
            textAlign={{ base: 'center', sm: 'left' }}
          >
            Get notified about upcoming sessions, news, articles, laws, and
            agricultural projects.
          </Text>

          <form action="#">
            <Box position="relative">
              <Input
                type="email"
                isRequired
                name="entry.1808449400"
                px="25px"
                height="50px"
                rounded="50px"
                bg={useColorModeValue('gray.900', 'gray.600')}
                _placeholder={{ color: 'gray.300' }}
                placeholder="Enter your email"
                _focus={{ outline: 0 }}
                color="gray.100"
                borderWidth={0}
              />
              <Button
                type="submit"
                height="50px"
                color="gray.100"
                _hover={{ bg: 'yellow.400', color: 'gray.900' }}
                position="absolute"
                top="0"
                right="0"
                bg="gray.700"
                rounded="50px"
                px="25px"
              >
                Subscribe
              </Button>
            </Box>
          </form>
        </Box>

        {articles.map((article, index) => (
          <Flex key={index} mb="5">
            <LineWithDot />
            <Card {...article} />
          </Flex>
        ))}
      </Container>
      <Flex w="100%" justifyContent={'center'}>
        <Button
          rightIcon={<HiOutlineArrowNarrowRight color="black" />}
          colorScheme="yellow"
          variant="solid"
          borderRadius={'xl'}
          mb="4"
        >
          Articles section
        </Button>
      </Flex>
    </>
  );
};
export { NewsLetter };
