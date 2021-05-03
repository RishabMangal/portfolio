import React, { useState } from "react";
import {
  faSmileWink,
  faBookOpen,
  faThumbsUp,
  faCogs,
  faDownload,
  faAddressBook,
  faLaptopHouse,
  faTasks,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { CSSTransition } from "react-transition-group";
var reactFontawesome = require("@fortawesome/react-fontawesome");

const MobileNav = () => {
  const [toggle, setToggle] = useState(false);

  const scrolltoId = (id) => {
    setToggle(false);
    let element = document.getElementById(id);
    const offset = 60;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  const menuItems = [
    // {
    //   title: "Rishab Mangal",
    //   icon: faSmileWink,
    //   isAuth: true,
    //   onClick: () => scrolltoId("home"),
    // },
    {
      title: "Education",
      icon: faGraduationCap,
      isAuth: true,
      onClick: () => scrolltoId("education"),
    },
    {
      title: "Skills",
      icon: faCogs,
      isAuth: true,
      onClick: () => scrolltoId("skills"),
    },
    {
      title: "Courses",
      icon: faBookOpen,
      isAuth: true,
      onClick: () => scrolltoId("courses"),
    },
    {
      title: "Projects",
      icon: faTasks,
      isAuth: true,
      onClick: () => scrolltoId("projects"),
    },
    {
      title: "Work Experience",
      icon: faLaptopHouse,
      isAuth: true,
      onClick: () => scrolltoId("work-experience"),
    },
    {
      title: "Hobbies",
      icon: faThumbsUp,
      isAuth: true,
      onClick: () => scrolltoId("hobbies"),
    },
    {
      title: "Contact Me",
      icon: faAddressBook,
      isAuth: true,
      onClick: () => scrolltoId("contact"),
    },
    {
      title: "My CV",
      icon: faDownload,
      isAuth: true,
      onClick: () => {
        window.open("https://rishus-apis.herokuapp.com/mycv");
      },
    },
  ];
  // const imei = "352112081033620";

  return (
    <div
      className="nav-cus"
      style={{ backgroundColor: "#333333", color: "white" }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          padding: "25px",
          fontSize: "20px",
        }}
      >
        <div
          onClick={() => scrolltoId("home")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "52%",
          }}
        >
          {React.createElement(reactFontawesome.FontAwesomeIcon, {
            icon: faSmileWink,
            size: "lg",
          })}
          <div className="title">Rishab Mangal</div>
        </div>
        <button
          id="button"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "white",
            borderRadius: "5px",
          }}
          onClick={() => setToggle(!toggle)}
        >
          ☰
        </button>
      </div>
      <CSSTransition
        in={toggle}
        timeout={300}
        classNames="my-node"
        unmountOnExit
      >
        <ul>
          {menuItems.map((item, i) => (
            <li
              key={i + Math.random()}
              onClick={item.onClick}
              className="menu-list-item"
            >
              {React.createElement(reactFontawesome.FontAwesomeIcon, {
                icon: item.icon,
                size: "lg",
              })}
              <div className="title">{item.title}</div>
            </li>
          ))}
        </ul>
      </CSSTransition>
    </div>
  );
};

export default MobileNav;
