import React from "react";

//components
import sage from "../img/sage.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <StyledLanding>
      <StyledBackground></StyledBackground>
      <StyledContainer>
        <img src={sage} alt="" />
        <StyledCta>
          <h1>Call to Action</h1>
          <span></span>
          <h3>This is some text about the CTA</h3>
        </StyledCta>
      </StyledContainer>
    </StyledLanding>
  );
};

const StyledLanding = styled(motion.div)`
  position: relative;
`;

const StyledBackground = styled(motion.div)`
  position: absolute;
`;

const StyledContainer = styled(motion.div)`
  height: 90vh;
  position: relative;
  /* background: blue; */
  width: fit-content;

  img {
    padding: 2rem 0 10rem 100px;
    /* max-width: 50%; */
    height: 100%;
    object-fit: cover;
  }
`;

const StyledCta = styled(motion.div)`
  position: absolute;
  background: white;
  top: 12%;
  left: 75%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  padding: 5rem;
  width: 100%;
  cursor: pointer;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);

  span {
    background: black;
    width: 80%;
    height: 2px;
    margin: 0 auto;
  }
`;

export default LandingPage;
