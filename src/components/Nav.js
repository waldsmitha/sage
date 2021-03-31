import React, { useState } from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { activeNav } from "../animations";

const Nav = () => {
  // const toggleClass = (e) => {
  //   e.target.classList == "active"
  //     ? e.target.classList.remove("active")
  //     : e.target.classList.add("active");
  //   console.log(e.target);
  //   // console.log(e.target);
  // };

  const [active, setActive] = useState([true, false, false, false, false]);

  const items = ["home", "services", "articles", "Dr. Green", "Contact"];

  // const toggleActive = (i) => {
  //   let activeItems = [...active];
  //   let trueItem = activeItems.indexOf(true);

  //   console.log(activeItems[0]);
  //   // if (activeItems[i]) {
  //   //   console.log(activeItems[i]);
  //   //   console.log("toggle true");
  //   //   return;
  //   // }
  //   // if (!activeItems[i]) {
  //   //   activeItems[i] = true;
  //   //   activeItems[trueItem] = false;
  //   //   setActive(activeItems);
  //   //   console.log("nope, it got there");
  //   // }
  // };

  let listItems = items.map((item, i) =>
    active[i] ? (
      <li
        key={i}
        className="active"
        style={{ color: "green" }}
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
        key={i}
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
    )
  );

  return (
    <div>
      <StyledUl>{listItems}</StyledUl>
    </div>
  );
};

const StyledUl = styled(motion.ul)`
  display: flex;
  list-style-type: none;
  li {
    margin: 0 2rem;
    text-transform: uppercase;
    cursor: pointer;
  }

  @media screen and (max-width: 1150px) {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    background: gray;
  }
`;

export default Nav;
