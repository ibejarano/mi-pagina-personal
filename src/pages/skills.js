import React, { Component } from "react"
import Layout from "../components/Layout/layout"

import "../styles/skills.css"
import "../styles/content.css"

class WorkPage extends Component {

  render() {
    let workData = this.props.data.workJson
    const workItems = workData.work_items.map((item, idx) => (
      <div
        key={idx}
        className="work-item"
      >
        <div className="work-item-text">
          <h1>{item.name}</h1>
          <h2>{item.stack.type}</h2>
        </div>
      </div>
    ))

    return (
      <Layout page={"work"}>
        <div className="content-container">
          <div className="skills-frontend">
            <h1>Front End</h1>
            <p>Me gusta realizar páginas web desde cero, recorriendo el proceso de diseño (Figma) hacia el desarrollo. gusta hacer cosas</p>
            <ul>
              <li>HTML</li> 
              <li>CSS</li> 
              <li>Javascript</li> 
              <li>React</li> 
              <li>Next.js</li> 
              <li>Gatsby</li> 
              <li>Material UI</li> 
            </ul>
          </div>
          <div className="skills-backend">
            <h1>Back End</h1>
            <p>Me gusta hacer cosas</p>
            <ul>
              <li>Node.js</li> 
              <li>Express.js</li> 
              <li>MongoDB</li> 
              <li>PostgreSQL</li> 
              <li>GraphQL</li> 
              <li>Prisma</li> 
            </ul>
          </div>
          <div className="skills-varios">
            <h1>Otros</h1>
            <p>Me gusta hacer cosas</p>
            <ul>
              <li>git</li> 
              <li>GitHub</li> 
              <li>Bitbucket</li> 
              <li>Figma</li> 
              <li>Codepen</li> 
              <li>Glitch</li> 
              <li>Heroku</li> 
              <li>Netlify</li> 
            </ul>
          </div>
      </div>
      </Layout>
    )
  }
}
export default WorkPage

export const query = graphql`
  query {
    workJson {
      id
      title
      description
      text
      work_items {
        name
        description
        image
        stack {
          type
        }
        techDetails
      }
    }
  }
`
