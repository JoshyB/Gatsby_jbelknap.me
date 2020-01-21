import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

import Navlink from "./navlink"

const NavWrapper = styled.ul`
  margin-left: auto;
  padding: 10px;
  list-style: none;
  display: flex;

  li {
    a {
      margin: 5px;

      @media ${device.tablet} {
        margin: 15px;
      }
    }
  }
`

const Nav = () => {
  return (
    <NavWrapper>
      <li>
        <Navlink ato="/">HOME</Navlink>
      </li>
      <li>
        <Navlink to="/about/">ABOUT</Navlink>
      </li>
      <li>
        <a href="mailto:seejoshcode@gmail.com" className="opaque__button">
          Contact Me
        </a>
      </li>
    </NavWrapper>
  )
}

export default Nav
