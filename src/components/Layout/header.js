import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./header.css"

class Header extends Component {
  render() {
    let page = this.props.page
    return this.props.smallScreen ? (
      <div>None</div>
    ) : (
      <header className="header">
        <AniLink fade to="/">
          <button className={page === "home" ? "button-active" : "button"}>
            Inicio
          </button>
        </AniLink>
        <AniLink fade to="/skills">
          <button className={page === "work" ? "button-active" : "button"}>
            Skills
          </button>
        </AniLink>
        <AniLink fade to="/work">
          <button className={page === "about" ? "button-active" : "button"}>
           Proyectos 
          </button>
        </AniLink>
      </header>
    )
  }
}
export default Header
