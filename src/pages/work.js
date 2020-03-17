import React from "react"
import Layout from "../components/Layout/layout"
import SEO from "../components/seo"

import "../styles/work.css"


function CardWork({work}){
  return(
    <div className={`card-work-container ${work.stack.type}`}>
      <h1 className="card-work-title">{work.name}</h1>
      <p className="card-work-text">{work.description}</p>
      <ul className="card-work-stack">
        {work.stack.techs.map(tech => (<li className="card-work-stack-tech" key={tech}>{tech}</li>))}
      </ul>
      <div className="card-work-links">
        {work.projectUrl === "pendiente"? <a disable>Deploy Pendiente</a>:<a href={work.projectUrl}>Visitar Web</a>}
        {work.sourceUrl === "pendiente"? <a disable>Source Pendiente</a>:<a href={work.sourceUrl}>Source</a>}
      </div>
    </div>
  )
}

export default function WorkPage (props) {

    const workData = props.data.workJson
    const workItems = workData.work_items.map((item, idx) => (
        <CardWork key={idx} work={item} />
    ))

    return (
      <Layout page={"work"}>
        <SEO />
        <div className="work-container">
        <h1 className="work-title">{workData.title}</h1>
        <div className="work-text">{workData.text}</div>
        <div className="card-works-container">{workItems}</div>
        </div>
      </Layout>
    )
}

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
        stack {
          type
          techs
        }
        techDetails
        sourceUrl
        projectUrl
      }
    }
  }
`
