import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <h1>Sage Garden Natural Medicine @2021</h1>
      <h2>Designed by Waldsmith</h2>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: #838383;
  color: #f2f2f2;
  min-height: 20vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  h1 {
    padding-bottom: 2rem;
    font-size: 3rem;
  }
`;
export default Footer;
