import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h2>Logo</h2>
        <ul className="nav-items">
          <li>Main</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
