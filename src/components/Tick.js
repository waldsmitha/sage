import React from "react";
import styled from "styled-components";

const Tick = ({ setActive }) => {
  const scrollContact = () => {
    setActive([false, false, false, true, false]);
  };
  return (
    <StyledSpacer>
      <h2>Have you been bit by a tick? Book an appointment for a</h2>
      <h1 onClick={scrollContact}>QUICK TICK CHECK</h1>
    </StyledSpacer>
  );
};

const StyledSpacer = styled.div`
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
    font-size: 3rem;
    color: #f2f2f2;
    background: rgba(68, 68, 68, 0.5);
    border: 2px #f2f2f2 solid;
    border-radius: 1rem;
    padding: 1rem 2rem;
    margin-top: 2rem;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
      color: #f2f2f2;
      background: #a7bca7;
    }
  }
`;

export default Tick;
