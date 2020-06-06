import React from "react";
import Skill from "./Skill";
import node from "./logo/node.png";
import react from "./logo/react.jpg";
import redux from "./logo/redux.png";
import jquery from "./logo/jquery.png";
import html from "./logo/html.png";
import css from "./logo/css.png";
import js from "./logo/js.png";
import php from "./logo/php.png";
import mysql from "./logo/mysql.jpg";
import mongo from "./logo/mongo.jpg";
import bootstrap from "./logo/bootstrap.png";
import c from "./logo/c.png";
import cpp from "./logo/cpp.png";
import java from "./logo/java.png";
import python from "./logo/python.jpg";
import unity from "./logo/unity.jpg";
function Skills(props) {
  const skills = [
    {
      name: "HTML",
      level: "Intermidiate",
      animation: "threeD1 5s linear infinite",
      skillimg: html,
    },
    {
      name: "CSS",
      level: "Intermidiate",
      animation: "threeD2 5s linear infinite",
      skillimg: css,
    },
    {
      name: "JavaScript",
      level: "Intermidiate",
      animation: "threeD3 5s linear infinite",
      skillimg: js,
    },
    {
      name: "NodeJs",
      level: "Intermidiate",
      animation: "threeD1 5s linear infinite",
      skillimg: node,
    },
    {
      name: "ReactJs",
      level: "Intermidiate",
      animation: "threeD2 5s linear infinite",
      skillimg: react,
    },
    {
      name: "ReduxJs",
      level: "Beginner",
      animation: "threeD3 5s linear infinite",
      skillimg: redux,
    },
    {
      name: "jQuery",
      level: "Beginner",
      animation: "threeD1 5s linear infinite",
      skillimg: jquery,
    },
    {
      name: "PHP",
      level: "Beginner",
      animation: "threeD2 5s linear infinite",
      skillimg: php,
    },
    {
      name: "mySQL",
      level: "Beginner",
      animation: "threeD3 5s linear infinite",
      skillimg: mysql,
    },
    {
      name: "MongoDB",
      level: "Intermidiate",
      animation: "threeD1 5s linear infinite",
      skillimg: mongo,
    },
    {
      name: "Bootstrap",
      level: "Intermidiate",
      animation: "threeD2 5s linear infinite",
      skillimg: bootstrap,
    },
    {
      name: "C",
      level: "Intermidiate",
      animation: "threeD3 5s linear infinite",
      skillimg: c,
    },
    {
      name: "C++",
      level: "Intermidiate",
      animation: "threeD1 5s linear infinite",
      skillimg: cpp,
    },
    {
      name: "Java",
      level: "Beginner",
      animation: "threeD2 5s linear infinite",
      skillimg: java,
    },
    {
      name: "Python",
      level: "Beginner",
      animation: "threeD3 5s linear infinite",
      skillimg: python,
    },
    {
      name: "Unity",
      level: "Beginner",
      animation: "threeD1 5s linear infinite",
      skillimg: unity,
    },
  ];
  return (
    <div className="text-center skills">
      <h2 className="display-4 skills-header">Skills</h2>
      <div className="row">
        {skills.map((d, i) => (
          <div className="col-sm-3 mr-0" key={i}>
            <Skill
              skillimg={d.skillimg}
              name={d.name}
              level={d.level}
              animation={d.animation}
            ></Skill>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
