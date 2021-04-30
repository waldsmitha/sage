import React, { useEffect, useState, useRef } from "react";

//components
import LandingPage from "../components/LandingPage";
import Services from "../components/Services";
// import Articles from "../components/Articles";
import About from "../components/About";
import Contact from "../components/Contact";
import Header from "../components/Header";
import NavMobile from "../components/NavMobile";
import Footer from "../components/Footer";
//imgs
import table from "../img/table.jpg";
import field from "../img/flower-field.m4v";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { revealNavMobile } from "../animations";
//utilities

//animations
import { pageAnimation } from "../animations";

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

  //For when Articles is added back
  // const scrollToComponent = () => {
  //   switch (active.indexOf(true)) {
  //     case 0:
  //       scrollTo(homeRef);
  //       break;
  //     case 1:
  //       scrollTo(serviceRef);
  //       break;
  //     case 2:
  //       scrollTo(articlesRef);
  //       break;
  //     case 3:
  //       scrollTo(aboutRef);
  //       break;
  //     case 4:
  //       scrollTo(contactRef);
  //       break;
  //     default:
  //       scrollTo(homeRef);
  //   }
  // };
  const scrollToComponent = () => {
    switch (active.indexOf(true)) {
      case 0:
        scrollTo(homeRef);
        break;
      case 1:
        scrollTo(serviceRef);
        break;
      case 2:
        scrollTo(aboutRef);
        break;
      case 3:
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
    <StyledContainer exit="exit" variants={pageAnimation}>
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
        <LandingPage ref={homeRef} active={active} setActive={setActive} />
        <Services ref={serviceRef} />
        <StyledImg src={table} alt="" />
        {/* <Articles ref={articlesRef} /> */}
        <About ref={aboutRef} />
        <video src={field} autoPlay muted loop playsInline></video>
        <Contact ref={contactRef} />
        <Footer />
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
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(255, 255, 255, 1) 0%,
    rgba(222, 234, 222, 1) 100%,
    rgba(187, 212, 187, 0.47773105824360995) 100%
  );
  min-height: 100vh;
  overflow: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  video {
    height: 50vh;
    width: 100vw;
    object-fit: cover;
    object-position: bottom;
    display: block;
  }
`;

export default Home;
