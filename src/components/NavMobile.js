import React, { useState } from "react";
import Brand from "./Brand";
import Nav from "./Nav";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { revealDown } from "../animations";

const NavMobile = () => {
  const [navActive, setNavActive] = useState("false");

  const navToggle = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };

  return (
    // <StyledHeader variants={revealDown} initial="hidden" animate="show">
    <StyledNavMobile>
      <StyledNavText>
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>Articles</li>
          <li>Dr.Green</li>
          <li>Contact</li>
        </ul>
      </StyledNavText>
    </StyledNavMobile>
  );
};

const StyledNavMobile = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 0;
  background: #1f1f1f;
  color: white;
`;
const StyledNavText = styled(motion.div)`
  background: #1f1f1f;
  color: black;

  ul {
    padding-top: 10vh;
    padding-left: 100px;
    list-style: none;
  }

  li {
    color: white;
    font-size: 5rem;
    padding: 2rem;
    cursor: pointer;
    width: fit-content;
  }
`;

export default NavMobile;
