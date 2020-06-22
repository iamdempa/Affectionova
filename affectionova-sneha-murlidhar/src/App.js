import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";

import NavigationBar from "./pages/NavBar";
import HeaderImage from "./pages/HeaderImage";

import Header from "./pages/Header";
import AboutMe from "./pages/AboutMe";

import { ParallaxProvider, Parallax } from "react-scroll-parallax";

const ParallaxImage = () => (
  <Parallax className="custom-class" x={[-50, 0]} tagOuter="figure">
    <Image src={logo} />
  </Parallax>
);

const ParallaxAboutMe = () => (
  <Parallax>
    <AboutMe />
  </Parallax>
);

function App() {
  return (
    <Fragment>
      <Header />
      <AboutMe />
    </Fragment>
  );
}

export default App;
