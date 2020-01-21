import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
// import { device } from "../utils/breakpoints"

import Nav from "./nav"
import MobileNav from "./mobileNav"

import logo from "../images/jblogo.svg"

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
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
`

function getWindowHeight() {
  const { innerHeight: height } = window
  return height
}

function getWindowWidth() {
  const { innerWidth: width } = window
  return width
}

// ********** component code ***************

const Navigation = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth())
  const [windowHeight, setWindowHeight] = useState(getWindowHeight())

  useEffect(() => {
    // deal with window resizing
    function handleResize() {
      setWindowHeight(getWindowHeight())
      setWindowWidth(getWindowWidth())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [windowWidth, windowHeight])

  return (
    <NavWrapper>
      <Link to="/" className="logo">
        <img src={logo} alt="Site Logo" />
      </Link>
      {windowWidth <= 768 ? <MobileNav viewPortHeight={windowHeight} /> : null}
      {windowWidth >= 768 ? <Nav /> : null}
    </NavWrapper>
  )
}

export default Navigation
