import React, { useEffect } from "react";
import { pageAnimation } from "../animations";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { ScrollTop } from "../util";
const Modalities = () => {
  return (
    <StyledContainer
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <h1>Naturopathy & Therapeutic Modalities</h1>
      <p>
        Naturopathy is a balance of the ancient healing arts and modern
        medicine. It is guided by the principle of vis medicatrix naturae – the
        healing power of nature. In essence, the body has the inherent ability
        to heal itself, but may sometimes need support due to stresses and
        environmental exposures. It is our job to assist and support this
        healing process.
      </p>
      <p>
        Naturopathic Doctors are primary care physicians who have completed an
        undergraduate degree along with a 4 year Graduate Naturopathic Medical
        program. An accredited program includes a strong foundation in the
        sciences of anatomy, physiology, biochemistry and pharmacology training.
        In addition to the basic medical sciences, Naturopathic doctors are also
        trained in nutrition, diet/lifestyle counseling, botanical medicine,
        homeopathy and other natural modalities. It is our goal to support the
        natural healing process. Treatment modalities are chosen based on the
        need of the individual and the extent of the illness.
      </p>
      <h1>Modalities we use are:</h1>
      <ul>
        <li>Diet/Lifestyle modifications</li>
        <li>Botanical medicine</li>
        <li>Aromatherapy</li>
        <li>Homeopathy</li>
        <li>Nutritional Support</li>
        <li>Somatic Reeducation</li>
        <li>Hydrotherapy</li>
        <li>Pharmaceuticals</li>
      </ul>
      <h1>We are guided by the following 6 principles</h1>
      <ul>
        <li>First do no harm</li>
        <li>The Healing Power of Nature</li>
        <li>Identify and Treat the Cause</li>
        <li>Physician as Teacher</li>
        <li>Treat the Whole Person</li>
        <li>Prevention is Cure</li>
      </ul>
      <Link to="/">
        <button>Home</button>
      </Link>
      <ScrollTop />
    </StyledContainer>
  );
};

const StyledContainer = styled(motion.div)`
  padding: 2rem;
  padding-bottom: 5rem;
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
  }
  p {
    padding: 1rem 0;
  }
  p::first-letter {
    font-size: 28px;
  }
  button {
    border: none;
    color: #638963;
    background: #f2f2f2;
    padding: 1rem 2rem;
    margin-top: 2rem;
    border-radius: 1rem;
    cursor: pointer;
  }
`;

export default Modalities;
