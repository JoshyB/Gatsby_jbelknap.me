import React from "react"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

//compontents
import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <ContentWrapper>
      <h1>Joshua Belknap</h1>
    </ContentWrapper>
  </Layout>
)

export default AboutPage
