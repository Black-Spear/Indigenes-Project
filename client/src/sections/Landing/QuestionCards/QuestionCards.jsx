import React from 'react';
import './QuestionCards.css';
import { Box } from '@chakra-ui/react';

export const QuestionCards = () => {
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        alignContent={'center'}
        flexDirection="column"
        my={'15vh'}
      >
        <div className="containerQ">
          <div className="cardQ">
            <div className="face face1">
              <div className="contentQ">
                <i
                  className="fab fa-windows" // !This is an  icon
                />
                <h3>
                  What are the benefits of investing in Tunisian agriculture ?
                </h3>
              </div>
            </div>
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
            <div className="face face1">
              <div className="contentQ">
                <i className="fab fa-android" /> <h3>How much do I need to invest to join the platform ?</h3>
              </div>
            </div>
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
            <div className="face face1">
              <div className="contentQ">
                <i className="fab fa-apple" />
                <h3>What's the investment process like with Indigenes ?</h3>
              </div>
            </div>
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
