import React, { useState, useEffect } from "react";
import aboutme from "../assets/images/aboutme.jpg";
import photo from "../assets/images/aboutme.jpg";

import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { useSpring, animated } from "react-spring";

function AboutMe() {
  const [isLoaded, setLoaded] = useState(false);
  const [{ param }, set] = useSpring(() => ({ param: 0 }));

  const onScroll = () => {
    let ratio = window.scrollY / window.innerHeight;
    ratio = ratio > 1 ? 1 : ratio;

    set({
      param: ratio,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    // fetch({ photo }).then((pr) => {
    //   setLoaded(true);
    // });
    setLoaded(true);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Jumbotron fluid className=" about-me-jumbotron shadow text-center">
      <Container>
        <Row>
          <Col>
            {isLoaded ? (
              <animated.h1
                className="about-me-name "
                style={{
                  opacity: param.interpolate({
                    range: [0, 0.5, 0.75, 1],
                    output: [0, 0.5, 0.75, 1],
                  }),
                  transform: param
                    .interpolate({
                      range: [0, 0.5, 1],
                      output: [200, 20, -10],
                    })
                    .interpolate((x) => `translateY(${x}px)`),
                }}
              >
                ABOUT ME
              </animated.h1>
            ) : (
              <span />
            )}
            {/* <h1 className="about-me-name ">ABOUT ME</h1> */}
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
          {isLoaded ? (
            <animated.p
              className="about-me-description text-center"
              style={{
                opacity: param.interpolate({
                  range: [0, 0.5, 0.75, 1],
                  output: [0, 0.5, 0.75, 1],
                }),
                transform: param
                  .interpolate({
                    range: [0, 0.5, 1],
                    output: [-150, -35, 0],
                  })
                  .interpolate((x) => `translateX(${x}px)`),
              }}
            >
              I'm Sneha, a Fashion Designing and Textile Final year
              undergraduate at AOD (Academy Of Design) Experienced at working as
              a Fashion designing intern at ODEL for 3 months also have worked
              as a translator for WHO (World Health Organisation).
            </animated.p>
          ) : (
            <span />
          )}
        </Row>
        <hr className="about-me-footer-hr" />
        <Row className="about-me-footer">
          <Col>
            <h5>
              {isLoaded ? (
                <animated.div
                  style={{
                    opacity: param.interpolate({
                      range: [0, 0.5, 0.75, 1],
                      output: [0, 0.5, 0.75, 1],
                    }),
                    transform: param
                      .interpolate({
                        range: [0, 0.5, 1],
                        output: [450, 55, 0],
                      })
                      .interpolate((x) => `translateX(${x}px)`),
                  }}
                >
                  <p className="about-me-footer-name">
                    Sneha Murlidhar{" "}
                    <span className="about-me-footer-designation">
                      | Undergraduate Student (AOD)
                    </span>
                  </p>
                </animated.div>
              ) : (
                <span />
              )}
            </h5>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default AboutMe;
