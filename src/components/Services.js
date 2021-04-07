import React, { forwardRef } from "react";

//components
import ServiceBox from "./ServiceBox";

//imgs
import tea2 from "../img/tea2.jpg";
import evaluations from "../img/evaluations.jpg";
import ill from "../img/ill.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { useScroll } from "./useScroll";
import { opacity, revealServices, revealService } from "../animations";

const Services = forwardRef(({}, ref) => {
  const [element, controls] = useScroll();
  const services = [
    { img: tea2, text: "Therapeutic Modalities & Services" },
    { img: evaluations, text: "Evaluations" },
    { img: ill, text: "Common Conditions Treated" },
  ];

  return (
    <StyledContainer
      variants={opacity}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <h1 ref={ref}>How we help you</h1>
      <StyledServices
        variants={revealServices}
        animate={controls}
        ref={element}
        initial="hidden"
      >
        {services.map((item) => (
          <motion.div variants={revealService}>
            <ServiceBox key={item.text} img={item.img} text={item.text} />
          </motion.div>
        ))}
      </StyledServices>
    </StyledContainer>
  );
});

const StyledContainer = styled(motion.div)`
  min-height: 100vh;
  /* background: blue; */
  background: white;

  h1 {
    padding: 10rem 0 0 5rem;
  }

  img {
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 900px) {
    h1 {
      text-align: center;
      padding: 10rem 0 5rem 0;
    }
  }
`;

const StyledServices = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  width: 100%;
`;

const StyledTest = styled(motion.div)``;

export default Services;
