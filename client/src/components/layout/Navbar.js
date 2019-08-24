import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="col s5 brand-logo center black-text"
            >
              <i className="material-icons">code</i>
              MERN
            </Link>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/list" className="navbar-brand">apParently</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/list" className="nav-link">Baby Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Add Baby</Link>
          </li>
        </ul>
        </div>
      </nav>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
