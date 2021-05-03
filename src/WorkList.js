import React from "react";
import chefaura from "./logo/chefaura.png";
import react from "./logo/react.jpg";
import Work from "./Work";

const WorkList = () => {
  const projects = [
    {
      title: "ChefAura",
      link: "https://chefaura.com/",
      slug: "chefaura",
      image: chefaura,
      tagline: "An Instagram  for Recipes",
      role: "Front-End Developer",
      duration: "6 Months",
      tech: [
        "fab fa-html5 px-2 mr-2 font-weight-light",
        "fab fa-css3-alt px-2 mr-2 text-primary font-weight-light",
        "fab fa-js-square px-2 mr-2 text-warning font-weight-light",
      ],
      logo: [react],
    },
  ];
  return (
    <div className="my-5" id="work-experience">
      <h2 className="text-center display-4 p-3 my-3">Work Experience</h2>
      <div className="" style={{ marginRight: "3%", marginLeft: "3%" }}>
        {projects.map((i, x) => {
          return (
            <div className="p-2 project" key={x}>
              <Work data={i}></Work>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkList;
