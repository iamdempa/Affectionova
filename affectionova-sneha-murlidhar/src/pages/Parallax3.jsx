import React, { Component } from "react";
import photo from "../assets/images/aboutme.jpg";

import ScrollAnimation from "react-animate-on-scroll";

class Parallax3 extends Component {
  render() {
    return (
      <ScrollAnimation
        animateIn="fadeInDown"
        offset={3000}
      >
        <img src={photo} style={{height: 100, width: 100}}/>
      </ScrollAnimation>
    );
  }
}

export default Parallax3;
