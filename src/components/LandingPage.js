import React, { forwardRef } from "react";

//components
import sage from "../img/sage.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { scaleDown, opacity, revealDown } from "../animations";

const LandingPage = forwardRef(({}, ref) => {
  return (
    <StyledLanding ref={ref}>
      <StyledContainer variants={scaleDown} initial="hidden" animate="show">
        <img src={sage} alt="" />
        <StyledCta variants={opacity}>
          <h1>Chronic illness doesn't have to be a burden</h1>
          <span></span>
          <motion.h2 variants={revealDown}>
            We can help. Find out <span>how</span>.
          </motion.h2>
        </StyledCta>
      </StyledContainer>
    </StyledLanding>
  );
});

const StyledLanding = styled(motion.div)`
  min-height: 100vh;
  padding-bottom: 2.5vw;
  background: white;
  position: relative;
`;

const StyledContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  background: #c0c0cf;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 1rem;
  z-index: 0;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 1rem;
    transform: scale(1);
  }
`;

const StyledCta = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;

  h2 {
    font-weight: bold;
    font-style: italic;
    padding-top: 2rem;
  }

  h1 {
    transition: 0.5s;
    position: relative;
    width: fit-content;
    /* background: white; */
    width: 100vw;
    max-width: 600px;
    padding-bottom: 2rem;
    font-size: calc(4rem + 0.5vw);
    font-weight: bold;
    font-style: italic;

    &:hover {
      transform: scale(1.05);
    }

    &::after {
      content: "";
      height: 5px;
      width: 0%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: white;
      transition: 0.75s;
    }
    &:hover::after {
      width: 100%;
    }
  }
`;

export default LandingPage;
