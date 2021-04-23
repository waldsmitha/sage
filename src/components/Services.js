import React, { useState, forwardRef } from "react";
import { useHistory, useLocation, Link } from "react-router-dom";
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
  const history = useHistory();
  const location = useLocation();
  console.log(history.location, location);

  const [element, controls] = useScroll();
  const services = [
    { img: tea2, text: "Therapeutic Modalities & Services" },
    { img: ill, text: "Lyme Disease" },
    { img: ill, text: "PANS/PANDAS" },
  ];

  const [active, setActive] = useState([true, false, false, false]);

  const setSlide = (num) => {
    let activeCopy = [...active];
    let trueItem = activeCopy.indexOf(true);
    if (num === trueItem) {
      activeCopy[trueItem] = false;
      setActive(activeCopy);
    }
    if (num !== trueItem) {
      activeCopy[trueItem] = false;
      activeCopy[num] = true;
      setActive(activeCopy);
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
              <li>PANS/PANDAS</li>
              <span></span>
            </div>
          </ul>
        </div>
      </div>
      <div className={active[1] ? "sl reveal" : "sl"}>
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
          <Link to="/Modalities">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
      <div className={active[2] ? "sl reveal" : "sl"}>
        <div className="header">
          <h1>More Information</h1>
          <div className="cross" onClick={closeSlide}>
            <span className="cross-one"></span>
            <span className="cross-two"></span>
          </div>
        </div>
        <div className="content">
          <p>
            Lyme Disease is endemic in our area. As someone who has experienced
            Lyme Disease first hand, As a Lyme Literate Doctor with extensive
            training in tick-borne illness, I am committed to helping those who
            have been affected, reclaim their health. Please read and share the
            following information to help prevent the occurrence of tick-borne
            illness.
          </p>
          <Link to="Lyme">
            <button>Learn More</button>
          </Link>
          <div className="content-lists"></div>
        </div>
      </div>
      <div className={active[3] ? "sl reveal" : "sl"}>
        <div className="header">
          <h1>PANS/PANDAS</h1>
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

          <Link to="Pans">
            <button>Learn More</button>
          </Link>
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
  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    max-width: 80rem;
    padding: 0 2rem;
    h1 {
      padding-bottom: 5rem;
      color: #a7bca7;
      font-size: calc(4rem + 1vw);
    }
    ul {
      list-style: none;
    }
    li {
      cursor: pointer;
      padding: 2rem 5rem 2rem 0;
      width: 100%;
      font-size: calc(2rem + 1vw);
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
    bottom: 0;
    width: 100vw;
    border-radius: 1rem;
    border-right: 5px solid #cfc1e0;
    max-width: 80rem;
    transition: 0.75s;
    transition-timing-function: ease-in-out;
    background: #dfeedf;
    z-index: 20;
    opacity: 0;
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
      background: #cfc1e0;
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
    button {
      border: none;
      color: #638963;
      background: #f2f2f2;
      padding: 1rem 2rem;
      border-radius: 1rem;
      cursor: pointer;
    }
  }

  .reveal {
    transform: translateX(100vw);
    opacity: 1;
  }
`;

export default Services;
