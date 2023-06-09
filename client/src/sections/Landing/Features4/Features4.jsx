import {
  Container,
  Box,
  chakra,
  Text,
  SimpleGrid,
  Flex,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const variants = {
  open: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      duration: 1,
      bounce: 0.3,
    },
  },
  closed: { opacity: 0, scale: 0.5 },
};

const Features4 = () => {
  const { t } = useTranslation();

  const color = useColorModeValue('gray.100', 'gray.700');
  const features = t('featurescards', { returnObjects: true });
  const icons = [
    {
      icon: (
        <svg
          width={36}
          height={36}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          ></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width={36}
          height={36}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          ></path>
        </svg>
      ),
    },
    {
      icon: (
        <svg
          width={36}
          height={36}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          ></path>
        </svg>
      ),
    },
  ];

  return (
    <Container
      maxW="6xl"
      p={{ base: 5, md: 10 }}
      id="features"
      scrollMarginTop={'20vh'}
    >
      <chakra.h3 fontSize="4xl" fontWeight="bold" mb={20} textAlign="center">
        {t('featuresCardsTitle')}
      </chakra.h3>
      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3 }}
        placeItems="center"
        spacing={10}
        mb={4}
      >
        {features.map((feature, index) => (
          <motion.div
            initial="closed" //animation
            whileInView="open"
            viewport={{ once: true, amount: 0.2 }}
            variants={variants}
            key={index}
          >
            <Box
              bg={color}
              p={6}
              rounded="lg"
              textAlign="center"
              pos="relative"
            >
              <Flex
                p={2}
                w="max-content"
                color="white"
                bgGradient="linear(to-br, #FFD600, #FBB41A)"
                rounded="md"
                marginInline="auto"
                pos="absolute"
                left={0}
                right={0}
                top="-1.5rem"
                boxShadow="lg"
              >
                {icons[index].icon}
              </Flex>
              <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
                {feature.heading}
              </chakra.h3>
              <Text fontSize="md" mt={4}>
                {feature.content}
              </Text>
              <Link href="#" mt={4} fontSize="sm" color="yellow.400">
                {t('featurescardslearnMore')}
              </Link>
            </Box>
          </motion.div>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export { Features4 };
