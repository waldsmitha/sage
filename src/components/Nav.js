import React from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = ({ active, setActive }) => {
  // const [active, setActive] = useState([true, false, false, false, false]);

  // const items = ["home", "services", "articles", "Dr. Green", "Contact"];
  const items = ["home", "services", "About", "Contact"];

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
`;

export default Nav;
