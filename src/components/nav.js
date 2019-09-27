import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Navigation = styled.nav`
  ul {
    text-align: right;
    list-style: none;
    li {
      margin: 10px;
      a {
        text-decoration: none;
        padding: 5px;

        &:hover,
        &:focus {
          border-right: 2px solid RGB(228, 36, 249);
        }
      }
    }
  }
`

const Nav = () => (
  <header>
    <Navigation>
      <ul>
        <li>
          <a href="#">BLOG</a>
        </li>
        <li>
          <a href="#">HTML</a>
        </li>
        <li>
          <a href="#">CSS</a>
        </li>
        <li>
          <a href="#">JavaScript</a>
        </li>
      </ul>
    </Navigation>
  </header>
)

export default Nav
