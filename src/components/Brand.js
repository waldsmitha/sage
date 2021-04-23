import React, { useState } from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

import logo from "../img/logo.svg";

const Brand = () => {
  const [offsetTop, setOffsetTop] = useState(false);

  const scrollFunction = () => {
    if (window.pageYOffset) {
      setOffsetTop(true);
    } else {
      setOffsetTop(false);
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <StyledBrand>
      <img src={logo} alt="" />
      <div className="transition">
        <div className="name">
          <h1>Sage Garden</h1>
          <h2>Natural Medicine</h2>
        </div>
      </div>
    </StyledBrand>
  );
};

const StyledBrand = styled(motion.div)`
  display: flex;
  color: #638963;
  align-items: center;
  transition: 0.5s all;
  .transition {
    transition: 0.5s all;
  }
  .name {
    h1,
    h2 {
      font-weight: 400;
      line-height: 90%;
    }
  }

  img {
    height: 100px;
    width: 100px;
    padding: 1rem;
  }
`;

export default Brand;
