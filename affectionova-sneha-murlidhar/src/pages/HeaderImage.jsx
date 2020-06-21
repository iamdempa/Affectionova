import React, { Component } from "react";
import { Container, Col, Row } from "react-bootstrap";


class HeaderImage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="header-photo" className="header-text-wrapper">
          <div
            className="img-responsive header"
            src="../images/header2.jpg"
          ></div>
        </div>

        <div className="header-text">
          <div className="row">
            <div className="col-sm-12 col-12 col-md-12">
              <h2>Hi!, I am Sneha :)</h2>
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default HeaderImage;
