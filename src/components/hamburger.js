import React from "react"
import styled from "styled-components"

const HamburgerWrap = styled.svg`
  width: 40px;
  height: 40px;
  stroke-width: 3px;
  margin: 20px;
  stroke: var(--link-color);

  &:hover {
    stroke: var(--text-shadow-secondary);
  }
`

const Hamburger = () => {
  return (
    <HamburgerWrap viewBox="0 0 40 40">
      <path d="m5 11 l35 0"></path>
      <path d="m10 22 l35 0"></path>
      <path d="m15 33 l35 0"></path>
    </HamburgerWrap>
  )
}

export default Hamburger
