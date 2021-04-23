import React, { forwardRef } from "react";

//imgs
import destiny from "../img/destiny.png";
import foliage from "../img/foliage.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { useScroll } from "./useScroll";
import { revealAboutContent, revealAboutHeader } from "../animations";

const About = forwardRef(({}, ref) => {
  const [element, controls] = useScroll();
  return (
    <StyledAbout ref={ref}>
      <div className="headshot">
        <img src={destiny} alt="" />
      </div>
      <div className="bio">
        <div className="paragraph pg-1">
          <h1>Dr. Destiny Green</h1>
          <p>
            <span>Dr. Green</span> was born in California but relocated to the
            East Coast at a young age. She was raised by a scientifically minded
            father who was an engineer, and a spiritually-minded mother who was
            an artist. Both had a large influence on her early holistic
            thinking. Her passion for the visual arts drove her to a Bachelor of
            Fine Arts while her love of the sciences led her to a minor in
            biology. Upon receiving her undergraduate degree, she spent several
            years pursuing a successful career as a fine artist.
          </p>
          <div className="fans left">
            <div className="relative-container">
              <div className="fan one"></div>
              <div className="fan two"></div>
            </div>
          </div>
        </div>
        <div className="black-bg paragraph">
          <p>
            During that time, she struggled with health issues that left her
            with few answers from traditional western medicine. It was through a
            naturopathic doctor that she finally found the road to recovery.{" "}
          </p>
        </div>

        <div className="paragraph">
          <p>
            Upon graduation from medical school she spent 2 years working with
            Dr. Julia Greenspan treating Lyme, tick-borne illness and chronic
            disease. Having been afflicted with tick-borne illness herself, she
            is committed to helping others with these challenging illnesses.
          </p>
          <div className="fans right">
            <div className="relative-container">
              <div className="fan three"></div>
              <div className="fan four"></div>
            </div>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
});

const StyledAbout = styled(motion.div)`
  display: flex;
  min-height: 80vh;
  flex-direction: column;
  align-items: center;
  padding: 10rem 0;

  .headshot {
    img {
      width: 375px;
      height: 375px;
      /* width: 100%; */
      /* max-height: 40rem; */
      border-radius: 50%;
      border: 5px solid #cfc1e0;
      object-fit: cover;
      object-position: top;
      margin-top: 5rem;
    }
  }

  .bio {
    h1,
    p {
      @media screen and (min-width: 768px) {
        max-width: 120rem;
        margin: 0 auto;
      }
    }

    .paragraph {
      width: 100vw;
      padding: 10rem 10vw;
      position: relative;
      @media screen and (min-width: 768px) {
        padding: 8rem 10vw;
      }
    }

    .pg-1 {
      padding-top: 0;
    }

    .black-bg {
      background: #696969;
      color: #dabcff;
    }

    h1 {
      color: #638963;
      font-size: calc(4rem + 1vw);
      padding: 5rem 0;
    }

    p {
      line-height: 2;
    }
  }
  .right {
    right: 0;
    top: 0;
  }
  .left {
    left: 0;
    bottom: 0;
  }
  .fans {
    position: absolute;
    height: 20vh;
    background: pink;

    .fan {
      width: 20vw;
      position: absolute;
    }

    .one {
      background: #bbd4bb;
      height: 100%;
      clip-path: polygon(0 0, 0% 100%, 100% 100%);
    }
    .two {
      background: #a7bca7;
      height: 100%;
      clip-path: polygon(0 50%, 0% 100%, 100% 100%);
      width: 30vw;
    }
    .three {
      background: #bbd4bb;
      height: 100%;
      clip-path: polygon(100% 0, 100% 100%, 0 0);
      right: 0;
    }
    .four {
      background: #a7bca7;
      height: 100%;
      width: 30vw;
      right: 0;
      clip-path: polygon(100% 0, 100% 50%, 0 0);
    }
  }
`;

export default About;
