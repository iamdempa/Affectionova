import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";
// import "animate.css/animate.min.css";

import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import PhotoGallery from "./pages/PhotoGallery";
import CarouselPhotos from "./pages/Carousel";
import P3 from "./pages/Parallax3";

import { useSpring, animated } from "react-spring";

function App() {
  const fade = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <animated.div style={fade}>
      <Header />
      <AboutMe />
      <PhotoGallery />
      <CarouselPhotos />
    </animated.div>
  );
}

export default App;
