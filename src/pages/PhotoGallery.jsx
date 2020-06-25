import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";

import Tilt from "react-tilt";
import Plx from "react-plx";

import { Bounce } from "react-awesome-reveal";
import ScrollAnimation from "react-animate-on-scroll";

const moveLeftPhoto = [
  {
    start: "self",
    end: 700,

    properties: [
      {
        startValue: -300,
        endValue: 0,
        property: "translateX",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
];
const movePhoto1 = [
  {
    start: "self",
    end: 750,
    easing: "ease",
    properties: [
      {
        startValue: 0.1,
        endValue: 1,
        property: "scale",
      },
      {
        startValue: 0,
        endValue: 1,
        property: "opacity",
      },
    ],
  },
];

function PhotoGallery() {
  const photos1 = ["1", "2", "3"];
  const photos2 = ["1"];
  const photos3 = ["1", "2"];

  return (
    <Container className="photo-gallery-container">
      <Row>
        <Col className="col-xs-6">
          <ScrollAnimation animateIn="zoomIn" duration={2}>
            <Tilt
              className="Tilt"
              options={{
                max: 25,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                speed: 3000,
                transition: true,
                scale: 1,
              }}
            >
              {/* <Plx parallaxData={moveLeftPhoto}> */}
              <Image
                className="photo-gallery-big-photo img-fluid "
                src="https://via.placeholder.com/1500"
                thumbnail
              />
              {/* </Plx> */}
            </Tilt>
          </ScrollAnimation>
        </Col>
        <Col>
          <Row className="photos-1-row">
            {photos1.map(function (item, i) {
              console.log("test");
              return (
                <Col className="col-xs-4">
                  <ScrollAnimation animateIn="fadeInDown" duration={1.5}>
                    {/* <Plx parallaxData={movePhoto1}> */}
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 45,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                        speed: 5000,
                        transition: true,
                        scale: 1,
                      }}
                    >
                      <Image
                        className="photos1 img-fluid"
                        src="https://via.placeholder.com/1500"
                        thumbnail
                      />
                    </Tilt>
                    {/* </Plx> */}
                  </ScrollAnimation>
                </Col>
              );
            })}
          </Row>
          <Row className="photos-2-row">
            {photos2.map(function (item, i) {
              console.log("test");
              return (
                <Col className="col-xs-12">
                  <ScrollAnimation animateIn="fadeInUp" duration={1.5}>
                    <Tilt
                      className="Tilt"
                      options={{
                        max: 25,
                        easing: "cubic-bezier(.03,.98,.52,.99)",
                        speed: 3000,
                        transition: true,
                        scale: 1,
                      }}
                    >
                      <Image
                        className="photos2 img-fluid"
                        src="https://via.placeholder.com/2500x1700"
                        thumbnail
                      />
                    </Tilt>
                  </ScrollAnimation>
                </Col>
              );
            })}
          </Row>
          <Row className="photos-3-row">
            {photos3.map(function (item, i) {
              console.log("test");
              return (
                <Col className="col-sm-6 col-xs-12">
                  <Tilt
                    className="Tilt"
                    options={{
                      max: 55,
                      easing: "cubic-bezier(.03,.98,.52,.99)",
                      speed: 5000,
                      transition: true,
                      scale: 1,
                    }}
                  >
                    <Image
                      className="photos3 img-fluid"
                      src="https://via.placeholder.com/2500"
                      thumbnail
                    />
                  </Tilt>
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default PhotoGallery;
