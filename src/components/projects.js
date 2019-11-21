import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import SVGIcon from "./SVGIcons"

//bringing in media queries from an extrapolated file
import { device } from "../utils/breakpoints"

//svg image
import linkSVG from "../images/link.svg"
import projectIcon from "../images/project_icon.svg"

const ProjectWrapper = styled.section`
  width: 100%;
  padding: 20px;
  margin: 0 auto;

  h2 {
    font-size: 3em;
  }

  .allProjects {
    display: grid;
    grid-gap: 5px;

    @media ${device.tablet} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${device.laptop} {
      grid-template-columns: repeat(3, 1fr);
    }

    @media ${device.desktop} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .project_tile {
    border: 1px solid #fff;
    background-color: var(--main-background-color);
    padding: 30px;
    min-height: 300px;
    max-height: 500px;
    display: grid;
    grid-template-rows: 80px 1fr 80px;

    &:hover {
      transform: scale(1.1);
      transition: transform 450ms ease-in-out;
    }

    .project_tile_header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;
      grid-row: 1;

      img {
        width: auto;
        height: 45px;
      }

      .project_urls {
        display: flex;
        a {
          margin: 0 10px;
        }
      }
    }

    .project_description {
      grid-row: 2;

      h5 {
        font-size: 1.4em;
        margin: 0;
      }
    }

    .project_tools {
      grid-row: 3;
      font-size: 0.8em;
      opacity: 0.8;
    }

    @media ${device.laptop} {
      /* max-height: 500px; */
    }
  }
`

const Projects = () => {
  return (
    <ProjectWrapper>
      <h2 id="projects">Projects</h2>
      <StaticQuery
        query={graphql`
          query projectData {
            allProjectsDataJson {
              nodes {
                githubURL
                websiteURL
                description
                title
                tools
              }
            }
          }
        `}
        render={data => (
          <div className="allProjects">
            {data.allProjectsDataJson.nodes.map((project, index) => (
              <div className="project_tile" key={index}>
                <div className="project_tile_header">
                  {projectIcon && (
                    <img
                      src={projectIcon}
                      alt="Decorative icon of a computer with less than, slash, and greater than symbols on the monitor"
                    />
                  )}
                  <div className="project_urls">
                    {project.githubURL && (
                      <a
                        href={project.githubURL}
                        aria-label="link to the specific project repository"
                      >
                        <SVGIcon
                          name="github"
                          aria-label="Octocat Icon"
                          width={30}
                        />
                      </a>
                    )}
                    {project.websiteURL && (
                      <a
                        href={project.websiteURL}
                        aria-label="link to project website"
                      >
                        <SVGIcon
                          name="link"
                          aria-label="External link icon"
                          width={35}
                        />
                      </a>
                    )}
                  </div>
                </div>
                <div className="project_description">
                  <h5>{project.title}</h5>
                  <p>{project.description}</p>
                </div>
                <div className="project_tools">
                  <p>{project.tools}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      />
    </ProjectWrapper>
  )
}

export default Projects
