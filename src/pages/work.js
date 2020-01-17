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
    let workData = this.props.data.allWorkJson.nodes[0]
    const workItems = workData.work_items.map((item, idx) => (
      <div
        key={idx}
        onClick={this.openModal.bind(this, item)}
        className="work-item"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "100%",
        }}
      ></div>
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
    allWorkJson {
      nodes {
        id
        title
        description
        text
        work_items {
          name
          description
          image
        }
      }
    }
  }
`
