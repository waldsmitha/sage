import React, { useState } from "react";

//components
import LandingPage from "../components/LandingPage";
import Services from "../components/Services";
import Articles from "../components/Articles";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";
//imgs
import table from "../img/table.jpg";
import tea from "../img/tea.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { revealNavMobile } from "../animations";

const Home = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <StyledContainer>
      <NavMobile />
      <Header navActive={navActive} setNavActive={setNavActive} />
      <StyledHome
        variants={revealNavMobile}
        initial="hidden"
        animate={navActive ? "show" : "hidden"}
      >
        <LandingPage />
        <Services />
        <StyledImg src={table} alt="" />
        <Articles />
        <About />
        <Contact />
      </StyledHome>
    </StyledContainer>
  );
};

const StyledImg = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  height: 25vh;
  display: block;
`;

const StyledContainer = styled(motion.div)`
  overflow: hidden;
`;

const StyledHome = styled(motion.div)``;

export default Home;
