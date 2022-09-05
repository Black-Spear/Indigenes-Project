import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

import './CardCTA.css';

export const CardCTA = () => {
  return (
    <div class="cardCTA">
      <div class="cardCTA-content">
        <Text className="cardCTA-title" color={useColorModeValue('black','white')}>
          Sign up and become a member
        </Text>
        <Text
          className="pricetext"
          align="center"
          py="1.7vh"
          fontSize={'7vh'}
          fontWeight="extrabold"
          
        >
          Join Now
        </Text>

        <Text class="cardCTA-title">
          and enjoy all the benefits of the Indigenes program.
        </Text>

        <h4 class="cardCTA-subtitle"></h4>
      </div>
      <i class="fa-solid fa-hat-witch cardCTA-icon"></i>
    </div>
  );
};
