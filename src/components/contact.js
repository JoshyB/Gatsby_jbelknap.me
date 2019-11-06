import React from "react"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

import octocat from "../images/github_icon.svg"
import email from "../images/mail_icon.svg"

const ContactWrap = styled.div`
  grid-row: 2;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    width: 35px;
    margin: 10px 25px;
    transition: transform 200ms ease-in-out;

    &:hover {
      transform: scale(1.3);
    }
    img {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    grid-column: 1;
    flex-direction: column;
    grid-row: 1;
    justify-content: flex-start;

    a {
      img {
      }
    }
  }
`
const Contact = () => {
  return (
    <ContactWrap>
      <a href="https://www.github.com/joshyb">
        <img src={octocat} alt="The Octocat" />
      </a>
      <a href="mailto:seejoshcode@gmail.com">
        <img src={email} alt="envelope icon" />
      </a>
    </ContactWrap>
  )
}

export default Contact
