import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import "./navbar.scss";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand href="#home">TAPESTRY POOLING</Navbar.Brand>
        {/* <Navbar.Toggle /> */}
        <ul className="navbar-nav ml-auto">
          <li>
            <a className="nav-link"> Develop using our Algorithm</a>
          </li>
          <li>
            <a className="nav-link" href="#">Contact us</a>
          </li>
          <li>
            <a className="nav-link" href="#">Visit Website</a>
          </li>
        </ul>
      </Navbar>
    );
  }
}
export default NavBar;
