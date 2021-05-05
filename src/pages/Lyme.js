import React from "react";
import { pageAnimation } from "../animations";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { ScrollTop } from "../util";

const Lyme = () => {
  return (
    <StyledContainer>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="content"
      >
        <h1 id="header">Lyme Disease</h1>
        <p>
          Lyme Disease is endemic in our area. As someone who has experienced
          Lyme Disease first hand, As a Lyme Literate Doctor with extensive
          training in tick-borne illness, I am committed to helping those who
          have been affected, reclaim their health. Please read and share the
          following information to help prevent the occurrence of tick-borne
          illness.
        </p>
        <h1>Tick Removal</h1>
        <ul>
          <li>
            Remove the tick with tweezers or a tick scoop in 1 quick motion.
            Pull with a steady upward motion.
          </li>
          <li>After removal, clean with antiseptic (alcohol or iodine).</li>
        </ul>
        <h1>Tick Testing</h1>
        <ul>
          <li>
            Testing the tick will let you know if you have been exposed to Lyme
            or other tick-borne disease. This information allows for proper
            treatment from the beginning.
          </li>
          <li>
            After you have removed the tick, place the tick in a sealable
            plastic baggie and send it to TickReport.com
          </li>
        </ul>
        <h1>Treatment</h1>
        <p>
          Schedule an appointment for a quick tick assessment if you are
          concerned, develop symptoms or your tick test is positive for Lyme or
          other infections.
        </p>
        <p>We use a variety of treatments for tick-borne illness</p>
        <ul>
          <li>
            Natural treatments such as nutritional, herbal and homeopathic
            medicine
          </li>
          <li>Antibiotics both oral and injection</li>
          <li>Alternative treatments such as Hydrotherapy</li>
        </ul>
        <h1>Could I have Lyme?</h1>
        <p>
          Less than half of those afflicted with Lyme disease remember being
          bitten by a tick or develop a Bulls Eye rash. Please schedule an
          appointment for assessment if you answer yes to any of the following
          questions.
        </p>
        <ul>
          <li>Do you have 1 or more of the following symptoms?</li>
          <li>
            Joint pain that wanders from place to place, brain fog, anxiety,
            insomnia, GI distress, headaches, nerve pain, heart palpitations,
            chronic illness, night sweats and fatigue.{" "}
          </li>
          <li>Were you treated for Lyme Disease but still have symptoms?</li>
          <li> Did you become ill after being bitten by a tick? </li>
          <li>
            Were you told you don't have Lyme Disease after a negative test but
            are still have symptoms?
          </li>
        </ul>
        <Link to="/">
          <button>Home</button>
        </Link>
      </motion.div>
      <ScrollTop />
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  background: #dfeedf;
  padding: 5rem 2rem;
  padding-bottom: 10rem;
  #header {
    font-size: calc(4rem + 0.5vw);
  }
  .content {
    max-width: 100rem;
    margin: 0 auto;
    h1 {
      padding: 4rem 0;
    }
    ul {
      padding-left: 2rem;
    }
    li {
      padding: 1rem 0;
      font-size: 2rem;
    }
    p {
      padding: 1rem 0;
    }
    p::first-letter {
      font-size: 28px;
    }
    button {
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      color: #f2f2f2;
      background: rgba(68, 68, 68, 0.5);
      border: 2px #f2f2f2 solid;
      border-radius: 1rem;
      padding: 1rem 2rem;
      margin-top: 5rem;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background: #a7bca7;
        color: #f2f2f2;
      }
    }
  }
`;

export default Lyme;
