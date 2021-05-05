import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Cursor = () => {
  const ref = useRef();
  const [active, setActive] = useState(false);
  const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const setFromEvent = (e) => {
        let target = e.target.className;
        target.includes("active-cursor") ? setActive(true) : setActive(false);
        console.log(target.includes("active-cursor"));
        setPosition({ x: e.pageX, y: e.pageY });
      };
      window.addEventListener("mousemove", setFromEvent);

      return () => {
        window.removeEventListener("mousemove", setFromEvent);
      };
    }, []);

    return position;
  };

  const position = useMousePosition();
  //   console.log(position);

  return (
    <StyledContainer animate={{ top: position.y, left: position.x }} ref={ref}>
      <div className={active ? "active cursor" : "cursor"}></div>
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: 100;
  pointer-events: none;

  .cursor {
    height: 5rem;
    width: 5rem;
    background: rgba(99, 137, 99, 0.4);
    border-radius: 50%;
    transition: 0.1s;
  }
  .active {
    height: 8rem;
    width: 8rem;
  }
`;

export default Cursor;
