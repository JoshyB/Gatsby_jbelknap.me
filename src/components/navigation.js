import React, { Component } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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
        margin: 15px;
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
        </ul>
      </NavWrapper>
    )
  }
}

export default Navigation
