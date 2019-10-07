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
  padding: 30px;
  width: 100%;
  display: grid;
  grid-template-rows: auto 100px;
  justify-items: center;

  .introduction {
    grid-row: 1;
    width: 275px;

    img {
      width: 100%;
      height: 100%;
      margin: 0 auto;
    }

    .header_text {
      width: 270px;
      margin: 20px auto;
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
    grid-template-columns: 100px 1fr;
    grid-template-rows: auto;

    .introduction {
      grid-column: 2;
      display: flex;
      max-width: 650px;
      margin-right: auto;

      img {
        width: 320px;
      }

      .header_text {
        margin-left: 30px;
      }
    }
  }
`

const Header = ({ siteTitle }) => (
  <HeroWrap>
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
    <Contact />
  </HeroWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
