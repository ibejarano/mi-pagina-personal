import React, { Component } from "react"
import Layout from "../components/Layout/layout"

import "../styles/skills.css"

class WorkPage extends Component {
  render() {
    return (
      <Layout page={"skills"}>
        <div className="skills-container">
          <div className="skill-section">
            <h1>Front End</h1>
            <p>
              Realizo páginas web desde cero, recorriendo el proceso de diseño
              (Figma) hacia el desarrollo. gusta hacer cosas
            </p>
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
          <div className="skill-section">
            <h1>Back End</h1>
            <p>Priorizo el rendimiento y una buena arquitectura.</p>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>PostgreSQL</li>
              <li>GraphQL</li>
              <li>Prisma</li>
            </ul>
          </div>
          <div className="skill-section">
            <h1>Otros</h1>
            <p>
              A continuación se listan algunas de las herramientas necesarias
              para el proceso de desarrollo, diseño y deploy
            </p>
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
