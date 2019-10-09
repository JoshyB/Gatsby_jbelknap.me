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
  grid-template-rows: repeat(4, auto);

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

  .project_images {
    display: flex;
    height: 500px;
    img {
      height: 100%;
      margin: 5px;
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
      <div className="project_images">
        <img src={rcollins} alt="" />
        <img src={rcollinsMobile} alt="" />
      </div>
      <p>{project.description}</p>
      <p>{project.about}</p>
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
