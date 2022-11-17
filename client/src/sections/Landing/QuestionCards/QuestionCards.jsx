import React from 'react';
import './QuestionCards.css';
import {
  Box,
  useColorModeValue,
  Grid,
  GridItem,
  Center,
} from '@chakra-ui/react';

export const QuestionCards = () => {
  const bgcolor = useColorModeValue('#f1f1f1', '#2d3748');
  return (
    <>
      <Center>
        <Box mt={'2vh'} mb={'10vh'}>
          <Box className="containerQ">
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                xl: 'repeat(3, 1fr)',
              }}
              gap={{ base: '3vh', sm: '8vw' }}
            >
              <GridItem>
                <div className="cardQ">
                  <Box className="face face1" background={bgcolor}>
                    <div className="contentQ">
                      <i className="fab fa-windows" />
                      <h3 className="titleText">
                        What are the benefits of investing in Tunisian
                        agriculture ?
                      </h3>
                    </div>
                  </Box>
                  <div className="face face2">
                    <div className="contentQ">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde ab repudiandae, explicabo voluptate et hic cum
                        ratione a. Officia delectus illum perferendis maiores
                        quia molestias vitae fugiat aspernatur alias corporis?
                      </p>
                    </div>
                  </div>
                </div>
              </GridItem>
              <GridItem>
                <div className="cardQ">
                  <Box className="face face1" background={bgcolor}>
                    <div className="contentQ">
                      <i className="fab fa-android" />{' '}
                      <h3 className="titleText">
                        How much do I need to invest to join the platform ?
                      </h3>
                    </div>
                  </Box>
                  <div className="face face2">
                    <div className="contentQ">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde ab repudiandae, explicabo voluptate et hic cum
                        ratione a. Officia delectus illum perferendis maiores
                        quia molestias vitae fugiat aspernatur alias corporis?
                      </p>
                    </div>
                  </div>
                </div>
              </GridItem>
              <GridItem>
                <div className="cardQ">
                  <Box className="face face1" background={bgcolor}>
                    <div className="contentQ">
                      <i className="fab fa-apple" />
                      <h3 className="titleText">
                        What's the investment process like with Indigenes ?
                      </h3>
                    </div>
                  </Box>
                  <div className="face face2">
                    <div className="contentQ">
                      <p>
                        {' '}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Unde ab repudiandae, explicabo voluptate et hic cum
                        ratione a. Officia delectus illum perferendis maiores
                        quia molestias vitae fugiat aspernatur alias corporis?
                      </p>
                    </div>
                  </div>
                </div>
              </GridItem>
            </Grid>
          </Box>
        </Box>
      </Center>
    </>
  );
};
