import React, { useState } from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations

const NavMobile = ({ active, setActive, navActive, setNavActive }) => {
  const items = ["home", "services", "articles", "Dr. Green", "Contact"];

  const navToggle = () => {
    setNavActive(!navActive);
    console.log(navActive);
  };

  let listItems = items.map((item, i) =>
    active[i] ? (
      <li
        key={item}
        className="active"
        style={{ color: " #638963" }}
        onClick={() => {
          let activeItems = [...active];
          let trueItem = activeItems.indexOf(true);
          activeItems[trueItem] = false;
          activeItems[i] = !activeItems[i];
          setActive(activeItems);
          console.log(activeItems[i]);
        }}
      >
        {item}
      </li>
    ) : (
      <li
        key={item}
        onClick={() => {
          let activeItems = [...active];
          let trueItem = activeItems.indexOf(true);
          activeItems[trueItem] = false;
          activeItems[i] = !activeItems[i];
          setActive(activeItems);
          console.log(activeItems[i]);
          navToggle();
        }}
      >
        {item}
      </li>
    )
  );
  return (
    <StyledNavText>
      <ul>{listItems}</ul>
    </StyledNavText>
  );
};

const StyledNavText = styled(motion.div)`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 0;
  background: #1f1f1f;
  display: flex;
  justify-content: flex-start;

  ul {
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    list-style: none;
    padding-left: 4rem;
  }

  li {
    color: white;
    font-size: 4rem;
    padding: 2rem;
    cursor: pointer;
    width: fit-content;
    text-transform: uppercase;
  }
`;

export default NavMobile;
