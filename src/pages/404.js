import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PageNotFound from "../components/pageNotFound"

// Enter animation component
import EnterAnimation from "../components/enterAnimation"

//breakpoints
import { device } from "../utils/breakpoints"

const NotFoundWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-rows: repeat(3, auto);
  }
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <EnterAnimation>
      <NotFoundWrapper>
        <PageNotFound />
      </NotFoundWrapper>
    </EnterAnimation>
  </Layout>
)

export default NotFoundPage
