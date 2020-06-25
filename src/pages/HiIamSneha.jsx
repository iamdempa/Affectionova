import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import '../node_modules/font-awesome/css/font-awesome.min.css';
import "../../node_modules/font-awesome/css/font-awesome.min.css";

import { Button } from "react-bootstrap";
import { FaAngleDoubleDown } from "react-icons/fa";

class HiIamSneha extends Component {
  scrollToAboutMe() {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center  ">
                <hr className="hr style-two" />
                <h2 className="font-weight-light">Hi!, I am Sneha :)</h2>
                <p className="welcome-you-to-my">
                  Welcome you to my design portfolio. Showering your days with
                  the new Insipration Designs and Ideas...
                </p>
                <hr className="hr-2 style11" />
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-md-12 col-sm-12 col-xs-12 text-center">
                      <h3 className="connect-with-me">Connect with me</h3>
                    </div>
                  </div>
                  <div className="row ">
                    <div className="col-12 col-md-12 col-sm-12 col-xs-12 text-center ">
                      <a href="https://www.instagram.com/yue_sneha/">
                        <span className="effect7">
                          <i className="fa fa-instagram"></i>
                        </span>
                      </a>
                      <a href="https://twitter.com/SnehaMurlidhar">
                        <span className="effect7">
                          <i className="fa fa-twitter "></i>
                        </span>
                      </a>
                      <a href="https://www.facebook.com/sneha.murlidhar.1">
                        <span className="effect7">
                          <i className="fa fa-facebook "></i>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div style={{ marginTop: 50 }}>
                  <Button
                    variant="outline-light"
                    onClick={this.scrollToAboutMe}
                  >
                    <FaAngleDoubleDown />
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default HiIamSneha;
