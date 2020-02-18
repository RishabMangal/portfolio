import React from 'react'
import portfolio from './logo/portfolio.png'
import mongodb from "./logo/mongodb.png";
import todo from "./logo/todo.jpg"
import contactmanager from './logo/contactmanager.png'
import feed from './logo/feed.jpg'
import './resume.css'
import Project from './Project';
function Projects() {
    const projects = [
        {
            title: "TO-DO App",
            link: "https://tooo-dooo.herokuapp.com/",
            image: todo,
            tagline: "A simple To-Do App to Store your todo list.",
            tech: ["fab fa-html5 px-2 mr-2 font-weight-light", "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light", "fab fa-js-square px-2 mr-2 text-warning font-weight-light", "fab fa-node px-2 mr-2 text-success font-weight-light"],
            logo: mongodb,
            // animationr: "slider 2s infinite ",
            // animationl: "slidel 5s infinite "
        },
        {
            title: "Contact Manager",
            link: "https://rishabmangal.github.io/Contact-Manager/#/",
            image: contactmanager,
            tagline: " A simple App to Store your Contacts list.",
            tech: ["fab fa-html5 px-2 mr-2 font-weight-light", "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light", "fab fa-js-square px-2 mr-2 text-warning font-weight-light", "fab fa-node px-2 mr-2 text-success font-weight-light"],
            logo: null,
            // animationl: "slidel 2s infinite "
        },
        {
            title: "Portfolio",
            link: "https://rishabmangal.netlify.com",
            image: portfolio,
            tagline: "A simple App to Showcase my CV and Skills.",
            tech: ["fab fa-html5 px-2 mr-2 font-weight-light", "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light", "fab fa-js-square px-2 mr-2 text-warning font-weight-light", "fab fa-node px-2 mr-2 text-success font-weight-light"],
            logo: null
        },
        {
            title: "Feedback Software",
            link: "https://github.com/RishabMangal/FEEDBACK-SOFTWARE",
            image: feed,
            tagline:" A simple App to Store Customers Feedback For a Cafe.",
            tech: ["fab fa-python px-2 mr-2 text-warning font-weight-light"],
            logo:null
        }
    ]
    return (
        <div>
            <div className="my-5" id="projects">
                <h2
                    className="text-center display-4 p-3 my-3 card"
                    style={{ backgroundColor: "#F1F1F1" }}
                >
                    Projects
                </h2>
                {projects.map((i, x) => { return (<Project key={x} data={i}></Project>) })}
            </div>
        </div>
    )
}

export default Projects
