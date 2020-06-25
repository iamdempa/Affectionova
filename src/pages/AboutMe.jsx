import React, { useState, useEffect } from "react";
import aboutme from "../assets/images/aboutme.jpg";
import photo from "../assets/images/aboutme.jpg";

import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

import ScrollAnimation from "react-animate-on-scroll";

function AboutMe() {
  return (
    //<Jumbotron fluid className="about-me-jumbotron shadow text-center">
    <Container fluid className="about-me-container text-center">
      <Row>
        <Col>
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce={true}            
            animatePreScroll={false}
          >
            <h1 className="about-me-name ">ABOUT ME</h1>
          </ScrollAnimation>

          <ScrollAnimation
            animateIn="fadeInRight"
            
            animatePreScroll={false}
          >
            <hr className="hr-about-me" />
          </ScrollAnimation>
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
        {/* <Plx parallaxData={moveAboutMeDescription}> */}
        <ScrollAnimation
          animateIn="fadeInLeft"
          // duration={3}
          animatePreScroll={false}
        >
          <div>
            <p className="about-me-description text-center">
              I'm Sneha, a Fashion Designing and Textile Final year
              undergraduate at AOD (Academy Of Design) Experienced at working as
              a Fashion designing intern at ODEL for 3 months also have worked
              as a translator for WHO (World Health Organisation).
            </p>
          </div>
        </ScrollAnimation>

        {/* </Plx> */}
      </Row>
      <hr className="about-me-footer-hr" />
      <Row className="about-me-footer">
        <Col>
          {/* <Plx parallaxData={moveAboutMeFooterName}> */}

          <ScrollAnimation
            animateIn="fadeInRight"
            // duration={2}
            animatePreScroll={false}
          >
            <p className="about-me-footer-name">
              Sneha Murlidhar{" "}
              <span className="about-me-footer-designation">
                | Undergraduate Student (AOD)
              </span>
            </p>
          </ScrollAnimation>

          {/* </Plx> */}
        </Col>
      </Row>
    </Container>
    //</Jumbotron>
  );
}

export default AboutMe;
