import React from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Brand = () => {
  return (
    <StyledBrand>
      <svg height="100" width="100">
        <circle cx="50" cy="50" r="40" fill="#638963" />
      </svg>
      <StyledName>
        <h1>Sage Garden</h1>
        <h2>Natural Medicine</h2>
      </StyledName>
    </StyledBrand>
  );
};

const StyledBrand = styled(motion.div)`
  display: flex;
  color: #638963;
`;
const StyledName = styled(motion.div)``;

export default Brand;