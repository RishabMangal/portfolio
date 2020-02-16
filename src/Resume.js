import React, { Component } from "react";
import "./resume.css";
import profilePic from "./profile.jpg";
import cover from "./cover.jpg";
import Skills from "./Skills";
import Intro from "./Intro";
import Education from "./Education";
import Card from "./Card";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
class Resume extends Component {
  render() {
    return (
      <div style={{ padding: "0px", margin: "0px" }}>
        <Navbar></Navbar>
        <div
          id="home"
          className="container-fluid cover"
          style={{  backgroundImage: `url(${cover})`}}
        >
          <Card profilePics={profilePic}></Card>
        </div>
        <Intro></Intro>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Hobbies></Hobbies>
        <Contact></Contact>
      </div>
    );
  }
}

export default Resume;
