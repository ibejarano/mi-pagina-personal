import React, { Component } from "react"
import { Link } from "gatsby"
import menuIcon from "../../images/menu.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import "./header.css"

class Header extends Component {
  openSidebar() {
    document.getElementById("sidebar").style.display = "block"
  }

  closeSidebar() {
    document.getElementById("sidebar").style.display = "none"
  }
  render() {
    let page = this.props.page
    return this.props.smallScreen ? (
      <div className="sidebar">
        <button onClick={this.openSidebar} className="sidebar-button-off">
          <img src={menuIcon} alt="Menu" className="menu-icon"></img>
        </button>
        <div
          class="sidebar-inner"
          style={{ display: "none" }}
          id="sidebar"
          onClick={this.closeSidebar}
        >
          <button className="sidebar-button-on">
            <img src={menuIcon} alt="Menu" className="menu-icon"></img>
          </button>
          <Link to="/" className="sidebar-link">
            <button className="sidebar-item">Inicio</button>
          </Link>
          <Link to="/work" className="sidebar-link">
            <button className="sidebar-item">Skills</button>
          </Link>
          <Link to="/about" className="sidebar-link">
            <button className="sidebar-item">Proyectos</button>
          </Link>
        </div>
      </div>
    ) : (
      <header className="header">
        <AniLink fade to="/">
          <button className={page === "home" ? "button-active" : "button"}>
            Inicio
          </button>
        </AniLink>
        <AniLink fade to="/work">
          <button className={page === "work" ? "button-active" : "button"}>
            Skills
          </button>
        </AniLink>
        <AniLink fade to="/about">
          <button className={page === "about" ? "button-active" : "button"}>
           Proyectos 
          </button>
        </AniLink>
      </header>
    )
  }
}
export default Header
