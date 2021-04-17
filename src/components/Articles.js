import React, { forwardRef } from "react";

//components
import Article from "./Article";
//styling
import styled from "styled-components";
import { motion } from "framer-motion";
//animations
import { useScroll } from "./useScroll";
import { revealArticles, revealArticle } from "../animations";

const Articles = forwardRef(({}, ref) => {
  const [element, controls] = useScroll();
  return (
    <StyledArticles ref={ref}>
      <h1>Helpful Articles</h1>
    </StyledArticles>
  );
});
const StyledArticle = styled(motion.div)``;
const StyledArticles = styled(motion.div)`
  min-height: 90vh;
  background: #a14848;
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
`;

export default Articles;
