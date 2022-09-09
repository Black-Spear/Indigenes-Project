// Chakra imports
import { Flex, Grid, useColorModeValue } from "@chakra-ui/react";
import avatar4 from "../../assets/img/avatars/avatar4.png";
import ProfileBgImage from "../../assets/img/ProfileBackground.png";
import React from "react";
import { FaCube, FaPenFancy } from "react-icons/fa";
import Header from "./components/Header";

import ProfileInformation from "./components/ProfileInformation";
import Projects from "./components/Projects";
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import styled from '@emotion/styled';
import Wave from "react-wavify";
import Waves from "./components/Waves";



function Profile() {
  // Chakra color mode

  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );

  return (
    <Flex direction='column'>
      <Header
        backgroundHeader={Waves}
        backgroundProfile={bgProfile}
        avatarImage={avatar4}
        name={"Esthera Jackson"}
        email={"esthera@simmmple.com"}
        tabs={[
          {
            name: "OVERVIEW",
            icon: <FaCube w='100%' h='100%' />,
          },
          {
            name: "TEAMS",
            icon: <FaPenFancy w='100%' h='100%' />,
          },
          {
            name: "PROJECTS",
            icon: <FaPenFancy w='100%' h='100%' />,
          },
        
        ]}
      
       
      />
      
      <Grid gap='22px'>
       
        <ProfileInformation
          title={"Profile Information"}
          description={
            "Hi, I’m Esthera Jackson, Decisions: If you can’t decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
          }
          name={"Esthera Jackson"}
          mobile={"(44) 123 1234 123"}
          email={"esthera@simmmple.com"}
          location={"United States"}
        />
       
      </Grid>
      <Projects title={"Projects"} description={"Architects design houses"} />
    </Flex>
  );
}

export default Profile;
