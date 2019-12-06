// Component is used for links on the navigation bar
// It uses getProps to determine which link is currently active. i.e. which page you are currently visiting and changes the styling accordingly

import React from "react"
import { Link } from "gatsby"

//bring in styling for link colors
// import "./layout.css"

const Navlink = props => {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        return {
          style: {
            color: isCurrent
              ? "var(--text-shadow-secondary)"
              : "var(--link-color)",
          },
        }
      }}
    ></Link>
  )
}

export default Navlink
