import React from "react";

//components
import LandingPage from "../components/LandingPage";
import Services from "../components/Services";
import Articles from "../components/Articles";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
//imgs
import table from "../img/table.jpg";
import tea from "../img/tea.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Services />
      <StyledImg src={table} alt="" />
      <Articles />
      {/* <StyledImg src={tea} alt="" /> */}
      <About />
      <Contact />
    </div>
  );
};

const StyledImg = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  height: 25vh;
  display: block;
`;

export default Home;
