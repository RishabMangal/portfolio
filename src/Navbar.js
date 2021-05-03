import React from "react";
import Navbar from "reactjs-navbar";
import "reactjs-navbar/dist/index.css";
import Loader from "react-loader-spinner";
// import logo from "./logo.png";
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
const CustomNav = () => {
  const scrolltoId = (id) => {
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

  return (
    <div className="nav-cus">
      <Navbar
        // logo={logo}
        loader={<Loader type="Puff" color="#D85B5B" height={25} width={25} />}
        isLoading={false}
        menuItems={[
          {
            title: "Rishab Mangal",
            icon: faSmileWink,
            isAuth: true,
            onClick: () => scrolltoId("home"),
          },
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
        ]}
      />
    </div>
  );
};

export default CustomNav;
