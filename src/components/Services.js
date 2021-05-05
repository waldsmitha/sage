import React, { forwardRef, useState, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
//imgs
//styling
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
//animations
import { useScroll } from "./useScroll";
import { revealDown, revealRight } from "../animations";

const Services = forwardRef(({}, ref) => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();

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

  //
  const { scrollY } = useViewportScroll();
  const imgRef = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!imgRef.current) return null;
    setOffsetTop(ref.current.offsetTop);
    setHeight(ref.current.clientHeight);
    setWidth(ref.current.clientWidth);
  }, [imgRef, ref]);

  const boxOne = useTransform(
    scrollY,
    [offsetTop - 0.9 * height, offsetTop + height + 0.9 * height],
    [1, width * 0.5]
  );
  const boxTwo = useTransform(
    scrollY,
    [offsetTop - 0.5 * height, offsetTop + height + 0.5 * height],
    [1, width * 0.5]
  );
  const boxTwoNeg = useTransform(
    scrollY,
    [offsetTop - 0.5 * height, offsetTop + height + 0.5 * height],
    [1, -width * 0.5]
  );

  return (
    <StyledContainer ref={ref}>
      <motion.div className="box-container">
        <motion.div
          ref={imgRef}
          style={{ x: boxOne, y: boxOne }}
          className="box b1"
        ></motion.div>
        <motion.div
          ref={imgRef}
          style={{ x: boxTwoNeg, y: boxTwo }}
          className="box b2"
        ></motion.div>
        <motion.div
          ref={imgRef}
          style={{ x: boxTwo, y: boxTwo }}
          className="box b3"
        ></motion.div>
      </motion.div>

      <div className="list">
        <div className="main-header">
          <motion.h1
            ref={element}
            initial="hidden"
            animate={controls}
            variants={revealDown}
          >
            How we help you
          </motion.h1>
        </div>
        <motion.ul
          ref={element2}
          initial="hidden"
          animate={controls2}
          variants={revealRight}
        >
          <motion.div
            whileHover={{
              x: -50,
              transition: { duration: 0.3, delay: 0.1 },
            }}
            whileTap={{
              scale: 1.1,
            }}
            className="item active-cursor"
            onClick={() => setSlide(1)}
          >
            <li>Therapeutic Modalities</li>
            <span></span>
          </motion.div>
          <motion.div
            whileHover={{
              x: -50,
              transition: { duration: 0.3, delay: 0.1 },
            }}
            whileTap={{
              scale: 1.1,
            }}
            className="item active-cursor"
            onClick={() => setSlide(2)}
          >
            <li>Lyme Disease</li>
            <span></span>
          </motion.div>
          <motion.div
            whileHover={{
              x: -50,
              transition: { duration: 0.3, delay: 0.1 },
            }}
            whileTap={{
              scale: 1.1,
            }}
            className="item active-cursor"
            onClick={() => setSlide(3)}
          >
            <li>PANS/PANDAS</li>
            <span></span>
          </motion.div>
        </motion.ul>
      </div>

      <div className={active[1] ? "sl reveal" : "sl"}>
        <div className="header">
          <h1>Therapeutic Modalities</h1>
          <motion.div
            whileTap={{
              scale: 1.2,
            }}
            className="cross active-cursor"
            onClick={closeSlide}
          >
            <span className="cross-one"></span>
            <span className="cross-two"></span>
          </motion.div>
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
            <button className="active-cursor">Learn More</button>
          </Link>
        </div>
      </div>
      <div className={active[2] ? "sl reveal" : "sl"}>
        <div className="header">
          <h1>Lyme Disease</h1>
          <motion.div
            whileTap={{
              scale: 1.2,
            }}
            className="cross active-cursor"
            onClick={closeSlide}
          >
            <span className="cross-one"></span>
            <span className="cross-two"></span>
          </motion.div>
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
            <button className="active-cursor">Learn More</button>
          </Link>
          <div className="content-lists"></div>
        </div>
      </div>
      <div className={active[3] ? "sl reveal" : "sl"}>
        <div className="header">
          <h1>
            PANS <br /> PANDAS
          </h1>
          <motion.div
            whileTap={{
              scale: 1.2,
            }}
            className="cross active-cursor"
            onClick={closeSlide}
          >
            <span className="cross-one"></span>
            <span className="cross-two"></span>
          </motion.div>
        </div>
        <div className="content">
          <p>
            PANS stands for Pediatric Acute-onset Neuropsychiatric Syndrome.
            This is a very abrupt onset of neuropsychiatric symptoms following
            an infection. The onset of PANS follows bacterial infections
            including Lyme and Mycoplasma pneumonia and can be triggered by some
            viral infections as well.
          </p>
          <p>
            PANDAS is short for Pediatric Autoimmune Neuropsychiatric Disorders
            Associated with Streptococcal Infections. PANDAS symptoms typically
            appear following bacterial infections with some types of Strep
            bacteria.
          </p>
          <Link to="Pans">
            <button className="active-cursor">Learn More</button>
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
  align-items: center;
  justify-content: center;
  overflow: hidden;

  .list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 80vh;
    max-width: 80rem;
    padding: 0 2rem;
    z-index: 10;

    h1 {
      color: #a7bca7;
      font-size: calc(6rem + 0.5vw);
    }
    ul {
      list-style: none;
    }
    li {
      pointer-events: none;
      padding: 2rem 5rem 2rem 0;
      width: 100%;
      font-size: calc(2rem + 1vw);
    }
    .main-header {
      overflow: none;
      margin-bottom: 5rem;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(167, 188, 167, 0.3);
      color: #696969;
      border-radius: 1rem;
      margin: 2rem 0;
      padding: 0.5rem 1rem;
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
    top: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    border-right: 5px solid #cfc1e0;
    transition: 0.75s;
    transition-timing-function: ease-in-out;
    background: #dfeedf;
    z-index: 20;
    clip-path: circle(0% at 0% 0%);
    transform-origin: top;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .header,
  .content {
    max-width: 100rem;
  }
  .header {
    display: flex;
    padding: 3rem 2rem;
    justify-content: space-between;
    width: 100%;

    h1 {
      font-size: 4rem;
    }
  }
  .cross {
    position: relative;
    width: 6rem;
    height: 5rem;

    span {
      position: absolute;
      top: 50%;
      right: 0%;
      padding: 0.5rem 3rem;
      background: #cfc1e0;
      border-radius: 1rem;
      pointer-events: none;
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
    line-height: 2;
    p {
      padding: 0 1rem 3rem 1rem;
    }
    p::first-letter {
      font-size: 28px;
    }
    button {
      border: none;
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      color: #638963;
      background: #f2f2f2;
      padding: 1rem 2rem;
      border-radius: 1rem;
      cursor: pointer;
    }
  }

  .reveal {
    clip-path: circle(100% at 50% 50%);
  }

  .box {
    position: absolute;
    height: 25vw;
    width: 25vw;
    max-height: 20rem;
    max-width: 20rem;
    border-radius: 50%;
    left: 0;
    opacity: 0.2;
    filter: blur(5px);
  }
  .b1 {
    background: #bbd4bb;
    top: 0%;
    left: 0%;
  }
  .b2 {
    background: #dabcff;
    top: 30%;
    left: 60%;
    height: 40vw;
    width: 40vw;
    max-height: 30rem;
    max-width: 30rem;
  }
  .b3 {
    background: #a7bca7;
    top: 60%;
    left: 40%;
    height: 20vw;
    width: 20vw;
    max-height: 20rem;
    max-width: 20rem;
  }
`;

export default Services;
