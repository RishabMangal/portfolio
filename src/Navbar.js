import React from "react";

function Navbar() {
  return (
    <div>
      <div
        className="header navbar navbar-expand-sm mr-auto "
        role="navigation"
        style={{
          backgroundColor: "#00000010",
        }}
      >
        <h4
          className="navbar-brand text-secondary lead font-weight-normal nav-link"
          style={{
            fontFamily: "comic sans ms",
            fontSize: "26px",
          }}
        >
          <a href="#home" className="text-secondary">
            Rishab Mangal
          </a>
        </h4>
        <div
          className=""
          style={{
            marginLeft: "45%",
          }}
        >
          <ul className="navbar-nav mr-auto m-1">
            <li className="nav-item px-3">
              <a
                href="#education"
                className="navlink text-secondary"
                style={{
                  textDecoration: "none",
                }}
              >
                Education
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                href="#skills"
                className="navlink text-secondary"
                style={{
                  textDecoration: "none",
                }}
              >
                Skills
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                href="#projects"
                className="navlink text-secondary"
                style={{
                  textDecoration: "none",
                }}
              >
                Projects
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                href="#hobbies"
                className="navlink text-secondary"
                style={{
                  textDecoration: "none",
                }}
              >
                Hobbies
              </a>
            </li>
            <li className="nav-item px-3">
              <a
                href="#contact"
                className="navlink text-secondary"
                style={{
                  textDecoration: "none",
                }}
              >
                Contact
              </a>
            </li>
            <li className="pt-0">
              <a
                href="https://rishus-apis.herokuapp.com/mycv"
                className="navlink"
              >
                <button className="btn download"> Download CV </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
