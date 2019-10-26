import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

//components
import Contact from "../Contact"

//images
import externalLink from "../../images/external_link_icon.svg"

//media query breakpoints
import { device } from "../../utils/breakpoints"

const ProjectPageWrapper = styled.section`
  padding: 20px;
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
        transition: transform 250ms ease-in-out;
        height: 35px;

        &:hover {
          transform: scale(1.3);
        }
      }
    }
  }

  .project_body {
    display: grid;
    grid-template-columns: 1fr;
    width: 90%;
    justify-self: center;
    grid-gap: 20px;

    .project_image {
      max-width: 535px;
      justify-self: center;
      img {
        width: 100%;
      }
    }
  }

  @media ${device.tablet} {
    .project_title {
      h1 {
        font-size: 4.5em;
      }
    }
  }

  @media ${device.laptop} {
    .project_body {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: 600px;
      margin-top: 50px;

      .project_text {
        grid-column: 1;
        grid-row: 1;
      }

      .project_image {
        max-height: 600px;
        grid-column: 2;
      }
    }
  }
`

export default ({ data }) => {
  const {
    title,
    websiteURL,
    about,
    images,
    tools,
  } = data.allProjectsDataJson.edges[0].node

  //get public url for the project image out of the query
  const projectImage = images.publicURL

  console.log(images.publicURL)
  return (
    <ProjectPageWrapper>
      <div className="project_nav">
        <Contact />
        <Link to="/">Home</Link>
      </div>
      <div className="project_title">
        <h1>{title}</h1>
        {websiteURL && (
          <a href={websiteURL}>
            <img src={externalLink} />
          </a>
        )}
      </div>
      <div className="project_body">
        <div className="project_image">
          {projectImage && <img src={projectImage} />}
        </div>
        <div className="project_text">
          <h2>Stack</h2>
          <p>{tools}</p>
          <h2>About the Project</h2>
          <p>{about}</p>
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
          images {
            publicURL
          }
          tools
          description
          about
          websiteURL
        }
      }
    }
  }
`
