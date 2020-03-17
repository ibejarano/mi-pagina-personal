import React, { Component } from "react"
import Layout from "../components/Layout/layout"

import "../styles/skills.css"

class WorkPage extends Component {

  render() {

    return (
      <Layout page={"skills"}>
        <div className="skills-container">
            <h1 className="frontend-head">Front End</h1>
            <p className="frontend-text">Realizo páginas web desde cero, recorriendo el proceso de diseño (Figma) hacia el desarrollo. gusta hacer cosas</p>
            <ul className="frontend-techs">
              <li>HTML</li> 
              <li>CSS</li> 
              <li>Javascript</li> 
              <li>React</li> 
              <li>Next.js</li> 
              <li>Gatsby</li> 
              <li>Material UI</li> 
            </ul>
          <div className="skill-section-container separator">
          </div>
            <h1 className="backend-head">Back End</h1>
            <p className="backend-text">Priorizo el rendimiento y una buena arquitectura.</p>
            <ul className="backend-techs">
              <li>Node.js</li> 
              <li>Express.js</li> 
              <li>MongoDB</li> 
              <li>PostgreSQL</li> 
              <li>GraphQL</li> 
              <li>Prisma</li> 
            </ul>
          <div className="skill-section-container separator-2">
          </div>
            <h1 className="varios-head">Otros</h1>
            <p className="varios-text">A continuación se listan algunas de las herramientas necesarias para el proceso de desarrollo, diseño y deploy</p>
            <ul className="varios-techs">
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
      </Layout>
    )
  }
}

export default WorkPage
