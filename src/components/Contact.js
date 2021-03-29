import React from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <StyledContact>
      <StyledInfo>
        <h1>
          Let's get started <span>today</span>
        </h1>
        <ul>
          <li>Sage Garden Natural Medicine</li>
          <li>603-660-7428</li>
          <li>info@sagegardennaturalmedicine.com</li>
          <li>10 Chestnut Dr Suite UP</li>
          <li>Bedford, NH 03110</li>
        </ul>
      </StyledInfo>
      <form action="">
        <h1>Contact Us</h1>
        <label>Name:</label>
        <input type="text"></input>
        <label>Email:</label>
        <input type="text"></input>
        <label>Message:</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit">Submit</button>
      </form>
    </StyledContact>
  );
};

const StyledContact = styled(motion.div)`
  display: flex;
  min-height: 90vh;
  padding: 5rem;
  padding-top: 10rem;

  form {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 5rem;

    h1 {
      padding-bottom: 3rem;
    }

    label {
      font-size: 3rem;
    }

    button {
      border: none;
      font-size: 2rem;
      background: #638963;
      color: white;
      padding: 2rem;
      border-radius: 1rem;
      width: 25rem;
      margin: 0 auto;
      cursor: pointer;
    }

    input,
    textarea {
      background: white;
    }

    input {
      padding: 1rem;
      font-size: 2rem;
      border: 1px solid black;
      border-radius: 1rem;
      margin: 1rem 0;
    }

    textarea {
      border: 1px solid black;
      border-radius: 1rem;
      margin: 1rem 0;
    }
  }

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    align-items: center;

    form {
      padding: 5rem 0;
      width: 80%;
    }
  }
`;
const StyledInfo = styled(motion.div)`
  height: 100%;
  flex: 1;
  padding: 5rem;

  h1 {
    padding-bottom: 5rem;
  }

  ul {
    list-style-type: none;
  }

  li {
    line-height: 2;
  }

  @media screen and (max-width: 1100px) {
    width: 90%;
  }
`;

export default Contact;
