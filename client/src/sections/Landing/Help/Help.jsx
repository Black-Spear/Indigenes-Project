import {
  Stack,
  useColorModeValue,
  Container,
  Link,
  Box,
  Text,
  Button,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Stack
      direction={{ base: 'column', md: 'row' }}
      spacing={5}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      rounded="xl"
      boxShadow="lg"
      shadow={'2xl'}
      bg={useColorModeValue('gray.50', 'blackAlpha.200')}
      p={{ base: 8, md: 16 }}
      py={{ md: '24' }}
      my="12"
    >
      <Box>
        <Text
          fontSize={{ base: '3xl', md: '4xl' }}
          lineHeight={1.2}
          fontWeight="bold"
        >
          {t('banner.headline')}
        </Text>
        <Text
          fontSize={{ base: 'xl', md: '2xl' }}
          lineHeight={1.2}
          fontWeight="medium"
          // color='#e3bf3e'
          color={useColorModeValue('#cca000', '#faf089')}
          border="none"
        >
          {t('banner.subheadline')}
        </Text>
      </Box>
      <Stack
        direction={{ base: 'column', sm: 'row' }}
        spacing={{ base: 0, sm: 3 }}
        w={{ base: '100%', sm: 'auto' }}
      >
        <Button
          as={Link}
          href="#"
          color="white"
          variant="solid"
          size="lg"
          rounded="xl"
          mb={{ base: 2, sm: 0 }}
          lineHeight={1}
          bgGradient="linear(to-tl, #efa734,#ffcc2f)"
          _hover={{ bgGradient: 'linear(to-tl, #ef5734,#ffcc2f)' }}
        >
          {t('banner.getStarted')}
        </Button>
        <Button
          as={Link}
          href="#"
          size="lg"
          rounded="xl"
          mb={{ base: 2, sm: 0 }}
          bg={useColorModeValue('gray.200', 'gray.600')}
          _hover={{ bg: useColorModeValue('gray.300', 'gray.500') }}
          lineHeight={1}
        >
          {t('banner.learnMore')}
        </Button>
      </Stack>
    </Stack>
  );
};

const Help = () => {
  return (
    <Container maxW="5xl" p="6" id="helpme">
      <Banner />
    </Container>
  );
};

export { Help };
