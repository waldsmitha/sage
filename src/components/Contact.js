import React, { forwardRef } from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = forwardRef(({}, ref) => {
  return (
    <StyledContact ref={ref}>
      <StyledInfo>
        <h1>
          Let's get started <span>today</span>
        </h1>
        <ul>
          <li>Sage Garden Natural Medicine</li>
          <li>603-660-7428</li>
          {/* <li>info@sagegardennaturalmedicine.com</li> */}
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
});

const StyledContact = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  background: white;
  justify-content: space-around;
  padding-top: 10vh;
  min-height: 100vh;

  form {
    flex: 1 1 40rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    max-width: 60rem;

    label {
      font-size: 3rem;
    }

    button {
      border: none;
      font-size: 3rem;
      background: white;
      color: #638963;
      padding: 2rem;
      border-radius: 1rem;
      width: 100%;
      margin: 0 auto;
      cursor: pointer;
      box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.2);
      transition: 0.3s;

      &:hover {
        color: white;
        background: #638963;
      }
    }

    input {
      padding: 1rem;
      font-size: 2rem;
      border: none;
      border-radius: 1rem;
      margin: 1rem 0;
      box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.2);
    }

    textarea {
      border: none;
      box-shadow: 1rem 1rem 3rem rgba(0, 0, 0, 0.2);
      border-radius: 1rem;
      margin: 1rem 0;
      font-size: 2rem;
    }
  }
`;
const StyledInfo = styled(motion.div)`
  max-width: 60rem;
  flex: 1 1 30rem;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  h1 {
    padding-bottom: 5rem;
  }

  ul {
    list-style-type: none;
  }

  li {
    line-height: 2;
  }
`;

export default Contact;
