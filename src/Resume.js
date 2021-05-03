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
import CardFooter from "./CardFooter";
import WorkList from "./WorkList";
import MobileNav from "./MobileNav";
import { isBrowser } from "react-device-detect";
class Resume extends Component {
  render() {
    return (
      <div id="home">
        {isBrowser ? <Navbar></Navbar> : <MobileNav></MobileNav>}
        <Card profilePics={profilePic} cover={cover}></Card>
        <CardFooter></CardFooter>
        <Intro></Intro>
        <Education></Education>
        <Skills></Skills>
        <Courses></Courses>
        <Projects></Projects>
        <WorkList></WorkList>
        <Hobbies></Hobbies>
        <Contact></Contact>
      </div>
    );
  }
}

export default Resume;
