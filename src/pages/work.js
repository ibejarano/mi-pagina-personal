import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import ModalDialog from "../components/modal-dialog"

import "../styles/work.css"

class WorkPage extends Component {
  state = {
    modal: { name: "" },
  }

  openModal(e) {
    this.setState({ modal: e })
    document.getElementById("modal").style.display = "block"
  }

  closeModal() {
    document.getElementById("modal").style.display = "none"
  }

  render() {
    let workData = this.props.data.workJson
    const workItems = workData.work_items.map((item, idx) => (
      <div
        key={idx}
        onClick={this.openModal.bind(this, item)}
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
        <h1 className="title">{workData.title}</h1>
        <div className="text">{workData.text}</div>
        <div className="work-container">{workItems}</div>
        <ModalDialog close={this.closeModal} {...this.state} />
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
          techImage
        }
      }
    }
  }
`
