import React from 'react'
import {Header} from "../components/Header/Header";
import Landing from '../pages/Landing';
import Footer from '../components/Footer/Footer';
import { background, Box, color } from '@chakra-ui/react';
export const Main = () => {
  return (
   <>

<Box
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
<Header/>
   <Landing/>
   <Footer/>
</Box>




  




   </>
  )
}
