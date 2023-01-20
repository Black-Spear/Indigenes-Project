import { Hero } from '../sections/Landing/Hero/Hero';
import Map from '../sections/Landing/Map/Map';
import { Pricing } from '../sections/Landing/Pricing/Pricing';
import { Features4 } from '../sections/Landing/Features4/Features4';
import { Testimonial } from '../sections/Landing/Testimonial/Testimonial';
import { Popular } from '../sections/Landing/Popular/Popular';
import { About } from '../sections/Landing/About/About';
import { About2 } from '../sections/Landing/About2/About2';
import { About3 } from '../sections/Landing/About3/About3';
import { Stats1 } from '../sections/Landing/Stats1/Stats1';
import { Vision } from '../sections/Landing/Vision/Vision';
import { QuestionCards } from '../sections/Landing/QuestionCards/QuestionCards';
import { Contact } from '../sections/Landing/Contact/Contact';
import { Partners } from '../sections/Landing/Partners/Partners';
import { Tooltip1 } from "../components/Tooltip1/Tooltip1";
import {
  Box,
  Divider,
  HStack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Landing = () => {
  const colors = '#1a202c';
  return (
    <>
      <Hero />
      <Box bg="gray.50" _dark={{ bg: colors }}>
        <Partners />

        

        <Map />

        <HStack align={'center'} justify="center" spacing={6}>
          <Divider w={'40%'}></Divider>
          <Text
            color={useColorModeValue('gray.500', 'gray.600')}
            minWidth={'10.5em'}
          >
            Popular investments
          </Text>
          <Divider w={'40%'}></Divider>
        </HStack>

        <Popular />

        <HStack align={'center'} justify="center" spacing={6}>
          <Divider w={'40%'}></Divider>
          <Text
            color={useColorModeValue('gray.500', 'gray.600')}
            minWidth={'7em'}
          >
            Who we are ?
          </Text>
          <Divider w={'40%'}></Divider>
        </HStack>

        <About //Two pictures and 2 description paragraphs
        />

        <About3 //We're here to help. (visit help center)
        />

        <Features4 //Everything your app needs (3 cards with features)
        />

        <HStack align={'center'} justify="center" spacing={6} my="10vh">
          <Divider w={'40%'}></Divider>
          <Text
            minWidth={'5em'}
            color={useColorModeValue('gray.500', 'gray.600')}
          >
            Our vision
          </Text>
          <Divider w={'40%'}></Divider>
        </HStack>

        <Vision />

        <About2 //what does it mean to be part of indignees?
        />

        <QuestionCards />

        <HStack align={'center'} justify="center" spacing={6}>
          <Divider w={'40%'}></Divider>
          <Text
            color={useColorModeValue('gray.500', 'gray.600')}
            minWidth={'6em'}
          >
            Our results
          </Text>
          <Divider w={'40%'}></Divider>
        </HStack>

        <Stats1 // 3 cards with stats
        />

        <Testimonial />

        <HStack align={'center'} justify="center" spacing={6} mt="2.5em">
          <Divider w={'30%'}></Divider>
          <Text color={useColorModeValue('gray.500', 'gray.600')}>
            Do you want to be a member?
          </Text>
          <Divider w={'30%'}></Divider>
        </HStack>

        <Pricing />

        <HStack align={'center'} justify="center" spacing={6} pb="3em">
          <Divider w={'40%'}></Divider>
          <Text
            color={useColorModeValue('gray.500', 'gray.600')}
            minWidth={'6em'}
          >
            Need Help ?
          </Text>
          <Divider w={'40%'}></Divider>
        </HStack>

        <Contact />
      </Box>
    </>
  );
};

export default Landing;
