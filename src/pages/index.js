import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"

const ContentWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
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
