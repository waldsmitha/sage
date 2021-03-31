import React, { useState } from "react";
import Brand from "./Brand";
import Nav from "./Nav";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { revealDown } from "../animations";

const Header = () => {
  const [navActive, setNavActive] = useState("false");

  const navToggle = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };

  return (
    <StyledHeader variants={revealDown} initial="hidden" animate="show">
      <StyledBrand>
        <Brand />
      </StyledBrand>
      <StyledNav>
        <Nav />
      </StyledNav>
      <h1>Nav</h1>
    </StyledHeader>
  );
};

const StyledHeader = styled(motion.div)`
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
  align-items: center;
  /* background: #dedede; */
  background: #ffffff;
  padding: 2rem;
  width: 100vw;
`;

const StyledBrand = styled(motion.div)``;
const StyledNav = styled(motion.div)``;
export default Header;
