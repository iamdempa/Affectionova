import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/custom.css";

import NavigationBar from "./pages/NavBar";
import HeaderImage from "./pages/HeaderImage";

import Header from "./pages/Header";

function App() {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}

export default App;
