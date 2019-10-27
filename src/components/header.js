import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

//images used in header
import portrait from "../images/JoshyB.jpg"

//components
import Nav from "./nav"
import Contact from "./contact"

const HeroWrap = styled.header`
  padding: 30px 0;
  width: 100%;
  display: grid;
  grid-template-rows: auto;
  grid-auto-columns: 1fr;
  justify-items: center;

  .introduction {
    display: grid;
    grid-template-rows: repeat(3, auto);
    max-width: 300px;

    img {
      grid-row: 1;
      width: 100%;
      margin: 0 auto;
    }

    .header_text {
      display: grid;

      h1 {
        letter-spacing: 3px;
        font-size: 4.5em;
        text-shadow: 5px 5px var(--text-shadow-primary),
          -3px -3px var(--text-shadow-secondary);
        margin: 0 auto;
      }

      p {
        font-size: 1.65em;
      }
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 100px 2fr 1fr;
    grid-template-rows: auto;

    .introduction {
      grid-column: 2;
      display: flex;
      justify-self: start;
      max-width: 100%;

      img {
        height: 350px;
        width: auto;
        margin-right: 20px;
      }

      .header_text {
        width: 350px;

        h1 {
          margin: 0;
        }
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeroWrap>
    <Contact />
    <div className="introduction">
      <img src={portrait} alt="" />
      <div className="header_text">
        <h1>
          Joshua <br /> Belknap
        </h1>
        <p>
          Hello, I'm a Web Developer based in{" "}
          <a href="https://www.google.com/maps/place/Columbus,+OH/@39.9829514,-82.990829,11z/data=!4m2!3m1!1s0x883889c1b990de71:0xe43266f8cfb1b533">
            Columbus, Ohio
          </a>{" "}
        </p>
      </div>
    </div>
  </HeroWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
