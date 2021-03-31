import React from "react";

//components
import sage from "../img/sage.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { revealRight } from "../animations";

const LandingPage = () => {
  return (
    <StyledLanding>
      <StyledBackground></StyledBackground>
      <StyledContainer variants={revealRight} animate="show" initial="hidden">
        <img src={sage} alt="" />
        <StyledCta variants={revealRight} animate="show" initial="hidden">
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
  background: #c0c0cf;
  width: fit-content;

  img {
    padding: 2rem 0 10rem 100px;
    /* max-width: 50%; */
    height: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    width: 100vw;
    overflow-x: hidden;
    img {
      display: none;
    }
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
  max-width: 50vw;
  cursor: pointer;
  box-shadow: 0 0 3rem rgba(0, 0, 0, 0.2);

  h1 {
    transition: 0.5s;
    /* background: blue; */
    position: relative;
    width: fit-content;
    margin: 0 auto;
    padding-bottom: 2rem;

    &:hover {
      color: #638963;
      scale: 1.05;
    }

    &::after {
      content: "";
      height: 5px;
      width: 0%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: black;
      transition: 0.5s;
    }
    &:hover::after {
      width: 100%;
    }
  }

  span {
    background: black;
    width: 80%;
    height: 2px;
    margin: 0 auto;
  }
`;

export default LandingPage;
