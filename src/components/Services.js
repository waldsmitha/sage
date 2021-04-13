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
    { img: ill, text: "Lyme Disease" },
    { img: ill, text: "PANS/PANDAS" },
  ];

  return (
    <StyledContainer
    // variants={opacity}
    // animate={controls}
    // ref={element}
    // initial="hidden"
    >
      <h1 className="title" ref={ref}>
        How we help you
      </h1>
      <StyledServices
      // variants={revealServices}
      // animate={controls}
      // ref={element}
      // initial="hidden"
      >
        {services.map((item) => (
          <motion.div /*variants={revealService}*/>
            <ServiceBox key={item.text} img={item.img} text={item.text} />
          </motion.div>
        ))}
      </StyledServices>
    </StyledContainer>
  );
});

const StyledContainer = styled(motion.div)`
  min-height: 80vh;
  padding: 2.5vw 0;
  .title {
    padding: 5rem 0 5rem 5rem;
  }
`;

const StyledServices = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  align-content: center;
  width: 100%;
  max-width: 2200px;
  margin: 0 auto;
`;

export default Services;
