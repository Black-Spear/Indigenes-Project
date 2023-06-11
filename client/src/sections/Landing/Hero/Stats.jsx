import {
  Box,
  Button,
  Heading,
  Text,
  Flex,
  SimpleGrid,
  Grid,
  GridItem,
  Container,
} from '@chakra-ui/react';
import CountUp from 'react-countup';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation();

  const MotionGrid = motion(SimpleGrid);
  const MotionText = motion(Text);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const MotionGridItem = motion(GridItem);
  const { ref, inView } = useInView({ threshold: 0.1 }); //variable of useInView declaration
  const animation = useAnimation();

  return (
    <Box w={'100%'} bgColor="#f7fafc" _dark={{ bgColor: '#1a202c' }}>
      <Container py={5} maxW={'container.lg'}>
        <Grid
          id="stats"
          scrollMarginTop={'15vh'}
          paddingTop={'10vh'}
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          }}
          mb="5vh"
          gap={6}
          maxWidth="100%"
        >
          <MotionGridItem
            w="100%"
            colSpan={{ base: 1, sm: 2, md: 2 }}
            // initial={{ opacity: 0, x: '-25vw', scale: 1 }} //animation inizaiale lel ktiba main
            // whileInView={{ opacity: 1, x: 0, scale: 1 }} //#foufou_kesa7
            // transition={{ type: 'spring', duration: 2, bounce: 0.1 }}
            // viewport={{ once: true }}
          >
            <Heading mb={3}>{t('stats.safeInvestment')}</Heading>
            <Heading>{t('stats.accessible')}</Heading>
          </MotionGridItem>
          <MotionGridItem>
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                <CountUp start={0} end={25} enableScrollSpy />
                <span>%</span>
              </Text>
              <Box fontSize={'sm'}>{t('stats.moreProfit')}</Box>
            </Flex>
          </MotionGridItem>
          <MotionGridItem>
            <Flex flexDirection={'column'}>
              <Text fontSize={'4xl'} fontWeight={'bold'}>
                <CountUp start={0} end={55} duration={2.5} enableScrollSpy />
                <span>%</span>
              </Text>
              <Box fontSize={'sm'}>{t('stats.lessRisk')}</Box>
            </Flex>
          </MotionGridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export { Stats };
