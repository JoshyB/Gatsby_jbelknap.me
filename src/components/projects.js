import React, { useLayoutEffect } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import styled from "styled-components"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

//svg image
import linkSVG from "../images/link-symbol.svg"

const ProjectWrapper = styled.section`
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  h2 {
    font-size: 3em;
  }

  .allProjects {
    @media ${device.tablet} {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.laptop} {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.desktop} {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .project_tile {
    border: 1px solid #fff;
    background-color: var(--main-background-color);
    padding: 30px;
    min-height: 300px;
    display: grid;
    grid-template-rows: auto 1fr auto;

    &:hover {
      transform: scale(1.1);
      transition: all 450ms ease-in-out;
    }

    h3 {
      font-size: 1.45em;
    }
    p {
      font-size: 1.2em;
    }

    a {
      display: block;
      cursor: pointer;
      width: min-content;
      background-color: var(--text-shadow-secondary);
      padding: 5px 30px;
      border-radius: 0.2em;
      margin-top: auto;
      bottom: 20px;

      &:hover {
        background-color: rgb(191, 29, 209);
      }
    }

    @media ${device.laptop} {
      height: 370px;
    }
  }
`

const Projects = () => {
  return (
    <ProjectWrapper>
      <h2>Projects</h2>
      <StaticQuery
        query={graphql`
          query projectData {
            allProjectsDataJson {
              nodes {
                slug
                description
                title
                tools
                websiteURL
              }
            }
          }
        `}
        render={data => (
          <div className="allProjects">
            {data.allProjectsDataJson.nodes.map((project, index) => (
              <div className="project_tile" key={index}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.slug ? (
                  <Link to={`/${project.slug}`}>
                    <img src={linkSVG} />
                  </Link>
                ) : null}
              </div>
            ))}
          </div>
        )}
      />
    </ProjectWrapper>
  )
}

export default Projects
