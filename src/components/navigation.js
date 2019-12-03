import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

import Navlink from "./navlink"

import logo from "../images/jblogo.svg"

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 100;
  border-bottom: 1px solid rgba(55, 241, 238, 0.7);
  background-color: var(--main-background-color);

  .logo {
    position: absolute;
    height: 200px;
    top: -40px;
    left: -50px;
    transform: rotate(-10deg);

    img {
      height: 100%;
    }
  }

  .navMenu {
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
  }
`

class Navigation extends Component {
  state = { isVisible: false }
  render() {
    return (
      <NavWrapper>
        <Link to="/" className="logo">
          <img src={logo} alt="Site Logo" />
        </Link>
        <ul className="navMenu">
          <li>
            <Navlink to="/">HOME</Navlink>
          </li>
          <li>
            <Navlink to="/about">ABOUT</Navlink>
          </li>
          <li>
            <a href="mailto:seejoshcode@gmail.com" className="opaque__button">
              Contact Me
            </a>
          </li>
        </ul>
      </NavWrapper>
    )
  }
}

export default Navigation
