import React from 'react';
import './QuestionCards.css';
import { Box, useColorModeValue, Heading } from '@chakra-ui/react';

export const QuestionCards = () => {
  const bgcolor = useColorModeValue('#f1f1f1', '#2d3748');
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        alignContent={'center'}
        flexDirection="column"
        mt={'2vh'}
        mb={'10vh'}
      >
        <div className="containerQ">
          <div className="cardQ">
            <Box className="face face1" background={bgcolor}>
              <div className="contentQ">
                <i
                  className="fab fa-windows" // !This is an  icon
                />
                <h3 className="titleText" >
                  What are the benefits of investing in Tunisian agriculture ?
                </h3>
              </div>
            </Box>
            <div className="face face2">
              <div className="contentQ">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ab repudiandae, explicabo voluptate et hic cum ratione a.
                  Officia delectus illum perferendis maiores quia molestias
                  vitae fugiat aspernatur alias corporis?
                </p>
              </div>
            </div>
          </div>
          <div className="cardQ">
            <Box className="face face1" background={bgcolor}>
              <div className="contentQ">
                <i className="fab fa-android" />{' '}
                <h3 className='titleText'>How much do I need to invest to join the platform ?</h3>
              </div>
            </Box>
            <div className="face face2">
              <div className="contentQ">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ab repudiandae, explicabo voluptate et hic cum ratione a.
                  Officia delectus illum perferendis maiores quia molestias
                  vitae fugiat aspernatur alias corporis?
                </p>
              </div>
            </div>
          </div>
          <div className="cardQ">
            <Box className="face face1" background={bgcolor}>
              <div className="contentQ">
                <i className="fab fa-apple" />
                <h3 className='titleText'>What's the investment process like with Indigenes ?</h3>
              </div>
            </Box>
            <div className="face face2">
              <div className="contentQ">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  ab repudiandae, explicabo voluptate et hic cum ratione a.
                  Officia delectus illum perferendis maiores quia molestias
                  vitae fugiat aspernatur alias corporis?
                </p>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};
