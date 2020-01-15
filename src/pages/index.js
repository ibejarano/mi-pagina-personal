import React, { Component } from "react"
import Layout from "../components/Layout/layout"
import ModalDialog from '../components/modal-dialog'

class IndexPage extends Component {
  state = {
    smallScreen: false,
    modal: { name: "" },
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  resize() {
    this.setState({ smallScreen: window.innerWidth <= 840 })
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
    const homeItems = indexJson.home_items.map((item, idx) => (
      <div
        key={idx}
        onClick={this.openModal.bind(this, item)}
        className={
          this.state.smallScreen ? "grid-item-small" : "home-grid-item"
        }
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundSize: "100%",
        }}
      ></div>
    ))
    return (
      <Layout page={"home"}>
        <h1 className="title">{indexJson.title}</h1>
        <div className="home-main">
          <div className="text">{indexJson.text}</div>
          <div className="divider"></div>
          <h2 className="subtitle">{indexJson.subtitle}</h2>
          <div
            className={
              this.state.smallScreen
                ? "grid-container-small"
                : "home-grid-container"
            }
          >
            {homeItems}
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
      home_items {
        name
        description
        image
      }
    }
  }
`
