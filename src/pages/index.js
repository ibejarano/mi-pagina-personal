import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import ModalDialog from "../components/modal-dialog"

class IndexPage extends Component {
  state = {
    modal: { name: "" }
  }

  openModal(e) {
    this.setState({ modal: e })
    document.getElementById("modal").style.display = "block"
  }

  closeModal() {
    document.getElementById("modal").style.display = "none"
  }
  render() {
    const { indexJson } = this.props.data
    const frontendItems = indexJson.frontend.map((item, idx) => (
      <div
        key={idx}
        onClick={this.openModal.bind(this, item)}
        className="home-grid-item"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
        }}
      ></div>
    ))
    const backendItems = indexJson.backend.map((item, idx) => (
      <div
        key={idx}
        onClick={this.openModal.bind(this, item)}
        className="home-grid-item"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "cover",
        }}
      ></div>
    ))
    return (
      <Layout page={"home"}>
        <h1 className="title">{indexJson.title}</h1>
        <div className="home-main">
          <div className="text">{indexJson.text}</div>
          <div className="divider"></div>
          <div className="home-grid-container">
            <h1 className="home-grid-container-title">Front End</h1>
            <div className="home-grid-container-skills">{frontendItems}</div>
            <h1 className="home-grid-container-title">Back End</h1>
            <div className="home-grid-container-skills">{backendItems}</div>
          </div>
        </div>
        <ModalDialog close={this.closeModal} {...this.state} />
      </Layout>
    )
  }
}
export default IndexPage

export const query = graphql`
  query {
    indexJson {
      title
      description
      text
      subtitle
      frontend {
        name
        description
        image
      }
      backend {
        name
        description
        image
      }
    }
  }
`
