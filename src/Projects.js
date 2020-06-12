import React from "react";
import portfolio from "./logo/portfolio.png";
import backmeup from "./logo/backmeup.png";
import gitscard from "./logo/gitscard.png";
import mongodb from "./logo/mongodb.png";
import todo from "./logo/todo.png";
import contactmanager from "./logo/contactmanager.png";
import feed from "./logo/feed.jpg";
import covid from './logo/covid.png';
import Project from "./Project";

function Projects() {
  const projects = [
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
      logo: mongodb,
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
      logo: null,
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
      logo: null,
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
      logo: mongodb,
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
      logo: null,
      // animationr: "slider 2s infinite ",
      // animationl: "slidel 5s infinite "
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
      logo: null,
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
      logo: mongodb,
    },
    {
      title: "Feedback Software",
      link: "https://github.com/RishabMangal/FEEDBACK-SOFTWARE",
      image: feed,
      tagline: " A simple App to Store Customers Feedback For a Cafe.",
      tech: ["fab fa-python px-2 mr-2 text-warning font-weight-light"],
      logo: null,
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
