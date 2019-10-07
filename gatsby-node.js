//cant use ES6 import syntax in this file for some reason, so requrie it is
const projectData = require("./src/data/projectsData.json")

exports.createPages = ({ actions }) => {
  const { createPage } = actions
  //setting template
  const projectTemplate = require.resolve(
    "./src/components/templates/project_page_template.js"
  )

  projectData.forEach(project => {
    //use slug for path name
    const path = project.slug
    createPage({
      path,
      component: projectTemplate,
      //pass the path(slug) into context so that it can be used as a prop in the graphQL query inside the project template
      context: {
        project,
        path,
      },
    })
  })
}
