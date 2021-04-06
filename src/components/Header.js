import React, { useState } from "react";
import Brand from "./Brand";
import Nav from "./Nav";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { revealDown } from "../animations";

const Header = ({ navActive, setNavActive }) => {
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
        <Nav />
      </StyledNav>
      <h1 onClick={navToggle}>mobile nav</h1>
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
  padding: 2rem;
  width: 100vw;
  z-index: 10;
`;

const StyledBrand = styled(motion.div)``;
const StyledNav = styled(motion.div)``;
export default Header;
