import React, { useState, forwardRef } from "react";
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
    { img: ill, text: "Lyme Disease" },
    { img: ill, text: "PANS/PANDAS" },
  ];

  const [active, setActive] = useState([true, false, false, false]);
  // console.log(Object.values(active).indexOf(true));

  // let activeItems = [...active];
  // let trueItem = activeItems.indexOf(true);
  // activeItems[trueItem] = false;
  // activeItems[i] = !activeItems[i];
  // setActive(activeItems);
  // console.log(activeItems[i]);

  const setSlide = (num) => {
    let activeCopy = [...active];
    let trueItem = activeCopy.indexOf(true);
    if (num === trueItem) {
      return;
    }
    if (num !== trueItem) {
      activeCopy[trueItem] = false;
      activeCopy[num] = true;
      setActive(activeCopy);
      console.log(activeCopy);
    }
  };

  const closeSlide = () => {
    let activeCopy = [...active];
    let trueItem = activeCopy.indexOf(true);
    activeCopy[trueItem] = false;
    setActive(activeCopy);
  };

  return (
    <StyledContainer ref={ref}>
      <div>
        <div className="list">
          <h1>How we help you</h1>
          <ul>
            <div className="item" onClick={() => setSlide(1)}>
              <li>Therapeutic Modalities</li>
              <span></span>
            </div>
            <div className="item" onClick={() => setSlide(2)}>
              <li>Lyme Disease</li>
              <span></span>
            </div>
            <div className="item" onClick={() => setSlide(3)}>
              <li>Pans/Pandas</li>
              <span></span>
            </div>
          </ul>
        </div>
      </div>
      <div className={active[1] ? "sl reveal" : "sl sl-1"}>
        <div className="header">
          <h1>Therapeutic Modalities</h1>
          <div className="cross" onClick={closeSlide}>
            <span className="cross-one"></span>
            <span className="cross-two"></span>
          </div>
        </div>
        <div className="content">
          <p>
            Naturopathy is a balance of the ancient healing arts and modern
            medicine. It is guided by the principle of vis medicatrix naturae –
            the healing power of nature. In essence, the body has the inherent
            ability to heal itself, but may sometimes need support due to
            stresses and environmental exposures. It is our job to assist and
            support this healing process.
          </p>
          <p>
            Naturopathic Doctors are primary care physicians who have completed
            an undergraduate degree along with a 4 year Graduate Naturopathic
            Medical program. An accredited program includes a strong foundation
            in the sciences of anatomy, physiology, biochemistry and
            pharmacology training. In addition to the basic medical sciences,
            Naturopathic doctors are also trained in nutrition, diet/lifestyle
            counseling, botanical medicine, homeopathy and other natural
            modalities. It is our goal to support the natural healing process.
            Treatment modalities are chosen based on the need of the individual
            and the extent of the illness.
          </p>
        </div>
      </div>
      <div className={active[2] ? "sl reveal" : "sl sl-2"}>
        <div className="header">
          <h1>Second</h1>
          <div className="cross" onClick={closeSlide}>
            <span className="cross-one"></span>
            <span className="cross-two"></span>
          </div>
        </div>
        <div className="content">
          <p>
            Naturopathy is a balance of the ancient healing arts and modern
            medicine. It is guided by the principle of vis medicatrix naturae –
            the healing power of nature. In essence, the body has the inherent
            ability to heal itself, but may sometimes need support due to
            stresses and environmental exposures. It is our job to assist and
            support this healing process.
          </p>
          <p>
            Naturopathic Doctors are primary care physicians who have completed
            an undergraduate degree along with a 4 year Graduate Naturopathic
            Medical program. An accredited program includes a strong foundation
            in the sciences of anatomy, physiology, biochemistry and
            pharmacology training. In addition to the basic medical sciences,
            Naturopathic doctors are also trained in nutrition, diet/lifestyle
            counseling, botanical medicine, homeopathy and other natural
            modalities. It is our goal to support the natural healing process.
            Treatment modalities are chosen based on the need of the individual
            and the extent of the illness.
          </p>
        </div>
      </div>
      <div className={active[3] ? "sl reveal" : "sl sl-3"}>
        <div className="header">
          <h1>Third</h1>
          <div className="cross" onClick={closeSlide}>
            <span className="cross-one"></span>
            <span className="cross-two"></span>
          </div>
        </div>
        <div className="content">
          <p>
            Naturopathy is a balance of the ancient healing arts and modern
            medicine. It is guided by the principle of vis medicatrix naturae –
            the healing power of nature. In essence, the body has the inherent
            ability to heal itself, but may sometimes need support due to
            stresses and environmental exposures. It is our job to assist and
            support this healing process.
          </p>
          <p>
            Naturopathic Doctors are primary care physicians who have completed
            an undergraduate degree along with a 4 year Graduate Naturopathic
            Medical program. An accredited program includes a strong foundation
            in the sciences of anatomy, physiology, biochemistry and
            pharmacology training. In addition to the basic medical sciences,
            Naturopathic doctors are also trained in nutrition, diet/lifestyle
            counseling, botanical medicine, homeopathy and other natural
            modalities. It is our goal to support the natural healing process.
            Treatment modalities are chosen based on the need of the individual
            and the extent of the illness.
          </p>
        </div>
      </div>
    </StyledContainer>
  );
});

const StyledContainer = styled(motion.div)`
  position: relative;
  min-height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* overflow: hidden; */
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    max-width: 80rem;
    h1 {
      padding-bottom: 5rem;
      color: #a7bca7;
    }
    ul {
      list-style: none;
    }
    li {
      cursor: pointer;
      padding: 2rem 5rem 2rem 0;
      width: 100%;
      font-size: calc(2rem + 0.5vw);
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* background: pink; */
      cursor: pointer;
    }
    span {
      padding: 1rem 1rem;
      background: #cfc1e0;
      border-radius: 50%;
    }
  }
  .sl {
    position: absolute;
    top: 20%;
    left: -100%;
    width: 100vw;
    max-width: 80rem;
    /* height: 75vh; */
    transition: 0.5s;
    background: #dfeedf;
    z-index: 20;
  }
  .header {
    display: flex;
    padding: 3rem 2rem;
  }
  .cross {
    position: relative;
    width: 100%;
    height: 5rem;
    span {
      position: absolute;
      top: 50%;
      right: 0%;
      padding: 0.2rem 3rem;
      background: #575757;
      border-radius: 1rem;
    }
    .cross-one {
      transform: rotate(45deg);
    }
    .cross-two {
      transform: rotate(-45deg);
    }
  }
  .content {
    padding: 0 1rem;
    p {
      padding: 0 1rem 3rem 1rem;
    }
    p::first-letter {
      font-size: 28px;
    }
  }

  .reveal {
    transform: translateX(100vw);
  }
`;

// const StyledServices = styled(motion.div)`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
//   align-content: center;
//   width: 100%;
//   max-width: 2200px;
//   margin: 0 auto;
// `;

export default Services;
