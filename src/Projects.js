import React from "react";
import portfolio from "./logo/portfolio.png";
import coide from "./logo/coide.png";
import jump from "./logo/jump.png";
import backmeup from "./logo/backmeup.png";
import letschat from "./logo/letschat.png";
import gitscard from "./logo/gitscard.png";
import currenter from "./logo/currenter.png";
import mongodb from "./logo/mongodb.png";
import todo from "./logo/todo.png";
import contactmanager from "./logo/contactmanager.png";
import feed from "./logo/feed.jpg";
import covid from "./logo/covid.png";
import Project from "./Project";
import react from "./logo/react.jpg";
import phaser from "./logo/phaser.png";
function Projects() {
  const projects = [
    {
      title: "COiDE",
      link: "https://coide.netlify.app/",
      image: coide,
      tagline: "A code editor with hot reload to view output simultaneously",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
      ],
      logo: [react],

      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },
    {
      title: "Jumping Jumping",
      link: "https://jumping-jumping.netlify.app/",
      image: jump,
      tagline:
        "A simple Game made using phaser where user have to collect all the stars and move to next level",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
      ],
      logo: [react, phaser],
      action: "Play the Game",
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },
    {
      title: "Lets Chat",
      link: "https://letschatt.netlify.app/",
      image: letschat,
      tagline: "A Simple React Chat App Using Socket.io",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react],
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },
    {
      title: "BackMeUp",
      link: "https://backmeup.netlify.app/",
      image: backmeup,
      tagline:
        "A simple App to Store all your contacts list, todo list and account.",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react, mongodb],
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },

    {
      title: "Github Cards",
      link: "https://gitscard.netlify.app/",
      image: gitscard,
      tagline: "Enter Github Handle and get Github Profile",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react],
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },
    {
      title: "Currency Converter",
      link: "https://currenter.netlify.app/",
      image: currenter,
      tagline: "A simple React app to Convert Currency using FIXER API.",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react],
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },
    {
      title: "Covid-19 Tracker",
      link: "https://covid19-trackit.netlify.app/",
      image: covid,
      tagline: "A simple React App to Track Number of Corona Victims Globally.",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react],
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },
    {
      title: "TO-DO App",
      link: "https://tooo-dooo.herokuapp.com/",
      image: todo,
      tagline: "A simple To-Do App to Store your todo list.",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react, mongodb],
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
    },
    {
      title: "Portfolio",
      link: "https://rishabmangal.netlify.app",
      image: portfolio,
      tagline: "A simple App to Showcase my CV and Skills.",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react],
    },

    {
      title: "Contact Manager",
      link: "https://rishabmangal.github.io/Contact-Manager/#/",
      image: contactmanager,
      tagline: " A simple App to Store your Contacts list.",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react],
      // animationl: "slidel 2s infinite "
    },
    {
      title: "Drawing App",
      link: "https://github.com/RishabMangal/Drawing_App",
      image: feed,
      tagline:
        "A simple Drawing App where a Canvas is shared between Single Host and multiple Clients.",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
        "fab fa-node px-2 mr-2 text-success font-weight-light",
      ],
      logo: [react, mongodb],
    },
    {
      title: "Feedback Software",
      link: "https://github.com/RishabMangal/FEEDBACK-SOFTWARE",
      image: feed,
      tagline: " A simple App to Store Customers Feedback For a Cafe.",
      tech: ["fab fa-python px-2 mr-2 text-warning font-weight-light"],
      logo: [],
    },
  ];
  return (
    <div>
      <div className="my-5" id="projects">
        <h2 className="text-center display-4 p-3 my-3">Projects</h2>
        <div className="" style={{ marginRight: "3%", marginLeft: "3%" }}>
          {projects.map((i, x) => {
            return (
              <div className="p-2 project" key={x}>
                <Project data={i}></Project>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
