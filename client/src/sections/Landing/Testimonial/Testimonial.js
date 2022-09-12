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
      'https://scontent.ftun2-1.fna.fbcdn.net/v/t39.30808-6/274480513_1179989572537674_7273953419814914029_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fZ5YRsJePpoAX9sdmkx&_nc_ht=scontent.ftun2-1.fna&oh=00_AT_2O_MvXCIJL54cX4yX9_JHQLpyZP5DtJHSpxaxgGVl2g&oe=63176DF1',
  },
  {
    name: 'Ahmed Attafi',
    role: 'Agriculteur',
    content:
      "I didn't even need training. We've used Indigenes for the last five years. I have gotten at least 50 times the value from Indigenes.",
    avatar:
      'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/300271287_3263415900639724_6982472569732085284_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wct0fBuekH4AX8id5gw&_nc_ht=scontent.ftun2-2.fna&oh=00_AT8hYQmip6Q0bYIUr961JzGUPmYNMpwRkNEMY5_qsgFQYA&oe=6317C812',
  },
];

const backgrounds = [
  `url("data:image/svg+xml, %3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'560\' height=\'185\' viewBox=\'0 0 560 185\' fill=\'none\'%3E%3Cellipse cx=\'102.633\' cy=\'61.0737\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23ED64A6\' /%3E%3Cellipse cx=\'399.573\' cy=\'123.926\' rx=\'102.633\' ry=\'61.0737\' fill=\'%23F56565\' /%3E%3Cellipse cx=\'366.192\' cy=\'73.2292\' rx=\'193.808\' ry=\'73.2292\' fill=\'%2338B2AC\' /%3E%3Cellipse cx=\'222.705\' cy=\'110.585\' rx=\'193.808\' ry=\'73.2292\' fill=\'%23ED8936\' /%3E%3C/svg%3E")`,
  `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
];

function TestimonialCard(props) {
  const { name, role, content, avatar, index } = props;
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
      _after={{
        content: '""',
        position: 'absolute',
        height: '21px',
        width: '29px',
        left: '35px',
        top: '-10px',
        backgroundSize: 'cover',
      }}
      _before={{
        content: '""',
        position: 'absolute',
        zIndex: '-1',
        height: 'full',
        maxW: '640px',
        width: 'full',
        filter: 'blur(40px)',
        transform: 'scale(0.98)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        top: 0,
        left: 0,
        backgroundImage: backgrounds[index % 4],
      }}
    >
      <Box width="10em" position="relative " top="-65px">
        <Image postion="absolute" src={quote} />
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
        mx={'auto'}
      >
        {testimonials.map((cardInfo, index) => (
          <TestimonialCard {...cardInfo} index={index} />
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
