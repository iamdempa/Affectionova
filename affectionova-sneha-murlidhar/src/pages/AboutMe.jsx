import React, { Component } from "react";
import aboutme from "../assets/images/aboutme.jpg";

import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

class AboutMe extends Component {
  render() {
    return (
      <Jumbotron fluid className=" about-me-jumbotron shadow text-center">
        <Container>
          <Row>
            <Col>
              <h1 className="about-me-name ">ABOUT ME</h1>
              <hr className="hr-about-me" />
            </Col>
          </Row>
          <Row>
            <Col>
              <Image
                src={aboutme}
                className="about-me-image"
                roundedCircle
                thumbnail
              />
            </Col>
          </Row>

          <Row className="text-center">
            <p className="about-me-description text-center">
              I'm Sneha, a Fashion Designing and Textile Final year
              undergraduate at AOD (Academy Of Design) Experienced at working as
              a Fashion designing intern at ODEL for 3 months also have worked
              as a translator for WHO (World Health Organisation).
            </p>
          </Row>
          <hr className="about-me-footer-hr"/>
          <Row className="about-me-footer">
            <Col>
              <h5>
                <span className="about-me-footer-name">Sneha Murlidhar</span>{" "}
                <span className="about-me-footer-designation">
                | Undergraduate Student (AOD)
                </span>
              </h5>
            </Col>
          </Row>
        </Container>
      </Jumbotron>
    );
  }
}

export default AboutMe;
