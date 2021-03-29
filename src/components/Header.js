import React from "react";
import Brand from "./Brand";
import Nav from "./Nav";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <StyledHeader>
      <Brand />
      <Nav />
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
`;

export default Header;
