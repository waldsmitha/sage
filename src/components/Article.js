import React from "react";

//imgs
import ill from "../img/ill.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Article = () => {
  return (
    <StyledArticle>
      <img src={ill} alt="" />
      <StyledDescription>
        <h2>Title Text</h2>
        <p>Short description of article</p>
        <p>1/1/2021</p>
      </StyledDescription>
    </StyledArticle>
  );
};

const StyledArticle = styled(motion.div)`
  display: flex;
  flex-direction: column;
  max-height: 40vh;
  margin: 5rem;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  max-width: 50rem;
  min-width: 30rem;
  flex: 1 1 0;
  cursor: pointer;

  img {
    height: 100%;
    object-fit: cover;
  }

  p {
    padding: 0.5rem 0;
  }
`;
const StyledDescription = styled(motion.div)`
  padding: 1rem;
`;

export default Article;
