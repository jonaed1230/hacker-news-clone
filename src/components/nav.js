import React, { Component } from "react";
import logo from "./images/y18.gif";
import { Link } from "react-router-dom";
class nav extends Component {
  render() {
    return (
      <div className="container nav">
        <ul>
          <li className="logo">
            <Link to="#">
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li className="logo-text">
            <Link to="#">
              <strong>Hacker News</strong>
            </Link>
          </li>
          <ul className="page-links">
            <li className="page-link">
              <Link to="#">new</Link>
            </li>
            <li className="page-link">
              <Link to="#">past</Link>
            </li>
            <li className="page-link">
              <Link to="#">comments</Link>
            </li>
            <li className="page-link">
              <Link to="#">ask</Link>
            </li>
            <li className="page-link">
              <Link to="#">show</Link>
            </li>
            <li className="page-link">
              <Link to="#">jobs</Link>
            </li>
            <li className="page-link">
              <Link to="#">submit</Link>
            </li>
          </ul>
        </ul>
        <ul className="login-link">
          <li>
            <Link to="#">login</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default nav;
