import React from "react";

//components
import Article from "./Article";
//imgs
import ill from "../img/ill.jpg";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Articles = () => {
  return (
    <StyledArticles>
      <h1>Helpful Articles</h1>
      <StyledArticleGallery>
        <Article />
        <Article />
        <Article />
      </StyledArticleGallery>
    </StyledArticles>
  );
};

const StyledArticles = styled(motion.div)`
  min-height: 90vh;
  background: white;
  display: flex;
  align-items: center;

  h1 {
    padding: 5rem 0 0 8rem;
  }

  @media screen and (max-width: 1200px) {
    display: block;
    text-align: center;

    h1 {
      padding: 5rem 0 0 0;
    }
  }
`;
const StyledArticleGallery = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1200px) {
    justify-content: center;
  }
`;

export default Articles;