import React from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const ServiceBox = ({ img, text }) => {
  return (
    <StyledBox>
      <img src={img} alt="" />
      <h1>{text}</h1>
      <div className="shade"></div>
    </StyledBox>
  );
};

const StyledBox = styled(motion.div)`
  position: relative;
  flex: 1 1 0;
  margin: 5rem 5rem;
  height: 60vh;
  width: 25vw;
  min-width: 400px;
  max-width: 500px;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.2);

  h1 {
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;
    color: white;
    padding: 3rem;
  }

  img {
    height: 100%;
    object-fit: cover;
  }

  .shade {
    height: 100%;
    width: 100%;
    z-index: 0;
    background: black;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 40%;
  }
`;

export default ServiceBox;
