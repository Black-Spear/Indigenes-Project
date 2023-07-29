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
import { useTranslation } from 'react-i18next';
import balti from '../../../assets/img/avatars/Balti.jpg';
import ashref from '../../../assets/img/avatars/ashref.jpg';

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
        <chakra.p fontWeight={'medium'} fontSize={'15px'} pb={4}>
          {content}
        </chakra.p>
        <chakra.p fontWeight={'bold'} fontSize={14}>
          {name}
          <chakra.span fontWeight={'medium'} color={'gray.500'}>
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
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t('testimonial.name'),
      role: t('testimonial.role'),
      content: t('testimonial.content'),
      avatar: balti,
    },
    {
      name: t('testimonial.name2'),
      role: t('testimonial.role2'),
      content: t('testimonial.content2'),
      avatar: ashref,
    },
  ];

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
          {t('testimonial.sub')}
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}
        >
          {t('testimonial.header')}
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}
        >
          {t('testimonial.p1')}{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            {t('testimonial.p2')}
          </chakra.strong>{' '}
          {t('testimonial.p3')}
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
