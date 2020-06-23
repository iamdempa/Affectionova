import React from "react";

import { Container, Col, Row, Image } from "react-bootstrap";

import Tilt from "react-tilt";

function PhotoGallery() {
  const photos1 = ["1", "2", "3"];
  const photos2 = ["1"];
  const photos3 = ["1", "2", "3", "1", "2", "3"];

  return (
    <Container>
      <Row>
        <Col>
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
              className="photo-gallery-big-photo img-fluid "
              src="https://via.placeholder.com/1500"
              thumbnail
            />
          </Tilt>
        </Col>
        <Col>
          <Row className="photos-1-row">
            {photos1.map(function (item, i) {
              console.log("test");
              return (
                <Col>
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
                </Col>
              );
            })}
          </Row>
          <Row className="photos-2-row">
            {photos2.map(function (item, i) {
              console.log("test");
              return (
                <Col>
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
                </Col>
              );
            })}
          </Row>
          <Row className="photos-3-row">
            {photos3.map(function (item, i) {
              console.log("test");
              return (
                <Col>
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
