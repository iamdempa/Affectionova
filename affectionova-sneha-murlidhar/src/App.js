import React, { Fragment } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";

import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";
import PhotoGallery from "./pages/PhotoGallery";


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
      <br/>
      <AboutMe />


      <PhotoGallery />
    </animated.div>
  );
}

export default App;
