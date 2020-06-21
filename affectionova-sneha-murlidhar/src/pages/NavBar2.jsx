import React, { Component } from "react";

class NavBar2 extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top bg-transparent ">
          <div className="container">
            {/* <a className="navbar-brand" href="#">
              Sneha Murlidhar
            </a> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarResponsive">
              <ul className="navbar-nav mx-auto justify-content-center" id="nav-items">
                <li className="nav-item active">
                  <a className="nav-link" href="#">
                    HOME
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    LITTLE DO YOU KNOW
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    MY WORK
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    RESUME
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar2;
