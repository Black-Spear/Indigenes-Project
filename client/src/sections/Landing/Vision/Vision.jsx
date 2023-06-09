import {
  Container,
  Text,
  Stack,
  Icon,
  Image,
  useColorModeValue as col,
  Box,
} from '@chakra-ui/react';
import { ImQuotesLeft } from 'react-icons/im';
import image from '../../../assets/img/rayen.jpg';
import { useTranslation } from 'react-i18next';

const Vision = () => {
  const { t } = useTranslation();
  const visionText = t('vision.text');
  const visionAuthor = t('vision.author');
  const visionPosition = t('vision.position');

  return (
    <>
      <Container maxW="5xl" p={{ base: 5, md: 8 }}>
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
              {visionText}
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
                {visionAuthor}
              </Text>
              <Text
                fontWeight="medium"
                fontSize="sm"
                color={col('gray.600', 'white')}
              >
                {visionPosition}
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export { Vision };
