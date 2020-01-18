import React, { useState } from "react"
import styled from "styled-components"

// //bringing in media queries from an extrapolated file
// import { device } from "../utils/breakpoints"

import Navlink from "./navlink"

// component imports
import Hamburger from "./hamburger"

const MobileNavWrap = styled.nav`
  position: fixed;
  top: 0;
  right: 0;

  button {
    background: none;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;

    &:before {
      content: "";
      display: block;
      position: absolute;
      z-index: -1;
      width: 8em;
      height: 8em;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      background: var(--text-shadow-primary);
      outline: none;
      opacity: 0.5;
      animation: pulse 4s linear infinite;
    }
  }

  .menu {
    width: 350px;
    .site-menu {
      margin: 0;
      position: absolute;
      top: 0;
      right: 0;
      z-index: -1;
      background: var(--mobile-menu-background-color);
      width: inherit;
      height: ${props => `${props.viewPortHeight}px`};
      list-style: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      clip-path: circle(0% at 100% 0%);
      transition: clip-path var(--duration) var(--easing);

      &[data-open="true"] {
        clip-path: ${props =>
          `circle(${props.viewPortHeight + 200}px at 100% 0%)`};
      }

      li {
        margin: 30px 0;
        font-size: 2.5em;
      }
    }
  }

  .open {
    clip-path: circle(200% at 100% 0%);
  }

  @keyframes pulse {
    0%,
    51%,
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
    }
    25% {
      opacity: 0.5;
    }
    50% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const MobileNav = ({ viewPortHeight }) => {
  const [openCloseToggle, setOpenCloseToggle] = useState(false)

  return (
    <MobileNavWrap viewPortHeight={viewPortHeight}>
      <button onClick={() => setOpenCloseToggle(!openCloseToggle)}>
        <Hamburger />
      </button>
      <div className="menu">
        <ul className="site-menu" data-open={openCloseToggle}>
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
      </div>
    </MobileNavWrap>
  )
}

export default MobileNav
