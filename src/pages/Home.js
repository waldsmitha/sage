import React, { useEffect, useState, useRef } from "react";

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
import field from "../img/flower-field.m4v";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { revealNavMobile } from "../animations";
//utilities

const Home = () => {
  const [navActive, setNavActive] = useState(false);
  const [active, setActive] = useState([true, false, false, false, false]);
  const refs = [
    "homeRef",
    "serviceRef",
    "articlesRef",
    "aboutRef",
    "contactRef",
  ];

  const homeRef = useRef();
  const articlesRef = useRef();
  const serviceRef = useRef();
  const contactRef = useRef();
  const aboutRef = useRef();
  const [ref, setRef] = useState("homeRef");

  const scrollTo = (elem) => {
    elem.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToComponent = () => {
    switch (active.indexOf(true)) {
      case 0:
        scrollTo(homeRef);
        break;
      case 1:
        scrollTo(serviceRef);
        break;
      case 2:
        scrollTo(articlesRef);
        break;
      case 3:
        scrollTo(aboutRef);
        break;
      case 4:
        scrollTo(contactRef);
        break;
      default:
        scrollTo(homeRef);
    }
  };
  useEffect(() => {
    const index = active.indexOf(true);
    setRef(refs[index]);
    scrollToComponent();
  }, [active]);

  return (
    <StyledContainer>
      <NavMobile
        active={active}
        setActive={setActive}
        navActive={navActive}
        setNavActive={setNavActive}
      />
      <Header
        navActive={navActive}
        setNavActive={setNavActive}
        active={active}
        setActive={setActive}
      />
      <StyledHome
        variants={revealNavMobile}
        initial="hidden"
        animate={navActive ? "show" : "hidden"}
      >
        <LandingPage ref={homeRef} />
        <Services ref={serviceRef} />
        <StyledImg src={table} alt="" />
        <Articles ref={articlesRef} />
        <About ref={aboutRef} />
        <video src={field} autoPlay muted loop playsinline></video>
        <Contact ref={contactRef} />
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

const StyledHome = styled(motion.div)`
  background: white;
  min-height: 100vh;
  overflow: hidden;
  scrollbar-width: none;

  video {
    height: 50vh;
    width: 100vw;
    object-fit: cover;
    object-position: bottom;
    display: block;
  }
`;

export default Home;
