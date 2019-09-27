import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

//compontents
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"

const ContentWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;

  @media ${device.tablet} {
    grid-template-rows: repeat(3, auto);
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContentWrapper>
      <Header />
      <Projects />
    </ContentWrapper>
  </Layout>
)

export default IndexPage
