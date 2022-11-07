import {
  Avatar,
  Box,
  chakra,
  Flex,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Image,
} from '@chakra-ui/react';
import quote from '../../../assets/img/quote.svg';

const testimonials = [
  {
    name: 'Mohamed Ashref Ben Abdallah',
    role: 'Entrepreneur',
    content:
      'The Indigenes program has been critical to us for funding our project, we were able to find investors from all around Tunisia thanks to the platform !',
    avatar:
      'https://scontent.ftun4-2.fna.fbcdn.net/v/t39.30808-1/274480513_1179989572537674_7273953419814914029_n.jpg?stp=dst-jpg_p240x240&_nc_cat=108&ccb=1-7&_nc_sid=7206a8&_nc_ohc=YM3ITAK_VQoAX8PWMTh&_nc_ht=scontent.ftun4-2.fna&oh=00_AT8xCzw2JFWxy3FyUmUFUVqAWG1r3al89V4SA7H6jqYx0w&oe=63514EB3',
  },
  {
    name: 'Ahmed Attafi',
    role: 'Agriculteur',
    content:
      "I didn't even need training. We've used Indigenes for the last five years. I have gotten at least 50 times the value from Indigenes.",
    avatar:
      'https://scontent.ftun13-1.fna.fbcdn.net/v/t39.30808-1/305129813_3273454626302518_7407516586219852141_n.jpg?stp=dst-jpg_s320x320&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=bOthISNX7bEAX-q7qJN&_nc_ht=scontent.ftun13-1.fna&oh=00_AT_hJKmHoWX4KSYTAlMc_AGquPRDbhSeuwQVLO35DLbbcQ&oe=6357A1D5',
  },
];

function TestimonialCard(props) {
  const { name, role, content, avatar } = props;
  return (
    <Flex
      boxShadow=" -10px 15px 60px 0px #ecc94b85"
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Box
        position="absolute "
        top={{
          base: '-2.5em',
          md: '-2.5em',
          xl: '-2.5em',
        }}
        width={{
          base: '4em',
          md: '4em',
          xl: '4em',
        }}
      >
        <Image postion="relative" src={quote} objectFit="fill" />
      </Box>
      <Flex
        direction={'column'}
        textAlign={'left'}
        justifyContent={'space-between'}
      >
        <chakra.p
          fontFamily={'Poppins'}
          fontWeight={'medium'}
          fontSize={'15px'}
          pb={4}
        >
          {content}
        </chakra.p>
        <chakra.p fontFamily={'Poppins'} fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span
            fontFamily={'Poppins'}
            fontWeight={'medium'}
            color={'gray.500'}
          >
            {' '}
            - {role}
          </chakra.span>
        </chakra.p>
      </Flex>
      <Avatar
        src={avatar}
        height={'80px'}
        width={'80px'}
        alignSelf={'center'}
        m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
      />
    </Flex>
  );
}

export function Testimonial() {
  return (
    <Flex
      textAlign={'center'}
      pt={10}
      justifyContent={'center'}
      direction={'column'}
      width={'full'}
    >
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'yellow.400'}
        >
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'Poppins'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          Relationships based on trust
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Poppins'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            50 projects
          </chakra.strong>{' '}
          chose the Indigenes program to fund their projects !
        </chakra.h2>
      </Box>
      <SimpleGrid
        columns={{ base: 1, xl: 2 }}
        spacing={'20'}
        mt={16}
        mx={{ base: '1em', sm: 'auto' }}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} key={index} />
        ))}
      </SimpleGrid>
      <Box>
        <Icon viewBox="0 0 40 35" mt={14} boxSize={10} color={'yellow.400'}>
          <path
            fill={'currentColor'}
            d="M10.7964 5.04553e-07C8.66112 -0.000123335 6.57374 0.632971 4.79827 1.81922C3.0228 3.00547 1.63898 4.69158 0.82182 6.66433C0.00466116 8.63708 -0.209132 10.8079 0.207477 12.9021C0.624087 14.9964 1.65239 16.9201 3.16233 18.4299L19.1153 34.3828C19.2395 34.5074 19.3871 34.6062 19.5496 34.6736C19.7121 34.741 19.8863 34.7757 20.0622 34.7757C20.2381 34.7757 20.4123 34.741 20.5748 34.6736C20.7373 34.6062 20.8848 34.5074 21.0091 34.3828L36.962 18.4272C38.9319 16.3917 40.0228 13.6636 39.9996 10.8311C39.9764 7.99858 38.8409 5.28867 36.838 3.28573C34.835 1.28279 32.1251 0.147283 29.2926 0.124081C26.4601 0.100879 23.732 1.19184 21.6965 3.1617L20.0622 4.79337L18.4305 3.1617C17.4276 2.15892 16.237 1.36356 14.9267 0.821064C13.6163 0.278568 12.2119 -0.000433066 10.7937 5.04553e-07H10.7964Z"
          />
        </Icon>
      </Box>
    </Flex>
  );
}
