import React, { Component } from "react"

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <a href="https://simplecode.io" className="footer-text">
          © {new Date().getFullYear()}
          {` `} Ignacio Bejarano.
        </a>
      </footer>
    )
  }
}
export default Footer
