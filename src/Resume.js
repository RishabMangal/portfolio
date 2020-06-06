import React, { Component } from "react";
import profilePic from "./logo/profile.jpg";
import cover from "./logo/cover.jpg";
import Skills from "./Skills";
import Intro from "./Intro";
import Education from "./Education";
import Card from "./Card";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Hobbies from "./Hobbies";
import Contact from "./Contact";
import Courses from "./Courses";
class Resume extends Component {
  render() {
    return (
      <div style={{ padding: "0px", margin: "0px",overflowX:"hidden" }}>
        <Navbar></Navbar>
        <div
          id="home"
          className="container-fluid cover"
          style={{ backgroundImage: `url(${cover})`, backgroundPosition: "center", backgroundAttachment: "fixed",backdropFilter:"2" }}
        >
          <Card profilePics={profilePic}></Card>
        </div>
        <Intro></Intro>
        <Education></Education>
        <Skills></Skills>
        <Courses></Courses>
        <Projects></Projects>
        <Hobbies></Hobbies>
        <Contact></Contact>
      </div>
    );
  }
}

export default Resume;
