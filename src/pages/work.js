import React from "react"
import Layout from "../components/Layout/layout"

import "../styles/work.css"

export default function WorkPage (props) {

    const workData = props.data.workJson
    const workItems = workData.work_items.map((item, idx) => (
      <div
        key={idx}
        className="work-item"
      >
        <div className="work-item-text">
          <h1>{item.name}</h1>
          <h2>{item.stack.type}</h2>
        </div>
        <div className="work-item-techs">
          {item.stack.techImage.map((tech, idx) => (
            <img className="work-item-tech-item" src={`images/${tech}.svg`}/>
          ))}
        </div>
      </div>
    ))

    return (
      <Layout page={"work"}>
        <div className="work-container">
        <h1 className="work-title">{workData.title}</h1>
        <div className="work-text">{workData.text}</div>
        <div className="work-cards">{workItems}</div>
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
        image
        stack {
          type
          techImage
        }
        techDetails
      }
    }
  }
`
