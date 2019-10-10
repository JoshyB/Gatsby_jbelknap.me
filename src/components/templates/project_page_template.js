import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

//components
import Contact from "../contact"

//images
import externalLink from "../../images/external_link_icon.svg"
import rcollins from "../../images/rcollins/rcollins_home.png"
import rcollinsMobile from "../../images/rcollins/rcollins_home_mobile.png"

//media query breakpoints
import { device } from "../../utils/breakpoints"

const ProjectPageWrapper = styled.section`
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, auto);

  .project_nav {
    display: flex;
    justify-content: space-between;
  }

  .project_title {
    margin: 50px 0;

    h1 {
      margin: 5px;
      font-size: 3.5em;
      display: inline-block;
    }

    a {
      margin-left: 20px;
      img {
        transition: all 250ms ease-in-out;
        height: 35px;

        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }

  .project_body {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 750px auto;
    width: 90%;
    justify-self: center;
    grid-gap: 20px;

    .desktop_image {
      grid-row: 1;
      grid-column: 1 / 2;
      height: 100%;
      justify-self: center;
    }

    .mobile_image {
      grid-row: 1;
      grid-column: 2;
      width: 300px;
      justify-self: center;
    }

    .project_text {
      grid-row: 2;
      grid-column: 1 / 2;
      width: 50em;
      justify-self: center;
    }
  }

  @media ${device.tablet} {
    .project_title {
      h1 {
        font-size: 4.5em;
      }
    }
  }
`

export default ({ data }) => {
  const project = data.allProjectsDataJson.edges[0].node
  return (
    <ProjectPageWrapper>
      <div className="project_nav">
        <Contact />
        <Link to="/">Home</Link>
      </div>
      <div className="project_title">
        <h1>{project.title}</h1>
        <a href={project.websiteURL}>
          <img src={externalLink} />
        </a>
      </div>
      <div className="project_body">
        <img className="desktop_image" src={rcollins} />
        <img className="mobile_image" src={rcollinsMobile} />
        <div className="project_text">
          <p>{project.description}</p>
          <p>{project.about}</p>
        </div>
      </div>
    </ProjectPageWrapper>
  )
}

export const query = graphql`
  query($path: String!) {
    allProjectsDataJson(filter: { slug: { eq: $path } }) {
      edges {
        node {
          slug
          title
          tools
          description
          about
          websiteURL
        }
      }
    }
  }
`
