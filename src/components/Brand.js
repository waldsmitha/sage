import React, { useState } from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Brand = () => {
  const [offsetTop, setOffsetTop] = useState(false);

  const scrollFunction = () => {
    if (window.pageYOffset) {
      setOffsetTop(true);
      console.log("true");
    } else {
      setOffsetTop(false);
      console.log("false");
    }
  };

  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <StyledBrand>
      <svg height="100" width="100">
        <circle cx="40" cy="50" r="40" fill="#638963" />
      </svg>
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
`;

export default Brand;
