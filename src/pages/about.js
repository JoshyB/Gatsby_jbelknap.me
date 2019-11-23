import React from "react"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

// Enter animation component
import EnterAnimation from "../components/enterAnimation"

//compontents
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMe from "../components/aboutMe"

const ContentWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-rows: repeat(3, auto);
  }
`

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <EnterAnimation>
      <ContentWrapper>
        <AboutMe />
      </ContentWrapper>
    </EnterAnimation>
  </Layout>
)

export default AboutPage
