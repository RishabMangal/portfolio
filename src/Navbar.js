import React from 'react'
import './resume.css'
function Navbar() {
    return (
        <div>
            <div
                className="header navbar navbar-expand-sm fixed-top mr-auto "
                role="navigation"
                style={{ backgroundColor: "#f1f1f100" }}
            >
                <h4
                    className="navbar-brand text-secondary lead font-weight-normal nav-link"
                    style={{ fontFamily: "comic sans ms", fontSize: "1.35vw" }}
                >
                    <a href="/" className="text-secondary">
                        Rishab Mangal
            </a>
                </h4>
                <ul
                    className="navbar-nav mr-auto m-1"
                    style={{ position: "absolute", right: "0px" }}
                >
                    <li className="nav-item px-3">
                        <a
                            href="#education"
                            className="navlink text-secondary"
                            style={{ textDecoration: "none" }}
                        >
                            Education
              </a>
                    </li>
                    <li className="nav-item px-3">
                        <a
                            href="#skills"
                            className="navlink text-secondary"
                            style={{ textDecoration: "none" }}
                        >
                            Skills
              </a>
                    </li>
                    <li className="nav-item px-3">
                        <a
                            href="#projects"
                            className="navlink text-secondary"
                            style={{ textDecoration: "none" }}
                        >
                            Projects
              </a>
                    </li>
                    <li className="nav-item px-3">
                        <a
                            href="#hobbies"
                            className="navlink text-secondary"
                            style={{ textDecoration: "none" }}
                        >
                            Hobbies
              </a>
                    </li>
                    <li className="nav-item px-3">
                        <a
                            href="#contact"
                            className="navlink text-secondary"
                            style={{ textDecoration: "none" }}
                        >
                            Contact
              </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
