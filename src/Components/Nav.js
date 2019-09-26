import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <i className="material-icons Nav--icon">code</i>
        <p className="Nav--text"> Blog </p>
      </nav>
    );
  }
}

export default Nav;
