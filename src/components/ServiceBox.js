import React from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const ServiceBox = ({ img, text }) => {
  return (
    <StyledBox>
      <div className="img">
        <img src={img} alt="" />
        <div className="shade"></div>
      </div>
      <div className="text">
        <h1>{text}</h1>
      </div>
    </StyledBox>
  );
};

const StyledBox = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: flex-end;
  margin: 2rem 3rem;
  height: 40vh;
  cursor: pointer;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.2);

  .text {
    text-align: center;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
    background: rgba(255, 255, 255, 0.7);

    h1 {
      color: black;
    }
  }

  .img {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: -1;
    img {
      height: 100%;
      width: 100%;
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
  }
`;

export default ServiceBox;
