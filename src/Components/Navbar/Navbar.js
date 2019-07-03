import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import './navbar.css'
export class Navbar extends Component {
  handleClick = e => {
    const { linkDisabled } = this.state;
    if (linkDisabled) e.preventDefault();
  };
  render() {
    let pagetwolink;
    let status = sessionStorage.getItem("navbar_status");
    if (status == "true") {
      pagetwolink = (
        <li class="nav-item">
        <a class="nav-link" href="#">
          <Link to="/Pagetwo">Page Two</Link>
        </a>
      </li>
      );
    } else {
      pagetwolink = (
        <li class="nav-item">
        <a class="nav-link" href="#">
          <Link to="/Pagetwo" onClick={e => e.preventDefault()}>Page Two</Link>
        </a>
      </li>
      );
    }
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <a class="navbar-brand" href="#">
          <Link to="/">
            Home
            </Link>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon" />
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto nav">
              {/* <li class="nav-item active">
                <a class="nav-link" href="#">
                  <Link to="/">
                    Home <span class="sr-only">(current)</span>
                  </Link>
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/Pageone">Page One</Link>
                </a>
              </li>

              {/* {pagetwolink} */}
              {/* <li class="nav-item">
                <a class="nav-link" href="#">
                <NavLink 
            onClick={this.handleClick} 
            className="nav-link" 
            to="/pages"
        >
            ...
        </NavLink>
                </a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Link to="/Pagetwo">Page Two</Link>
                </a>
              </li>
              {/* {pagetwolink} */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
