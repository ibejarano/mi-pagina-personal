import React, { Component } from "react"
import Layout from "../components/Layout/layout"

class IndexPage extends Component {

  render() {
    const { indexJson } = this.props.data

    return (
      <Layout page={"home"}>
        <h1 className="title">{indexJson.title}</h1>
        <h3 className="subtitle">{indexJson.text}</h3>
        <img src={indexJson.data[0].image} />
        <img src={indexJson.data[1].image} />
      </Layout>
    )
  }
}
export default IndexPage

export const query = graphql`
  query {
    indexJson {
      title
      text
      subtitle
      data {
        name
        image
      }
    }
  }
`
