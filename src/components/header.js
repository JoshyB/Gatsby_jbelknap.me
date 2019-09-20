import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import portrait from "../images/JoshyB.jpg"

import Nav from "./nav"

const HeroWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 50px;

  .introduction {
    display: flex;

    img {
      width: 250px;
      margin-right: 100px;
    }
  }

  .header_text {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 4.45em;
      text-shadow: 6px 6px RGB(116, 184, 189);
      letter-spacing: 4px;
    }

    p {
      color: #fff;
      margin-top: auto;
      font-size: 1.45rem;
    }
  }
`

const Header = ({ siteTitle }) => (
  <header>
    <HeroWrap>
      <div className="introduction">
        <img src={portrait} alt="" />
        <div className="header_text">
          <h1>
            Joshua <br /> Belknap
          </h1>
          <p>Front-end Web Developer</p>
        </div>
      </div>
      <Nav />
    </HeroWrap>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
