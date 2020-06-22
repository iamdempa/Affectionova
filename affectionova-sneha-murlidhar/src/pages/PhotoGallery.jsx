import React, { Component } from "react";

import { Container, Col, Row, Image } from "react-bootstrap";

const photos1 = ["1", "2", "3"];
const photos2 = ["1"];
const photos3 = ["1", "2", "3", "1", "2", "3"];


class PhotoGallery extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Image
              className="photo-gallery-big-photo img-fluid "
              src="https://via.placeholder.com/1500"
              thumbnail
            />
          </Col>
          <Col>
            <Row className="photos-1-row">
              {photos1.map(function (item, i) {
                console.log("test");
                return (
                  <Col>
                    <Image
                      className="photos1 img-fluid"
                      src="https://via.placeholder.com/1500"
                      thumbnail
                    />
                  </Col>
                );
              })}
            </Row>
            <Row className="photos-2-row">
            {photos2.map(function (item, i) {
                console.log("test");
                return (
                  <Col>
                    <Image
                      className="photos2 img-fluid"
                      src="https://via.placeholder.com/2500x1700"
                      thumbnail
                    />
                  </Col>
                );
              })}
            </Row>
            <Row className="photos-3-row">
            {photos3.map(function (item, i) {
                console.log("test");
                return (
                  <Col>
                    <Image
                      className="photos3 img-fluid"
                      src="https://via.placeholder.com/2500"
                      thumbnail
                    />
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PhotoGallery;
