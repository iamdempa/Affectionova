import React, { Component, Fragment } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <Fragment>
        <header id="home" className="text-center">
          <nav id="nav-wrap">
            <ul id="nav" className="nav">
              <Container>
                <li className="current">
                  <a className="smoothscroll" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#about">
                    Little do you know
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#resume">
                    My Work
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#portfolio">
                    Resume
                  </a>
                </li>
                <li>
                  <a className="smoothscroll" href="#contact">
                    Connect with me
                  </a>
                </li>
              </Container>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <hr />
              <h1 className="responsive-headline">{name}</h1>

              <h3>{description}</h3>
              <hr />
              <p style={{ color: "white", fontSize: 16 }}>Let's talk</p>
              <ul className="social">{networks}</ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about">
              <i className="icon-down-circle"></i>
            </a>
          </p>
        </header>
      </Fragment>
    );
  }
}

export default Header;
