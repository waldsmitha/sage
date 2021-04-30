import React from "react";
import Brand from "./Brand";
import Nav from "./Nav";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import {
  toggleTiltRight,
  toggleTiltLeft,
  ToggleOpacityRight,
} from "../animations";

const Header = ({ navActive, setNavActive, active, setActive }) => {
  const navToggle = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };

  return (
    // <StyledHeader variants={revealDown} initial="hidden" animate="show">
    <StyledHeader>
      <StyledBrand>
        <Brand />
      </StyledBrand>
      <StyledNav>
        <Nav active={active} setActive={setActive} />
      </StyledNav>
      <motion.div onClick={navToggle} id="burger">
        <motion.span
          variants={toggleTiltRight}
          animate={navActive ? "show" : "hidden"}
          initial="hidden"
        ></motion.span>
        <motion.span
          variants={ToggleOpacityRight}
          animate={navActive ? "hidden" : "show"}
          initial="show"
        ></motion.span>
        <motion.span
          variants={toggleTiltLeft}
          animate={navActive ? "show" : "hidden"}
          initial="hidden"
        ></motion.span>
      </motion.div>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.div)`
  position: fixed;
  top: 0;
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5vw;
  width: 100vw;
  z-index: 10;

  #burger {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    span {
      padding: 0.2rem 3rem;
      background: #638963;
      margin: 0.2rem;
      border-radius: 1rem;
    }
  }

  @media screen and (min-width: 1300px) {
    #burger {
      display: none;
    }
  }
`;

const StyledBrand = styled(motion.div)``;
const StyledNav = styled(motion.div)`
  @media screen and (max-width: 1299px) {
    display: none;
  }
`;
export default Header;
