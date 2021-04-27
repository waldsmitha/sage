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
      <svg
        width="100"
        height="100"
        viewBox="0 -5 110 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="logo">
          <path
            id="border"
            d="M101.5 51.5C101.5 64.7297 96.2568 77.4202 86.9188 86.7918C77.5807 96.1634 64.9091 101.452 51.6795 101.5C38.4499 101.547 25.7406 96.3495 16.3356 87.0452C6.93049 77.7409 1.59628 65.0884 1.50129 51.859C1.4063 38.6296 6.55828 25.9018 15.8288 16.4634C25.0993 7.02499 37.7325 1.64539 50.9615 1.5029C64.1905 1.36042 76.9367 6.46667 86.4083 15.7032C95.8799 24.9398 101.305 37.5536 101.495 50.782L101.5 51.5Z"
            fill="white"
            fill-opacity="0.1417"
            stroke="#87B583"
            stroke-opacity="0.955645"
            stroke-width="3"
          />
          <path
            id="right"
            d="M60 54C60 63.2359 59.0091 72.0974 57.2433 78.6532C55.4775 85.2091 53.08 88.9278 50.5732 88.999C48.0664 89.0701 45.6535 85.4879 43.8606 79.0331C42.0676 72.5782 41.0397 63.774 41.0011 54.5392C40.9625 45.3044 41.9162 36.3877 43.6544 29.7324C45.3925 23.0771 47.7743 19.2228 50.2805 19.0094C52.7867 18.7959 55.2142 22.2408 57.034 28.5931C58.8538 34.9454 59.9183 43.6902 59.9955 52.9217L60 54Z"
            fill="#88B89F"
          />
          <path
            id="left"
            d="M60 54C60 63.2359 59.0091 72.0974 57.2433 78.6532C55.4775 85.2091 53.08 88.9278 50.5732 88.999C48.0664 89.0701 45.6535 85.4879 43.8606 79.0331C42.0676 72.5782 41.0397 63.774 41.0011 54.5392C40.9625 45.3044 41.9162 36.3877 43.6544 29.7324C45.3925 23.0771 47.7743 19.2228 50.2805 19.0094C52.7867 18.7959 55.2142 22.2408 57.034 28.5931C58.8538 34.9454 59.9183 43.6902 59.9955 52.9217L60 54Z"
            fill="#ADC687"
          />
          <path
            id="center"
            d="M60.7698 51.2402C60.7698 61.1358 59.6746 70.6303 57.7229 77.6544C55.7713 84.6785 53.1213 88.6629 50.3507 88.7391C47.58 88.8154 44.9132 84.9773 42.9314 78.0614C40.9497 71.1455 39.8137 61.7124 39.771 51.818C39.7283 41.9236 40.7824 32.37 42.7036 25.2393C44.6247 18.1086 47.2571 13.9789 50.0271 13.7503C52.7972 13.5216 55.4802 17.2125 57.4915 24.0185C59.5029 30.8246 60.6794 40.1941 60.7648 50.0849L60.7698 51.2402Z"
            fill="#87B583"
            fill-opacity="0.956863"
          />
        </g>
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

  img {
    height: 100px;
    width: 100px;
    padding: 1rem;
  }

  #right {
    animation: turnright 1s ease;
    transform-origin: bottom;
    transform-box: fill-box;
  }
  #left {
    animation: turnleft 1s ease;
    transform-origin: bottom;
    transform-box: fill-box;
  }

  #left,
  #right {
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }

  @keyframes turnright {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(30deg);
    }
  }
  @keyframes turnleft {
    from {
      transform: rotateZ(0deg);
    }
    to {
      transform: rotateZ(-30deg);
    }
  }
`;

export default Brand;
