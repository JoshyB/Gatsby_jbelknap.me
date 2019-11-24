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
        return { style: { opacity: isCurrent ? "1" : "0.6" } }
      }}
    ></Link>
  )
}

export default Navlink
