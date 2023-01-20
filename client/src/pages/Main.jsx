import { Header } from '../components/Header/Header';
import Landing from '../pages/Landing';
import Footer from '../components/Footer/Footer';
import { Box } from '@chakra-ui/react';

export const Main = () => {
  return (
    <>
      <Box
        width={'100%'}
        sx={{
          '&::-webkit-scrollbar': {
            width: '16px',
            borderRadius: '8px',
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: `rgba(0, 0, 0, 0.05)`,
          },
        }}
      >
        <Header />
        <Landing />
        <Footer />
      </Box>
    </>
  );
};
