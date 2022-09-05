import React from 'react';
import './Features2.css';
import LogoB from '../../../assets/img/logoMiniBlack.svg';
import LogoW from '../../../assets/img/logoMiniWhite.svg';

import { Text, Box, Image, Button, useColorModeValue } from '@chakra-ui/react';

export const Features2 = () => {
  const Logo = useColorModeValue(LogoB,LogoW);
  return (
    <Box>
      <div className="container">
        <div className="cardFeature a">
          <span />
          <Box className="content" >
            <h2 color={useColorModeValue('black', '#FFFFFF')}>
              Success is best when it's shared.
            </h2>
            <Image src={Logo} width="12vh" pt="4vh" pb="6vh" />

            <Button
            variant={'outline'}
              textcolor={useColorModeValue('black', 'white')}
              border="2px"
              borderColor={useColorModeValue('black', 'white')}
              size="lg"
            >
              Learn more
            </Button>
          </Box>
        </div>
      </div>
    </Box>
  );
};
