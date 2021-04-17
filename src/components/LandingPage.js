import React, {
  forwardRef,
  useEffect,
  useState,
  useLayoutEffect,
  useRef,
} from "react";

//components
import sage from "../img/sage.jpg";
//styling
import styled from "styled-components";
import { motion, useViewportScroll, useTransform } from "framer-motion";
//animations
import { scaleDown, opacity, revealDown } from "../animations";

const LandingPage = forwardRef(({}, ref) => {
  const { scrollY } = useViewportScroll();
  const imgRef = useRef();
  const [offsetTop, setOffsetTop] = useState(0);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!imgRef.current) return null;
    setOffsetTop(imgRef.current.offsetTop);
    setHeight(imgRef.current.clientHeight);
    console.log(setOffsetTop);
  }, [imgRef]);

  const scale = useTransform(
    scrollY,
    [offsetTop, offsetTop + height],
    [1, 1.3]
  );

  return (
    <StyledLanding ref={ref}>
      <motion.div
        className="container"
        variants={scaleDown}
        initial="hidden"
        animate="show"
      >
        <motion.img ref={imgRef} style={{ scale: scale }} src={sage} alt="" />
        <motion.div className="cta" variants={opacity}>
          <h1>Chronic illness doesn't have to be a burden</h1>
          <span></span>
          <motion.h2 variants={revealDown}>We can help.</motion.h2>
          <motion.button variants={revealDown}>Find out how.</motion.button>
        </motion.div>
      </motion.div>
    </StyledLanding>
  );
});

const StyledLanding = styled(motion.div)`
  min-height: 100vh;
  /* padding-bottom: 2.5vw; */
  background: white;
  position: relative;
  /* padding-top: 10rem; */

  .container {
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 1rem;
    z-index: 0;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      object-position: center;
      border-radius: 1rem;
    }
  }

  .cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    button {
      background: rgba(0, 0, 0, 0.4);
      border: none;
      border: 2px solid white;
      border-radius: 1rem;
      font-weight: bold;
      font-style: italic;
      margin-top: 2rem;
      padding: 1rem;
      color: white;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
        transform: scale(1.05);
        color: #638963;
      }

      &::after {
        content: "";
        height: 5px;
        width: 0%;
        position: absolute;
        bottom: -30%;
        left: 0;
        background: white;
        transition: 0.75s;
      }
      &:hover::after {
        width: 100%;
      }
    }

    h2 {
      font-weight: bold;
      font-style: italic;
      padding-top: 2rem;
    }

    h1 {
      transition: 0.5s;
      position: relative;
      width: 100vw;
      max-width: 600px;
      padding-bottom: 2rem;
      font-size: calc(4rem + 0.5vw);
      font-weight: bold;
      font-style: italic;
    }
  }
`;

export default LandingPage;
