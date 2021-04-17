import React, { forwardRef } from "react";

//styling
import styled from "styled-components";
import { motion } from "framer-motion";

const Contact = forwardRef(({}, ref) => {
  return (
    <StyledContact ref={ref}>
      <div className="cta">
        <div className="text">
          <h1>Take your life back</h1>
          <div className="today">
            <h1>Today</h1>
          </div>
        </div>
        <div className="fans">
          <div className="fan one"></div>
          <div className="fan two"></div>
          <div className="fan three"></div>
        </div>
      </div>
      <div className="flex-container">
        <div className="info">
          <ul>
            <li>Sage Garden Natural Medicine</li>
            <li>603-660-7428</li>
            {/* <li>info@sagegardennaturalmedicine.com</li> */}
            <li>10 Chestnut Dr Suite UP</li>
            <li>Bedford, NH 03110</li>
          </ul>
        </div>
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
      </div>
    </StyledContact>
  );
});

const StyledContact = styled(motion.div)`
  min-height: 100vh;
  padding-bottom: 50vh;

  .cta {
    position: relative;
    min-height: 40vh;
    min-width: 100vw;
    z-index: 0;

    .text {
      background: #bbd4bb;
      min-height: 30vh;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 4;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        padding: 2rem;
      }
    }

    .today {
      h1 {
        color: white;
        font-size: calc(5rem + 0.5vw);
      }
    }

    .fans {
      transform: translateX(-50%);
    }

    .fan {
      min-height: 30vh;
      width: 200vw;
      position: absolute;

      left: 0;
    }
    .one {
      background: #a7bca7;
      z-index: 1;
      top: 30%;
      transform: rotate(-18deg);
    }
    .two {
      background: #cfc1e0;
      z-index: 2;
      top: 20%;
      transform: rotate(-12deg);
    }
    .three {
      background: #bbd4bb;
      z-index: 3;
      top: 10%;
      transform: rotate(-6deg);
    }
  }
  .flex-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  form {
    flex: 1 1 40rem;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    max-width: 60rem;
    h1 {
      padding-bottom: 5rem;
    }
    label {
      font-size: 3rem;
    }

    button {
      border: none;
      border: 3px solid #575757;
      font-size: 3rem;
      background: white;
      color: #638963;
      padding: 2rem;
      border-radius: 1rem;
      width: 100%;
      margin: 0 auto;
      cursor: pointer;
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
      border-bottom: 3px solid #575757;
      margin: 1rem 0;
    }

    textarea {
      border: none;
      border: 3px solid #575757;
      border-radius: 1rem;
      margin: 1rem 0;
      font-size: 2rem;
    }
  }

  .info {
    max-width: 60rem;
    flex: 1 1 30rem;
    padding: 5rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: blue; */
    flex-direction: column;

    ul {
      list-style-type: none;
    }

    li {
      line-height: 2;
      font-size: calc(2rem + 0.5vw);
    }
  }
`;

export default Contact;
