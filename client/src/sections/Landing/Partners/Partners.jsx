import React from 'react';
import { Container, Text, Wrap, WrapItem, Image } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Partners = () => {
  const { t } = useTranslation();

  return (
    <Container
      maxW="container.2xl"
      centerContent
      py="12vh"
      bgColor="#f7fafc"
      _dark={{ bgColor: '#1a202c' }}
    >
      <Text
        color="gray.900"
        _dark={{ color: 'gray.100' }}
        fontSize="3xl"
        textAlign={'center'}
        fontWeight="medium"
      >
        {t('partners')}
      </Text>

      <Wrap spacing={[10, 20]} mt={8} align="center" justify="center" w="full">
        <WrapItem>
          <Image
            src="https://logos-world.net/wp-content/uploads/2020/09/Microsoft-Logo.png"
            alt="Microsoft logo"
            maxH={'10vh'}
          />
        </WrapItem>

        <WrapItem>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png"
            alt="Adobe logo"
            maxH={'4vh'}
          />
        </WrapItem>

        <WrapItem>
          <Image
            src="https://upload.wikimedia.org/wikipedia/fr/f/ff/Logo-delice-Holding.png"
            alt="Delice Logo"
            maxH={'10vh'}
          />
        </WrapItem>

        <WrapItem>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/5/54/ZITOUNA.png"
            alt="Zitouna logo"
            maxH={'10vh'}
          />
        </WrapItem>
      </Wrap>
    </Container>
  );
};

export { Partners };
