import { Fragment } from 'react';
import {
  Container,
  Text,
  Stack,
  Icon,
  Image,
  useColorModeValue as col,
  Box,
} from '@chakra-ui/react';
// ya baltiii react-icons package for the icon
import { ImQuotesLeft } from 'react-icons/im';
import image from '../../../assets/img/rayen.jpg';

const testimonials = [
  {
    name: 'Rayen Fassatoui',
    position: 'Web Developer',
    company: 'Indigenes™',
    image:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb',
    content:
      'Our vision here at Indignes is to help people invest in the future of Tunisia, because we will all benefit from it and feel the impact it will hopefully do for the next generations of Tunisian youth.',
  },
];

const Vision = () => {
  return (
    <>
      <Container maxW="5xl" p={{ base: 5, md: 8 }}>
        {testimonials.map((obj, index) => (
          <Fragment key={index}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              bgGradient="linear(to-br, #FFDB20, #FBB41A)"
              spacing={{ base: 0, sm: 10 }}
              p={{ base: 4, sm: 10 }}
              rounded="lg"
              justify="center"
            >
              <Box
                width={{ base: '5rem', md: '25rem', lg: '30rem' }}
                pos="relative"
                d={{ base: 'none', sm: 'block' }}
              >
                <Image
                  width={{ base: '7rem', sm: '20rem' }}
                  height={{ base: '7rem', sm: '20rem' }}
                  size="3xl"
                  pos="absolute"
                  rounded="lg"
                  src={image}
                  top={{ base: '-4rem', sm: '-3.8rem' }}
                  boxShadow="lg"
                  objectFit={'cover'}
                />
              </Box>

              <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
                <Icon as={ImQuotesLeft} w={10} h={10} />
                <Text
                  textColor={col('black', 'white')}
                  fontSize="lg"
                  fontWeight="medium"
                  textAlign={{ base: 'center', sm: 'left' }}
                >
                  {obj.content}
                </Text>
                <Stack
                  alignItems={{ base: 'center', sm: 'flex-start' }}
                  spacing={0}
                >
                  <Text
                    fontWeight="bold"
                    fontSize="lg"
                    color={col('black', 'white')}
                  >
                    {obj.name}
                  </Text>
                  <Text
                    fontWeight="medium"
                    fontSize="sm"
                    color={col('gray.600', 'white')}
                  >
                    {obj.position}, {obj.company}
                  </Text>
                </Stack>
              </Stack>
            </Stack>
          </Fragment>
        ))}
      </Container>
    </>
  );
};

export { Vision };
