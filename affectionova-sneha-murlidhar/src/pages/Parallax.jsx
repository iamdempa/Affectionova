import React, { Component } from "react";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";

import AboutMe from "./AboutMe";
import PhotoGallery from "./PhotoGallery";

class ParallaxDemp extends Component {
  render() {
    return (
      <div>
        <Parallax
          pages={2}
          scrolling={true}
          ref={(ref) => (this.parallax = ref)}
        >
          <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 1 }}>
            <AboutMe />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}

export default ParallaxDemp;
