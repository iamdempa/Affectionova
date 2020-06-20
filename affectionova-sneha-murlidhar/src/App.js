import React, { Component, Fragment } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

import ReactGA from 'react-ga';
import $ from 'jquery';

import NavBar from "./pages/Header";
import Parallax from "./pages/Parralax"


class HomePage extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className="App">
        <NavBar data={this.state.resumeData.main}/>  
        <Parallax/>
      </div>
    );
  }
  
}

export default HomePage;
