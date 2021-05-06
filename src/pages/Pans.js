import React from "react";
import { pageAnimation } from "../animations";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { ScrollTop } from "../util";

const Pans = () => {
  return (
    <StyledContainer>
      <motion.div
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="content"
      >
        <h1 id="header">What are PANS and PANDAS?</h1>
        <p>
          PANS stands for Pediatric Acute-onset Neuropsychiatric Syndrome. This
          is a very abrupt onset of neuropsychiatric symptoms following an
          infection. The onset of PANS follows bacterial infections including
          Lyme and Mycoplasma pneumonia and can be triggered by some viral
          infections as well.
        </p>
        <p>
          PANDAS is short for Pediatric Autoimmune Neuropsychiatric Disorders
          Associated with Streptococcal Infections. PANDAS symptoms typically
          appear following bacterial infections with some types of Strep
          bacteria.
        </p>
        <h1>What does this look like?</h1>
        <p>
          Parents often describe a well adjusted happy child who, seemingly out
          of nowhere, becomes anxious, angry and confused with some combination
          of the symptoms listed below.
        </p>
        <h1>Symptoms of PANS/PANDAS include:</h1>
        <ul>
          <li>
            Obsessive-compulsive disorder (OCD). Children may suddenly start
            rituals of counting, be overly concerned with germs, cleanliness or
            neatness. Many children become obsessed with food texture and tastes
            which may develop into eating disorders.
          </li>
          <li>
            Inability to focus, concentrate and process information which can
            lead to a deterioration in school performance.
          </li>
          <li>
            Tics such as the constant need to clear their throat or facial
            twitches
          </li>
          <li>
            Mood changes including irritability, anxiety, depression and rage.
          </li>
          <li>Separation anxiety that is inappropriate for their age</li>
          <li>Physical symptoms such as joint pain</li>
          <li>Sensitivity to noise and light</li>
          <li>Bedwetting and frequent urination</li>
          <li>Sleep disturbances</li>
        </ul>
        <h1>Resources</h1>
        <ul>
          <a href="https://youtu.be/yIQEMcHoXlM">
            <li>PANS/ PANDAS by Molecular Labs Video</li>
          </a>
          <a href="https://childmind.org/guide/parents-guide-to-pans-and-pandas/">
            <li>Child Mind Institute</li>
          </a>
          <a href="www.pandasnetwork.org">
            <li>
              PANDAS Network – Pediatric Autoimmune Neuropsychiatric Disorders
            </li>
          </a>
          <a href="https:// www.nimh.nih.gov/health/publications/pandas/">
            <li>
              National Institute of Mental Health: Fact Sheet about Pediatric
              Autoimmune Neuropsychiatric Disorders Associated with
              Streptococcal Infections
            </li>
          </a>
          <a href="https://www.moleculeralabs.com/#mg">
            <li>Moleculera Labs </li>
          </a>
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
    a {
      color: #575757;
      transition: 0.3s;
      &:hover {
        color: #8f8f8f;
      }
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

export default Pans;
