import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <div>
            <a href="#home">Rishab Mangal</a>
            <button id="button"> ☰ </button>
          </div>
          <li className="">
            <a href="#education">Education</a>
          </li>
          <li className="">
            <a href="#skills">Skills</a>
          </li>
          <li className="">
            <a href="#projects">Projects</a>
          </li>
          <li className="">
            <a href="#hobbies">Hobbies</a>
          </li>
          <li className="">
            <a href="#contact">Contact</a>
          </li>
          <li className="download">
            <a href="https://rishus-apis.herokuapp.com/mycv">DownloadCV</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
