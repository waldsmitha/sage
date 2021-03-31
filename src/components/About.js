import React from "react";

//imgs
import destiny from "../img/destiny.png";
import foliage from "../img/foliage.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { useScroll } from "./useScroll";
import { revealAboutContent, revealAboutHeader } from "../animations";

const About = () => {
  const [element, controls] = useScroll();
  return (
    <StyledAbout>
      <StyledImages>
        <img src={destiny} alt="" />
      </StyledImages>
      <StyledBio>
        <motion.div className="header">
          <motion.span
            variants={revealAboutHeader}
            animate={controls}
            ref={element}
            initial="hidden"
          ></motion.span>
          <h1>Dr. Destiny Green</h1>
        </motion.div>
        <img src={destiny} alt="" />
        <motion.div className="content">
          <motion.span
            variants={revealAboutContent}
            animate={controls}
            ref={element}
            initial="hidden"
          ></motion.span>
          <p>
            Dr. Green was born in California but relocated to the East Coast at
            a young age. She was raised by a scientifically minded father who
            was an engineer, and a spiritually-minded mother who was an artist.
            Both had a large influence on her early holistic thinking. Her
            passion for the visual arts drove her to a Bachelor of Fine Arts
            while her love of the sciences led her to a minor in biology. Upon
            receiving her undergraduate degree, she spent several years pursuing
            a successful career as a fine artist.
          </p>
          <p>
            During that time, she struggled with health issues that left her
            with few answers from traditional western medicine. It was through a
            naturopathic doctor that she finally found the road to recovery.{" "}
          </p>
          <p>
            Upon graduation from medical school she spent 2 years working with
            Dr. Julia Greenspan treating Lyme, tick-borne illness and chronic
            disease. Having been afflicted with tick-borne illness herself, she
            is committed to helping others with these challenging illnesses.
          </p>
        </motion.div>
      </StyledBio>
    </StyledAbout>
  );
};

const StyledAbout = styled(motion.div)`
  display: flex;
  min-height: 80vh;
`;
const StyledImages = styled(motion.div)`
  position: relative;
  flex: 1;
  width: 100%;
  background-image: url(${foliage});
  background-size: cover;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 80%;
    max-width: 80%;
    object-fit: cover;
  }

  @media screen and (max-width: 1300px) {
    background-image: url(${destiny});
    background-position: center;

    img {
      visibility: hidden;
    }
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const StyledBio = styled(motion.div)`
  flex: 1;
  padding: 5rem;

  .header,
  .content {
    position: relative;
    overflow: hidden;
    span {
      height: 100%;
      width: 100%;
      background: #ffffff;
      position: absolute;
    }
  }

  h1 {
    padding-bottom: 5rem;
  }

  p {
    line-height: 1.8;
    padding-bottom: 2rem;
  }
  img {
    display: none;
  }

  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5rem 10rem;

    p {
      padding: 2rem 0;
    }

    img {
      display: block;
      margin-bottom: 3rem;
      width: 100%;
      max-height: 50vh;
      object-fit: cover;
      object-position: top;
    }
  }
`;

export default About;
