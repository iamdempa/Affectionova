import React, { useState, useEffect } from "react";
import aboutme from "../assets/images/aboutme.jpg";
import photo from "../assets/images/aboutme.jpg";

import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import Plx from "react-plx";

const moveAboutMe = [
  {
    start: "self",
    end: 450,

    properties: [
      {
        startValue: 200,
        endValue: 0,
        property: "translateY",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      }
    ],
  },
];

const moveAboutMeDescription = [
  {
    start: "self",
    end: 550,

    properties: [
      {
        startValue: -200,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      }
    ],
  },
];

const moveAboutMeFooterName = [
  {
    start: 250,
    end: 600,
    properties: [
      {
        startValue: 300,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      }
    ],
  },
];

function AboutMe() {
  return (
    //<Jumbotron fluid className="about-me-jumbotron shadow text-center">
    <Container className="about-me-container text-center">
      <Row>
        <Col>
          <Plx parallaxData={moveAboutMe}>
            <h1 className="about-me-name ">ABOUT ME</h1>
          </Plx>

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
        <Plx parallaxData={moveAboutMeDescription}>
          <p className="about-me-description text-center">
            I'm Sneha, a Fashion Designing and Textile Final year undergraduate
            at AOD (Academy Of Design) Experienced at working as a Fashion
            designing intern at ODEL for 3 months also have worked as a
            translator for WHO (World Health Organisation).
          </p>
        </Plx>
      </Row>
      <hr className="about-me-footer-hr" />
      <Row className="about-me-footer">
        <Col>
          <Plx parallaxData={moveAboutMeFooterName}>
            <h5>
              <p className="about-me-footer-name">
                Sneha Murlidhar{" "}
                <span className="about-me-footer-designation">
                  | Undergraduate Student (AOD)
                </span>
              </p>
            </h5>
          </Plx>
        </Col>
      </Row>
    </Container>
    //</Jumbotron>
  );
}

export default AboutMe;
