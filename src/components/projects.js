import React, { useLayoutEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const ProjectWrapper = styled.section`
  width: 100%;
  grid-row: 2;
  padding: 50px;
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
                description
                title
                tools
                websiteURL
              }
            }
          }
        `}
        render={data => (
          <div className="project_tiles">
            {data.allProjectsDataJson.nodes.map((project, index) => (
              <p key={index}>{project.title}</p>
            ))}
          </div>
        )}
      />
    </ProjectWrapper>
  )
}

export default Projects
