import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const NotFoundWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  .notFoundBody {
    justify-self: center;

    h1 {
      font-size: 10rem;
      margin-bottom: 0;
    }

    a {
      font-size: 1.45rem;
    }
  }
`

const PageNotFound = () => {
  return (
    <NotFoundWrapper>
      <div className="notFoundBody">
        <h1>404</h1>
        <p>Weird, I wonder where that page went!?</p>
        <p>
          Click <Link to="/">here</Link> to go back to the main page
        </p>
      </div>
    </NotFoundWrapper>
  )
}

export default PageNotFound
